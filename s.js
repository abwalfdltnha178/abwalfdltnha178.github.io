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
