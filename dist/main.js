(()=>{let e=document.querySelector(".dropdiv"),t=document.querySelector("#guitardrop"),o=document.querySelector(".dropdown-content"),l=document.querySelector(".dropdown-content2"),n=document.querySelector(".nav-mobile"),c=document.querySelectorAll(".dropdiv"),d=document.querySelector(".nav");document.querySelector(".nav-mobile"),document.querySelector(".slider"),document.querySelectorAll(".dot"),e.addEventListener("click",(function(){"none"===o.style.display?o.style.display="flex":o.style.display="none"})),t.addEventListener("click",(function(){"none"===l.style.display?l.style.display="flex":l.style.display="none"})),document.addEventListener("click",(function(e){e.target.closest("body")&&!e.target.closest(".slider")||(o.style.display="none",l.style.display="none")})),document.querySelector("body"),n.addEventListener("click",(function(t){"none"===d.style.display?(d.style.display="block",e.style.display="block",c.forEach((e=>{e.style.display="block"})),o.style.top="0px",o.style.left="0px",l.style.top="0px",l.style.left="0px",l.style.width="100%"):(d.style.display="none",c.forEach((e=>{e.style.display="none"})))}));let s=document.querySelector(".photo"),r=["photo1","photo2","photo3"],i=0,y=document.querySelector(".previous");function a(){let e=document.querySelectorAll(".dot");i<r.length?(s.src=`${r[i]}.jpg`,i++,e.forEach(((e,t)=>{t+=1,console.log(`${e} Index: ${t}`)}))):(i=r.length)&&(s.src=`${r[0]}.jpg`,i=0,i++),e.forEach(((e,t)=>{e.classList.contains("active")?e.classList.remove("active"):t===i-1&&e.classList.add("active")})),console.log(e[1].className),console.log(i)}document.querySelector(".next").addEventListener("click",a),y.addEventListener("click",(function(){1===i?(s.src=`${r[r.length-1]}.jpg`,i=3):(i--,s.src=`${r[i-1]}.jpg`)})),setInterval((()=>{a()}),5e3);let u=document.querySelector(".dotContainer");for(let e=0;e<r.length;e++){let e=document.createElement("div");e.classList.add("dot"),u.appendChild(e)}})();