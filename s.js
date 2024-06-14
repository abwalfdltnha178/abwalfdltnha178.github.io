document.addEventListener("DOMContentLoaded", function() {
   var loadingPage = document.createElement("div");
   loadingPage.className = "loading";
   loadingPage.style.display = "flex";
   loadingPage.style.justifyContent = "center";
   loadingPage.style.alignItems = "center";
   loadingPage.style.position = "fixed";
   loadingPage.style.zIndex = "9999";
   loadingPage.style.left = "0";
   loadingPage.style.top = "0";
   loadingPage.style.width = "100%";
   loadingPage.style.height = "100%";
   loadingPage.style.backgroundColor = "rgba(0,0,0,0.5)";

   var logoDiv = document.createElement("div");
   logoDiv.style.backgroundImage = "url('/icon.svg')"; 
   logoDiv.style.width = "100px"; 
   logoDiv.style.height = "100px"; 
   logoDiv.style.backgroundRepeat = "no-repeat";
   logoDiv.style.backgroundPosition = "center";
   logoDiv.style.backgroundSize = "contain";
   loadingPage.appendChild(logoDiv);

   document.body.appendChild(loadingPage);

   window.onload = function() {
       loadingPage.style.display = "none";
   };
});

// توابع خارج از DOMContentLoaded

function opn() {
   document.getElementsByTagName("nav")[0].classList.toggle("opn");
   document.getElementById("bg-menu").classList.toggle("bg-o");
}

function Dark(state) {
   document.documentElement.classList.toggle("dark-mode", state);
}

isDarkmode = window.matchMedia("(prefers-color-scheme:dark)");
Dark(isDarkmode.matches);
isDarkmode.addListener((evt) => Dark(evt.matches));

function ScrollTop() {
   var Btn = document.getElementById("scroll");
   var SvgHeader = document.getElementById("svgheader");
   if (window.pageYOffset > 460) {
       Btn.classList.add("show");
       SvgHeader.classList.remove("svgheader");
   } else {
       Btn.classList.remove("show");
       SvgHeader.classList.add("svgheader");
   }
}

function toggleTransition() {
   const checkbox = document.getElementById('toggleTransition');
   const elements = document.querySelectorAll('*');

   elements.forEach(element => {
       const styles = getComputedStyle(element);
       if (checkbox.checked) {
           element.style.transition = "0.5s";
       } else {
           element.style.transition = 'none';
       }
   });
}

function updateThemeColor() {
   var bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
   var metaTag = document.querySelector('meta[name="theme-color"]');
   if (metaTag) {
       metaTag.setAttribute('content', bgColor);
   } else {
       var newMetaTag = document.createElement('meta');
       newMetaTag.name = "theme-color";
       newMetaTag.content = bgColor;
       document.getElementsByTagName('head')[0].appendChild(newMetaTag);
   }
}

document.addEventListener("DOMContentLoaded", updateThemeColor);
setInterval(updateThemeColor , 500);
