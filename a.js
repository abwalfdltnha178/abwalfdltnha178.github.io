function opn(){
document.getElementsByTagName("nav")[0].classList.toggle("opn");
document.getElementById("bg-menu").classList.toggle("bg-o");
}
function Dark(state){
document.documentElement.classList.toggle("dark-mode",state);
localStorage.setItem("dark-mode","on");
var ColorTheme = document.getElementById("themeColor");
if(ColorTheme.hasAttribute("content")==true){
ColorTheme.removeAttribute("content");
}else{
ColorTheme.setAttribute("content","black");
}
if(localStorage.getItem("dark-mode")){
localStorage.removeItem("dark-mode");
}else{
localStorage.setItem("dark-mode","on");
}
}
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
