function opn(){
document.getElementsByTagName("nav")[0].classList.toggle("opn");
document.getElementById("bg-menu").classList.toggle("bg-o");
}
function Dark(state){
document.documentElement.classList.toggle("dark-mode",state);
localStorage.setItem("dark-mode","on");
if(localStorage.getItem("dark-mode")){
localStorage.removeItem("dark-mode");
}else{
localStorage.setItem("dark-mode","on");
}
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
document.body.onchange = updateThemeColor;
	
isDarkmode = window.matchMedia("(prefers-color-scheme:dark)");
Dark(isDarkmode.matches);
isDarkmode.addListener((evt)=>Dark(evt.matches));
function ScrollTop(){
var Btn = document.getElementById("scroll");
var SvgHeader = document.getElementById("svgheader");
if(window.pageYOffset>460){
Btn.classList.add("show");
SvgHeader.classList.remove("svgheader");
}else{
Btn.classList.remove("show");
SvgHeader.classList.add("svgheader");
}}
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
