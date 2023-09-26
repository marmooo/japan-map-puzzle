import svgpath from"https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm";const htmlLang=document.documentElement.lang,ttsLang=getTTSLang(htmlLang);let correctCount=0;const audioContext=new AudioContext,audioBufferCache={};loadAudio("modified","/japan-map-puzzle/mp3/decision50.mp3"),loadAudio("correct","/japan-map-puzzle/mp3/correct3.mp3"),loadAudio("correctAll","/japan-map-puzzle/mp3/correct1.mp3");let ttsVoices=[];loadVoices(),loadConfig();function loadConfig(){localStorage.getItem("darkMode")==1&&document.documentElement.setAttribute("data-bs-theme","dark")}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),document.documentElement.setAttribute("data-bs-theme","light")):(localStorage.setItem("darkMode",1),document.documentElement.setAttribute("data-bs-theme","dark"))}async function playAudio(b,c){const d=await loadAudio(b,audioBufferCache[b]),a=audioContext.createBufferSource();if(a.buffer=d,c){const b=audioContext.createGain();b.gain.value=c,b.connect(audioContext.destination),a.connect(b),a.start()}else a.connect(audioContext.destination),a.start()}async function loadAudio(a,c){if(audioBufferCache[a])return audioBufferCache[a];const d=await fetch(c),e=await d.arrayBuffer(),b=await audioContext.decodeAudioData(e);return audioBufferCache[a]=b,b}function unlockAudio(){audioContext.resume()}function loadVoices(){const a=new Promise(b=>{let a=speechSynthesis.getVoices();if(a.length!==0)b(a);else{let c=!1;speechSynthesis.addEventListener("voiceschanged",()=>{c=!0,a=speechSynthesis.getVoices(),b(a)}),setTimeout(()=>{c||document.getElementById("noTTS").classList.remove("d-none")},1e3)}});a.then(a=>{ttsVoices=a.filter(a=>a.lang==ttsLang)})}function speak(b){speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(b);return a.voice=ttsVoices[Math.floor(Math.random()*ttsVoices.length)],a.lang=ttsLang,speechSynthesis.speak(a),a}function getRandomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a}function getPrefectureId(a){while(!a.dataset.code)a=a.parentNode;const b=a.dataset.code;return parseInt(b)-1}function movePathPoints(a,c,d){a=a.cloneNode(!0);const b=svgpath(a.getAttribute("d"));return b.translate(-c,-d),a.setAttribute("d",b.toString()),a}function movePolygonPoints(a,b,c){a=a.cloneNode(!0);const d=a.getAttribute("points").split(" ").map(Number),e=d.map((a,d)=>d%2==0?a-c:a-b);return a.setAttribute("points",e.join(" ")),a}function moveGroupPoints(a,b,c){return a=a.cloneNode(!0),a.querySelectorAll("path, polygon").forEach(a=>{switch(a.tagName){case"path":a.replaceWith(movePathPoints(a,b,c));break;case"polygon":a.replaceWith(movePolygonPoints(a,b,c));break}}),a}function movePoints(a,b,c){switch(a.tagName){case"path":return movePathPoints(a,b,c);case"polygon":return movePolygonPoints(a,b,c);case"g":return moveGroupPoints(a,b,c);default:throw new Error("not supported")}}function getPieceSvg(b,c){const i="http://www.w3.org/2000/svg",a=document.createElementNS(i,"svg"),f=b.getBBox(),{x:g,y:h,width:e,height:d}=f;a.setAttribute("width",e*c),a.setAttribute("height",d*c),a.setAttribute("viewBox",`0 0 ${e} ${d}`),a.setAttribute("fill","black"),a.setAttribute("opacity","0.8");const j=movePoints(b,g,h);return a.appendChild(j),a}function checkSpinnedPosition(g,b,c){let d=Math.abs(c.angle+b.angle);if(d>180&&(d=360-d),d>angleThreshold)return!1;const e=b.getCenterPoint(),a=g.getBoundingClientRect(),h=a.left+a.width/2,i=a.top+a.height/2,f=c.width/a.width,j=f*c.scaleX*b.scaleX,k=f*c.scaleY*b.scaleY;return!(Math.abs(e.x-h)>positionThreshold)&&(!(Math.abs(e.y-i)>positionThreshold)&&(!(Math.abs(j-1)>scaleThreshold)&&(!(Math.abs(k-1)>scaleThreshold))))}function checkPosition(e,a){const b=e.getBoundingClientRect(),c=a.width*a.scaleX,d=a.height*a.scaleY,f=a.left-c/2,g=a.top-d/2;return!(Math.abs(f-b.x)>positionThreshold)&&(!(Math.abs(g-b.y)>positionThreshold)&&(!(Math.abs(c-b.width)>positionThreshold)&&(!(Math.abs(d-b.height)>positionThreshold))))}function addPrefectureText(a){clearTimeout(prefectureTimer),canvas.remove(prefectureText);const b=canvas.width/prefectureTextLength;prefectureText=new fabric.Text(a,{fontSize:b,fontFamily:"serif",left:canvas.width/2,top:canvas.height/2,originX:"center",originY:"center",selectable:!1,fill:"blue"}),canvas.add(prefectureText),canvas.sendToBack(prefectureText),prefectureTimer=setTimeout(()=>{canvas.remove(prefectureText)},2e3)}function setMovableOption(a,b){switch(b){case 0:case 1:case 2:a.setControlsVisibility({bl:!1,br:!1,ml:!1,mt:!1,mr:!1,mb:!1,tl:!1,tr:!1,mtr:!1}),a.hasBorders=!1;break;case 3:case 4:case 5:{const b=a.left+a.width/2,c=a.top+a.height/2;a.set({originX:"center",originY:"center",left:b,top:c,angle:Math.random()*360,selectable:!1});break}case 6:case 7:case 8:{a.setControlsVisibility({mtr:!1});const b=(.5+Math.random())*canvas.width/10,c=(.5+Math.random())*canvas.height/10;a.set({scaleX:b/a.width,scaleY:c/a.height});break}case 9:case 10:case 11:{const b=(.5+Math.random())*canvas.width/10,c=(.5+Math.random())*canvas.height/10;a.set({scaleX:b/a.width,scaleY:c/a.height});const d=a.left+a.width/2,e=a.top+a.height/2;a.set({originX:"center",originY:"center",left:d,top:e,angle:Math.random()*360,selectable:!1});break}}}function addControlRect(a,f){a.setCoords();const d=a.getBoundingRect(),b=Math.max(d.width,d.height),e=new fabric.Rect({originX:"center",originY:"center",left:a.left,top:a.top,width:b,height:b,opacity:0,selectable:!1});canvas.add(e);const c=new fabric.Group([e,a],{originX:"center",originY:"center",width:b,height:b,opacity:a.opacity,transparentCorners:!1,cornerStyle:"circle"});return f<9&&c.setControlsVisibility({bl:!1,br:!1,ml:!1,mt:!1,mr:!1,mb:!1,tl:!1,tr:!1}),canvas.add(c),c}function addScoreText(){const a=((Date.now()-startTime)*1e3/1e6).toFixed(3),b=`${a} sec!`,c=canvas.width/8;scoreText=new fabric.Text(b,{fontSize:c,left:canvas.width/2,top:canvas.height/2,originX:"center",originY:"center",selectable:!1,fill:"blue"}),setTimeout(()=>{canvas.add(scoreText),canvas.sendToBack(scoreText)},2e3)}function setCorrectPiece(a){a.setAttribute("fill","silver"),correctCount+=1,correctCount==prefectureNames.length?(playAudio("correctAll"),addScoreText()):playAudio("correct");const c=getPrefectureId(a),b=prefectureNames[c];addPrefectureText(b),speak(b)}function adjustElementPosition(a){const d=a.width*a.scaleX,e=a.height*a.scaleY,b=d/2,c=e/2;if(a.left<b)a.set({left:b});else if(canvas.width<a.left+b){const c=canvas.width-b;a.set({left:c})}if(a.top<c)a.set({top:c});else if(canvas.height<a.top+c){const b=canvas.height-c;a.set({top:b})}a.setCoords()}function setPieceGuideEvent(b,c){let a=0;c.on("mousedown",e=>{const c=document.getElementById("pieceGuide");c&&c.remove();const d=Date.now();if(d-a<200){const a=e.e,c=a instanceof TouchEvent?a.touches[0]:a,d=c.clientX,f=c.clientY-16,g=getPrefectureId(b),h=prefectureNames[g],i=`
        <div id="pieceGuide" class="tooltip show" role="tooltip"
          style="position:absolute; inset:0px auto auto 0px; transform:translate(${d}px,${f}px);">
          <div class="tooltip-inner">${h}</div>
        </div>
      `;document.getElementById("guide").insertAdjacentHTML("beforeend",i)}a=d})}function setMovable(a,c,b){new fabric.loadSVGFromString(c.outerHTML,(d,e)=>{const c=fabric.util.groupSVGElements(d,e);if(c.set({left:getRandomInt(0,canvas.width/2),top:getRandomInt(0,canvas.height/2)}),c.set({left:c.left+c.width/2,top:c.top+c.height/2,originX:"center",originY:"center",transparentCorners:!1,cornerStyle:"circle"}),setMovableOption(c,b),canvas.add(c),c.selectable)setPieceGuideEvent(a,c),c.on("modified",()=>{playAudio("modified"),checkPosition(a,c)?(canvas.remove(c),setCorrectPiece(a)):adjustElementPosition(c)});else{const d=addControlRect(c,b);setPieceGuideEvent(a,d),d.on("modified",()=>{playAudio("modified"),c.set("angle",c.angle+d.angle),c.setCoords();const b=c.getBoundingRect(),e=Math.max(b.width,b.height);d.set({angle:0,width:e,height:e}),checkSpinnedPosition(a,d,c)?(d.getObjects().forEach(a=>{canvas.remove(a)}),canvas.remove(d),setCorrectPiece(a)):adjustElementPosition(d)})}})}function getSVGScale(a,b){const c=b.querySelector("svg"),d=c.getAttribute("viewBox").split(" ")[2],e=a.getBoundingClientRect();return e.width/Number(d)}function shuffleSVG(){canvas.clear();const c=document.getElementById("courseOption").selectedIndex,a=map.contentDocument,d=getSVGScale(map,a),e=a.querySelectorAll("polygon, path");e.forEach(a=>{if(a.classList.contains("main")){a.removeAttribute("fill");const b=getPieceSvg(a,d);setMovable(a,b,c)}else a.setAttribute("fill","#ccc")});const b=a.querySelectorAll(".prefecture");switch(c%3){case 0:b.forEach(a=>{a.setAttribute("fill","#eee"),a.setAttribute("stroke-width",1)});break;case 1:b.forEach(a=>{a.setAttribute("fill","#eee"),a.setAttribute("stroke-width",0)});break;case 2:b.forEach(a=>{a.setAttribute("fill","none"),a.setAttribute("stroke-width",0)});break}}function startGame(){canvas||(canvas=initCanvas()),canvas.remove(scoreText),shuffleSVG(),correctCount=0,startTime=Date.now()}function setMapGuideMouseEvent(b){let a=0;b.on("mouse:down",b=>{const c=Date.now();if(c-a<200)if(!b.target){const a=b.e,c=findPieceNodes(a.offsetX,a.offsetY);c.forEach(b=>setMapGuideTooltip(a,b))}a=c})}function setMapGuideTouchEvent(a){let b=0;a.wrapperEl.addEventListener("touchstart",d=>{const c=Date.now();if(c-b<200){const b=d.touches[0],c=a.findTarget(b);if(!c){const a=map.getBoundingClientRect(),c=b.clientX-globalThis.scrollX-a.left,d=b.clientY-globalThis.scrollY-a.top,e=findPieceNodes(c,d);e.forEach(a=>setMapGuideTooltip(b,a))}}b=c})}function findPieceNodes(a,b){const c=map.contentDocument.elementsFromPoint(a,b),d=c.filter(a=>a.classList.contains("main"));return d}function setMapGuideTooltip(a,h){const i=a.clientX,d=a.clientY-16,e=getPrefectureId(h),f=prefectureNames[e],g=`
    <div class="tooltip show" role="tooltip"
      style="position:absolute; inset:0px auto auto 0px; transform:translate(${i}px,${d}px);">
      <div class="tooltip-inner">${f}</div>
    </div>
  `,b=document.getElementById("guide");b.insertAdjacentHTML("beforeend",g);const c=b.lastElementChild;c.onclick=()=>{c.remove()}}function initCanvas(){const a=map.getBoundingClientRect(),b=new fabric.Canvas("canvas",{left:a.left,top:a.top,width:a.width,height:a.height});return fabric.isTouchSupported?setMapGuideTouchEvent(b):setMapGuideMouseEvent(b),b.selection=!1,document.getElementById("canvas").parentNode.style.position="absolute",b}function resizePieces(){const b=map.getBoundingClientRect(),a=b.width/canvas.getWidth();canvas.setDimensions({width:b.width,height:b.height}),canvas.getObjects().forEach(b=>{b.left*=a,b.top*=a,b.scaleX*=a,b.scaleY*=a,b.setCoords()})}function calcPrefectureTextLength(b,c){const a=Math.max(...c.map(a=>a.length));switch(b){case"ja":return a;case"en":return Math.ceil(a/1.5)}}function changeLang(){const a=document.getElementById("lang"),b=a.options[a.selectedIndex].value;location.href=`/japan-map-puzzle/${b}/`}function getTTSLang(a){switch(a){case"en":return"en-US";case"ja":return"ja-JP"}}async function initPrefecturesInfo(a){const b=await fetch(`/japan-map-puzzle/data/${a}.lst`),c=await b.text();prefectureNames=c.trimEnd().split("\n"),prefectureTextLength=calcPrefectureTextLength(a,prefectureNames)}const map=document.getElementById("map"),positionThreshold=20,scaleThreshold=.3,angleThreshold=20;let canvas,prefectureNames,prefectureText,prefectureTextLength,prefectureTimer,startTime,scoreText;initPrefecturesInfo(htmlLang),document.getElementById("startButton").onclick=startGame,document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("lang").onchange=changeLang,document.addEventListener("click",unlockAudio,{once:!0,useCapture:!0}),globalThis.addEventListener("resize",()=>{if(!canvas)return;resizePieces(),prefectureText&&prefectureText.set({left:canvas.width/2,top:canvas.height/2}),scoreText&&scoreText.set({left:canvas.width/2,top:canvas.height/2})})