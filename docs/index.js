import svgpath from"https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm";const htmlLang=document.documentElement.lang,ttsLang=getTTSLang(htmlLang);let correctCount=0;const audioContext=new AudioContext,audioBufferCache={};loadAudio("modified","/japan-map-puzzle/mp3/decision50.mp3"),loadAudio("correct","/japan-map-puzzle/mp3/correct3.mp3"),loadAudio("correctAll","/japan-map-puzzle/mp3/correct1.mp3");let ttsVoices=[];loadVoices(),loadConfig();function loadConfig(){localStorage.getItem("darkMode")==1&&document.documentElement.setAttribute("data-bs-theme","dark")}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),document.documentElement.setAttribute("data-bs-theme","light")):(localStorage.setItem("darkMode",1),document.documentElement.setAttribute("data-bs-theme","dark"))}async function playAudio(b,c){const d=await loadAudio(b,audioBufferCache[b]),a=audioContext.createBufferSource();if(a.buffer=d,c){const b=audioContext.createGain();b.gain.value=c,b.connect(audioContext.destination),a.connect(b),a.start()}else a.connect(audioContext.destination),a.start()}async function loadAudio(a,c){if(audioBufferCache[a])return audioBufferCache[a];const d=await fetch(c),e=await d.arrayBuffer(),b=await audioContext.decodeAudioData(e);return audioBufferCache[a]=b,b}function unlockAudio(){audioContext.resume()}function loadVoices(){const a=new Promise(b=>{let a=speechSynthesis.getVoices();if(a.length!==0)b(a);else{let c=!1;speechSynthesis.addEventListener("voiceschanged",()=>{c=!0,a=speechSynthesis.getVoices(),b(a)}),setTimeout(()=>{c||document.getElementById("noTTS").classList.remove("d-none")},1e3)}});a.then(a=>{ttsVoices=a.filter(a=>a.lang==ttsLang)})}function speak(b){speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(b);return a.voice=ttsVoices[Math.floor(Math.random()*ttsVoices.length)],a.lang=ttsLang,speechSynthesis.speak(a),a}function getRandomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a}function getPrefectureId(a){while(!a.dataset.code)a=a.parentNode;return a.dataset.code}function getPieceSvgFromPath(l,h){const i="http://www.w3.org/2000/svg",a=document.createElementNS(i,"svg"),g=document.createElementNS(i,"path"),e=svgpath(l.getAttribute("d"));let b=1/0,c=1/0,d=-(1/0),f=-(1/0);e.segments.forEach(g=>{const[h,a,e]=g;a<b&&(b=a),e<c&&(c=e),d<a&&(d=a),f<e&&(f=e)});const j=d-b,k=f-c;return e.translate(-b,-c),g.setAttribute("d",e.toString()),a.setAttribute("width",j*h),a.setAttribute("height",k*h),a.setAttribute("viewBox",`0 0 ${j} ${k}`),a.appendChild(g),a}function getPieceSvgFromPolygon(l,i){const j="http://www.w3.org/2000/svg",a=document.createElementNS(j,"svg"),f=document.createElementNS(j,"polygon"),g=l.getAttribute("points").split(" ").map(Number);let b=1/0,c=1/0,d=-(1/0),e=-(1/0);g.forEach((a,f)=>{f%2==0?(a<b&&(b=a),d<a&&(d=a)):(a<c&&(c=a),e<a&&(e=a))});const k=d-b,h=e-c,m=g.map((a,d)=>d%2==0?a-c:a-b);return f.setAttribute("points",m.join(" ")),a.setAttribute("width",k*i),a.setAttribute("height",h*i),a.setAttribute("viewBox",`0 0 ${k} ${h}`),a.appendChild(f),a}function getPieceSvg(b,c){let a;b.tagName=="path"?a=getPieceSvgFromPath(b,c):a=getPieceSvgFromPolygon(b,c),a.setAttribute("fill","black"),a.setAttribute("opacity","0.8");const d=getRandomInt(0,canvas.width/2),e=getRandomInt(0,canvas.height/2);return a.style=`position:absolute; top:${e}; left:${d};`,a}function checkAngle(b,c){let a=Math.abs(b.angle+c.angle);return a>180&&(a=360-a),a<=angleThreshold}function checkSpinnedPosition(f,b,c){const d=b.getCenterPoint(),a=f.getBoundingClientRect(),g=a.left+a.width/2,h=a.top+a.height/2,e=c.width/a.width,i=e*c.scaleX*b.scaleX,j=e*c.scaleY*b.scaleY;return!(Math.abs(d.x-g)>positionThreshold)&&(!(Math.abs(d.y-h)>positionThreshold)&&(!(Math.abs(i-1)>scaleThreshold)&&(!(Math.abs(j-1)>scaleThreshold))))}function checkPosition(e,a){const b=e.getBoundingClientRect(),c=a.width*a.scaleX,d=a.height*a.scaleY,f=a.left-c/2,g=a.top-d/2;return!(Math.abs(f-b.x)>positionThreshold)&&(!(Math.abs(g-b.y)>positionThreshold)&&(!(Math.abs(c-b.width)>positionThreshold)&&(!(Math.abs(d-b.height)>positionThreshold))))}function addPrefectureText(a){clearTimeout(prefectureTimer),canvas.remove(prefectureText);const b=canvas.width/prefectureTextLength;prefectureText=new fabric.Text(a,{fontSize:b,fontFamily:"serif",left:canvas.width/2,top:canvas.height/2,originX:"center",originY:"center",selectable:!1,fill:"blue"}),canvas.add(prefectureText),canvas.sendToBack(prefectureText),prefectureTimer=setTimeout(()=>{canvas.remove(prefectureText)},2e3)}function setMovableOption(a,b){switch(b){case 0:case 1:case 2:a.setControlsVisibility({bl:!1,br:!1,ml:!1,mt:!1,mr:!1,mb:!1,tl:!1,tr:!1,mtr:!1}),a.hasBorders=!1;break;case 3:case 4:case 5:{const b=a.left+a.width/2,c=a.top+a.height/2;a.set({originX:"center",originY:"center",left:b,top:c,angle:Math.random()*360}),a.selectable=!1;break}case 6:case 7:case 8:{a.setControlsVisibility({mtr:!1});const b=(.5+Math.random())*canvas.width/10,c=(.5+Math.random())*canvas.height/10;a.set({scaleX:b/a.width,scaleY:c/a.height});break}case 9:case 10:case 11:{const b=(.5+Math.random())*canvas.width/10,c=(.5+Math.random())*canvas.height/10;a.set({scaleX:b/a.width,scaleY:c/a.height});const d=a.left+a.width/2,e=a.top+a.height/2;a.set({originX:"center",originY:"center",left:d,top:e,angle:Math.random()*360}),a.selectable=!1;break}}}function addControlRect(a,e){const f=Math.pow(a.width*a.scaleX,2),g=Math.pow(a.height*a.scaleY,2),b=Math.sqrt(f+g)*.8,d=new fabric.Rect({originX:"center",originY:"center",left:a.left,top:a.top,width:b,height:b,opacity:0,selectable:!1});canvas.add(d);const c=new fabric.Group([d,a],{originX:"center",originY:"center",width:b,height:b,opacity:a.opacity,transparentCorners:!1,cornerStyle:"circle"});return e<9&&c.setControlsVisibility({bl:!1,br:!1,ml:!1,mt:!1,mr:!1,mb:!1,tl:!1,tr:!1}),canvas.add(c),c}function addScoreText(){const a=((Date.now()-startTime)*1e3/1e6).toFixed(3),b=`${a} sec!`,c=canvas.width/8;scoreText=new fabric.Text(b,{fontSize:c,left:canvas.width/2,top:canvas.height/2,originX:"center",originY:"center",selectable:!1,fill:"blue"}),setTimeout(()=>{canvas.add(scoreText),canvas.sendToBack(scoreText)},2e3)}function setCorrectPiece(a){a.setAttribute("fill","silver"),correctCount+=1,correctCount==prefectureNames.length?(playAudio("correctAll"),addScoreText()):playAudio("correct");const c=getPrefectureId(a),b=prefectureNames[c];addPrefectureText(b),speak(b)}function adjustElementPosition(a){const d=a.width*a.scaleX,e=a.height*a.scaleY,b=d/2,c=e/2;if(a.left<b)a.set({left:b});else if(canvas.width<a.left+b){const c=canvas.width-b;a.set({left:c})}if(a.top<c)a.set({top:c});else if(canvas.height<a.top+c){const b=canvas.height-c;a.set({top:b})}a.setCoords()}function setMovable(a,c,b){new fabric.loadSVGFromString(c.outerHTML,(d,e)=>{const c=fabric.util.groupSVGElements(d,e);if(c.set({left:c.left+c.width/2,top:c.top+c.height/2,originX:"center",originY:"center",transparentCorners:!1,cornerStyle:"circle"}),setMovableOption(c,b),canvas.add(c),c.selectable)c.on("modified",b=>{if(playAudio("modified"),adjustElementPosition(b.target),!checkPosition(a,b.target))return;canvas.remove(c),setCorrectPiece(a)});else{const d=addControlRect(c,b);d.on("modified",()=>{if(playAudio("modified"),c.set("angle",c.angle+d.angle),d.set("angle",0),adjustElementPosition(d),!checkSpinnedPosition(a,d,c))return;if(!checkAngle(c,d))return;d.getObjects().forEach(a=>{canvas.remove(a)}),canvas.remove(d),setCorrectPiece(a)})}})}function getSVGScale(a,b){const c=b.querySelector("svg"),d=c.getAttribute("viewBox").split(" ")[2],e=a.getBoundingClientRect();return e.width/Number(d)}function shuffleSVG(){canvas.clear();const c=document.getElementById("courseOption").selectedIndex,d=document.getElementById("map"),a=d.contentDocument,e=getSVGScale(d,a),f=a.querySelectorAll("polygon, path");f.forEach(a=>{if(a.classList.contains("main")){a.removeAttribute("fill");const b=getPieceSvg(a,e);setMovable(a,b,c)}else a.setAttribute("fill","black")});const b=a.querySelectorAll(".prefecture");switch(c%3){case 0:b.forEach(a=>{a.setAttribute("fill","#eee"),a.setAttribute("stroke-width",1)});break;case 1:b.forEach(a=>{a.setAttribute("fill","#eee"),a.setAttribute("stroke-width",0)});break;case 2:b.forEach(a=>{a.setAttribute("fill","none"),a.setAttribute("stroke-width",0)});break}}function startGame(){correctCount=0,startTime=Date.now(),canvas.remove(scoreText),shuffleSVG()}function initCanvas(){const a=document.getElementById("map").getBoundingClientRect(),b=new fabric.Canvas("canvas",{left:a.left,top:a.top,width:a.width,height:a.height});return document.getElementById("canvas").parentNode.style.position="absolute",b}function resizePieces(b){const a=b.width/canvas.getWidth();canvas.setDimensions({width:b.width,height:b.height}),canvas.getObjects().forEach(b=>{b.left*=a,b.top*=a,b.scaleX*=a,b.scaleY*=a,b.setCoords()})}function calcPrefectureTextLength(b,c){const a=Math.max(...c.map(a=>a.length));switch(b){case"ja":return a;case"en":return Math.ceil(a/1.5)}}function changeLang(){const a=document.getElementById("lang"),b=a.options[a.selectedIndex].value;location.href=`/japan-map-puzzle/${b}/`}function getTTSLang(a){switch(a){case"en":return"en-US";case"ja":return"ja-JP"}}async function initPrefecturesInfo(a){const b=await fetch(`/japan-map-puzzle/data/${a}.lst`),c=await b.text();prefectureNames=c.trimEnd().split("\n"),prefectureTextLength=calcPrefectureTextLength(a,prefectureNames)}const canvas=initCanvas(),positionThreshold=20,scaleThreshold=.3,angleThreshold=20;let prefectureNames,prefectureText,prefectureTextLength,prefectureTimer,startTime,scoreText;initPrefecturesInfo(htmlLang),document.getElementById("startButton").onclick=startGame,document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("lang").onchange=changeLang,document.addEventListener("click",unlockAudio,{once:!0,useCapture:!0}),globalThis.addEventListener("resize",()=>{const a=document.getElementById("map"),b=a.getBoundingClientRect();resizePieces(b)})