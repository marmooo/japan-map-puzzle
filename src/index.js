import svgpath from "https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm";

const htmlLang = document.documentElement.lang;
const ttsLang = getTTSLang(htmlLang);
let correctCount = 0;
const audioContext = new AudioContext();
const audioBufferCache = {};
loadAudio("modified", "/japan-map-puzzle/mp3/decision50.mp3");
loadAudio("correct", "/japan-map-puzzle/mp3/correct3.mp3");
loadAudio("correctAll", "/japan-map-puzzle/mp3/correct1.mp3");
let ttsVoices = [];
loadVoices();
loadConfig();

function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}

function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}

async function playAudio(name, volume) {
  const audioBuffer = await loadAudio(name, audioBufferCache[name]);
  const sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  if (volume) {
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    gainNode.connect(audioContext.destination);
    sourceNode.connect(gainNode);
    sourceNode.start();
  } else {
    sourceNode.connect(audioContext.destination);
    sourceNode.start();
  }
}

async function loadAudio(name, url) {
  if (audioBufferCache[name]) return audioBufferCache[name];
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  audioBufferCache[name] = audioBuffer;
  return audioBuffer;
}

function unlockAudio() {
  audioContext.resume();
}

function loadVoices() {
  // https://stackoverflow.com/questions/21513706/
  const allVoicesObtained = new Promise((resolve) => {
    let voices = speechSynthesis.getVoices();
    if (voices.length !== 0) {
      resolve(voices);
    } else {
      let supported = false;
      speechSynthesis.addEventListener("voiceschanged", () => {
        supported = true;
        voices = speechSynthesis.getVoices();
        resolve(voices);
      });
      setTimeout(() => {
        if (!supported) {
          document.getElementById("noTTS").classList.remove("d-none");
        }
      }, 1000);
    }
  });
  allVoicesObtained.then((voices) => {
    ttsVoices = voices.filter((voice) => voice.lang == ttsLang);
  });
}

function speak(text) {
  speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.voice = ttsVoices[Math.floor(Math.random() * ttsVoices.length)];
  msg.lang = ttsLang;
  speechSynthesis.speak(msg);
  return msg;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getPrefectureId(node) {
  while (!node.dataset.code) {
    node = node.parentNode;
  }
  const code = node.dataset.code;
  return parseInt(code) - 1;
}

function getPieceSvgFromPath(island, svg, rect) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const path = document.createElementNS(svgNamespace, "path");
  const data = svgpath(island.getAttribute("d"));
  const { x, y } = rect;
  data.translate(-x, -y);
  path.setAttribute("d", data.toString());
  svg.appendChild(path);
  return svg;
}

function getPieceSvgFromPolygon(island, svg, rect) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const polygon = document.createElementNS(svgNamespace, "polygon");
  const { x, y } = rect;
  const data = island.getAttribute("points").split(" ").map(Number);
  const points = data.map((p, i) => (i % 2 == 0) ? p - y : p - x);
  polygon.setAttribute("points", points.join(" "));
  svg.appendChild(polygon);
  return svg;
}

function getPieceSvgFromGroup(island, svg) {
  const g = island.cloneNode(true);
  svg.appendChild(g);
  return svg;
}

function getPieceSvg(island, scale) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg");
  const rect = island.getBBox();
  const { width, height } = rect;
  svg.setAttribute("width", width * scale);
  svg.setAttribute("height", height * scale);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("fill", "black");
  svg.setAttribute("opacity", "0.8");
  switch (island.tagName) {
    case "path":
      return getPieceSvgFromPath(island, svg, rect);
    case "polygon":
      return getPieceSvgFromPolygon(island, svg, rect);
    case "g":
      return getPieceSvgFromGroup(island, svg);
    default:
      throw new Error("not supported");
  }
}

function checkAngle(group, wrapper) {
  let diff = Math.abs(group.angle + wrapper.angle);
  if (diff > 180) diff = 360 - diff;
  return (diff <= angleThreshold) ? true : false;
}

function checkSpinnedPosition(island, wrapper, group) {
  const center = wrapper.getCenterPoint();
  const original = island.getBoundingClientRect();
  const centerX = original.left + original.width / 2;
  const centerY = original.top + original.height / 2;
  const originalScale = group.width / original.width;
  const scaleX = originalScale * group.scaleX * wrapper.scaleX;
  const scaleY = originalScale * group.scaleY * wrapper.scaleY;
  if (Math.abs(center.x - centerX) > positionThreshold) return false;
  if (Math.abs(center.y - centerY) > positionThreshold) return false;
  if (Math.abs(scaleX - 1) > scaleThreshold) return false;
  if (Math.abs(scaleY - 1) > scaleThreshold) return false;
  return true;
}

function checkPosition(island, rect) {
  const original = island.getBoundingClientRect();
  const width = rect.width * rect.scaleX;
  const height = rect.height * rect.scaleY;
  const left = rect.left - width / 2;
  const top = rect.top - height / 2;
  if (Math.abs(left - original.x) > positionThreshold) return false;
  if (Math.abs(top - original.y) > positionThreshold) return false;
  if (Math.abs(width - original.width) > positionThreshold) return false;
  if (Math.abs(height - original.height) > positionThreshold) return false;
  return true;
}

function addPrefectureText(prefectureName) {
  clearTimeout(prefectureTimer);
  canvas.remove(prefectureText);
  const fontSize = canvas.width / prefectureTextLength;
  prefectureText = new fabric.Text(prefectureName, {
    fontSize: fontSize,
    fontFamily: "serif",
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue",
  });
  canvas.add(prefectureText);
  canvas.sendToBack(prefectureText);
  prefectureTimer = setTimeout(() => {
    canvas.remove(prefectureText);
  }, 2000);
}

function setMovableOption(group, course) {
  switch (course) {
    case 0:
    case 1:
    case 2:
      group.setControlsVisibility({
        bl: false,
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        tl: false,
        tr: false,
        mtr: false,
      });
      group.hasBorders = false;
      break;
    case 3:
    case 4:
    case 5: {
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
      });
      group.selectable = false;
      break;
    }
    case 6:
    case 7:
    case 8: {
      group.setControlsVisibility({
        mtr: false,
      });
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height,
      });
      break;
    }
    case 9:
    case 10:
    case 11: {
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height,
      });
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
      });
      group.selectable = false;
      break;
    }
  }
}

function addControlRect(group, course) {
  const w2 = Math.pow(group.width * group.scaleX, 2);
  const h2 = Math.pow(group.height * group.scaleY, 2);
  const diagonalLength = Math.sqrt(w2 + h2) * 0.8;
  const controlRect = new fabric.Rect({
    originX: "center",
    originY: "center",
    left: group.left,
    top: group.top,
    width: diagonalLength,
    height: diagonalLength,
    opacity: 0,
    selectable: false,
  });
  canvas.add(controlRect);

  const wrapper = new fabric.Group([controlRect, group], {
    originX: "center",
    originY: "center",
    width: diagonalLength,
    height: diagonalLength,
    opacity: group.opacity,
    transparentCorners: false,
    cornerStyle: "circle",
  });
  if (course < 9) {
    wrapper.setControlsVisibility({
      bl: false,
      br: false,
      ml: false,
      mt: false,
      mr: false,
      mb: false,
      tl: false,
      tr: false,
    });
  }
  canvas.add(wrapper);
  return wrapper;
}

function addScoreText() {
  const time = (((Date.now() - startTime) * 1000) / 1000000).toFixed(3);
  const text = `${time} sec!`;
  const fontSize = canvas.width / 8;
  scoreText = new fabric.Text(text, {
    fontSize: fontSize,
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue",
  });
  setTimeout(() => {
    canvas.add(scoreText);
    canvas.sendToBack(scoreText);
  }, 2000);
}

function setCorrectPiece(island) {
  island.setAttribute("fill", "silver");
  correctCount += 1;
  if (correctCount == prefectureNames.length) {
    playAudio("correctAll");
    addScoreText();
  } else {
    playAudio("correct");
  }
  const id = getPrefectureId(island);
  const prefectureName = prefectureNames[id];
  addPrefectureText(prefectureName);
  speak(prefectureName);
}

function adjustElementPosition(element) {
  const width = element.width * element.scaleX;
  const height = element.height * element.scaleY;
  const w2 = width / 2;
  const h2 = height / 2;
  if (element.left < w2) {
    element.set({ left: w2 });
  } else if (canvas.width < element.left + w2) {
    const maxLeft = canvas.width - w2;
    element.set({ left: maxLeft });
  }
  if (element.top < h2) {
    element.set({ top: h2 });
  } else if (canvas.height < element.top + h2) {
    const maxTop = canvas.height - h2;
    element.set({ top: maxTop });
  }
  element.setCoords();
}

function setMovable(island, svg, course) {
  new fabric.loadSVGFromString(svg.outerHTML, (objects, options) => {
    const group = fabric.util.groupSVGElements(objects, options);
    group.set({
      left: getRandomInt(0, canvas.width / 2),
      top: getRandomInt(0, canvas.height / 2),
    });
    group.set({
      left: group.left + group.width / 2,
      top: group.top + group.height / 2,
      originX: "center",
      originY: "center",
      transparentCorners: false,
      cornerStyle: "circle",
    });
    setMovableOption(group, course);
    canvas.add(group);

    if (group.selectable) {
      group.on("modified", (event) => {
        playAudio("modified");
        adjustElementPosition(event.target);
        if (!checkPosition(island, event.target)) return;
        canvas.remove(group);
        setCorrectPiece(island);
      });
    } else {
      const wrapper = addControlRect(group, course);
      wrapper.on("modified", () => {
        playAudio("modified");
        group.set("angle", group.angle + wrapper.angle);
        wrapper.set("angle", 0);
        adjustElementPosition(wrapper);
        if (!checkSpinnedPosition(island, wrapper, group)) return;
        if (!checkAngle(group, wrapper)) return;
        wrapper.getObjects().forEach((obj) => {
          canvas.remove(obj);
        });
        canvas.remove(wrapper);
        setCorrectPiece(island);
      });
    }
  });
}

function getSVGScale(map, doc) {
  const svg = doc.querySelector("svg");
  const width = svg.getAttribute("viewBox").split(" ")[2];
  const rect = map.getBoundingClientRect();
  return rect.width / Number(width);
}

function shuffleSVG() {
  canvas.clear();
  const course = document.getElementById("courseOption").selectedIndex;
  const map = document.getElementById("map");
  const doc = map.contentDocument;
  const scale = getSVGScale(map, doc);
  const islands = doc.querySelectorAll("polygon, path");
  islands.forEach((island) => {
    if (island.classList.contains("main")) {
      island.removeAttribute("fill");
      const svg = getPieceSvg(island, scale);
      setMovable(island, svg, course);
    } else {
      island.setAttribute("fill", "black");
    }
  });
  const prefectures = doc.querySelectorAll(".prefecture");
  switch (course % 3) {
    case 0:
      prefectures.forEach((prefecture) => {
        prefecture.setAttribute("fill", "#eee");
        prefecture.setAttribute("stroke-width", 1);
      });
      break;
    case 1:
      prefectures.forEach((prefecture) => {
        prefecture.setAttribute("fill", "#eee");
        prefecture.setAttribute("stroke-width", 0);
      });
      break;
    case 2:
      prefectures.forEach((prefecture) => {
        prefecture.setAttribute("fill", "none");
        prefecture.setAttribute("stroke-width", 0);
      });
      break;
  }
}

function startGame() {
  if (!canvas) canvas = initCanvas();
  canvas.remove(scoreText);
  shuffleSVG();
  correctCount = 0;
  startTime = Date.now();
}

function initCanvas() {
  const rect = document.getElementById("map").getBoundingClientRect();
  const canvas = new fabric.Canvas("canvas", {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  });
  // canvas.selection = false;
  canvas.on("selection:created", (event) => {
    if (event.selected.length > 1) {
      const selection = canvas.getActiveObject();
      selection.setControlsVisibility({
        bl: false,
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        tl: false,
        tr: false,
        mtr: false,
      });
    }
  });
  document.getElementById("canvas").parentNode.style.position = "absolute";
  return canvas;
}

function resizePieces(rect) {
  const scale = rect.width / canvas.getWidth();
  canvas.setDimensions({ width: rect.width, height: rect.height });
  canvas.getObjects().forEach((object) => {
    object.left *= scale;
    object.top *= scale;
    object.scaleX *= scale;
    object.scaleY *= scale;
    object.setCoords();
  });
}

function calcPrefectureTextLength(lang, prefectureNames) {
  const max = Math.max(...prefectureNames.map((str) => str.length));
  switch (lang) {
    case "ja":
      return max;
    case "en":
      /* consider proportional font */
      return Math.ceil(max / 1.5);
  }
}

function changeLang() {
  const langObj = document.getElementById("lang");
  const lang = langObj.options[langObj.selectedIndex].value;
  location.href = `/japan-map-puzzle/${lang}/`;
}

function getTTSLang(htmlLang) {
  switch (htmlLang) {
    case "en":
      return "en-US";
    case "ja":
      return "ja-JP";
  }
}
async function initPrefecturesInfo(htmlLang) {
  const response = await fetch(`/japan-map-puzzle/data/${htmlLang}.lst`);
  const text = await response.text();
  prefectureNames = text.trimEnd().split("\n");
  prefectureTextLength = calcPrefectureTextLength(htmlLang, prefectureNames);
}

const positionThreshold = 20;
const scaleThreshold = 0.3;
const angleThreshold = 20;
let canvas;
let prefectureNames;
let prefectureText;
let prefectureTextLength;
let prefectureTimer;
let startTime;
let scoreText;

initPrefecturesInfo(htmlLang);

document.getElementById("startButton").onclick = startGame;
document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("lang").onchange = changeLang;
document.addEventListener("click", unlockAudio, {
  once: true,
  useCapture: true,
});
globalThis.addEventListener("resize", () => {
  const map = document.getElementById("map");
  const rect = map.getBoundingClientRect();
  resizePieces(rect);
  if (prefectureText) {
    prefectureText.set({
      left: canvas.width / 2,
      top: canvas.height / 2,
    });
  }
  if (scoreText) {
    scoreText.set({
      left: canvas.width / 2,
      top: canvas.height / 2,
    });
  }
});
