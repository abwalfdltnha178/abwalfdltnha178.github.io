document.addEventListener("DOMContentLoaded", function() {
    // ایجاد یک div برای صفحه لودینگ و اضافه کردن کلاس loading
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

    // ایجاد یک div برای لوگو و اضافه کردن آن به صفحه لودینگ
    var logoDiv = document.createElement("div");
    logoDiv.style.backgroundImage = "url('/icon.svg')"; // تغییر 'path/to/your/logo.png' به مسیر تصویر لوگوی سایت شما
    logoDiv.style.width = "100px"; // تغییر به اندازه مورد نظر برای لوگو
    logoDiv.style.height = "100px"; // تغییر به اندازه مورد نظر برای لوگو
    logoDiv.style.backgroundRepeat = "no-repeat";
    logoDiv.style.backgroundPosition = "center";
    logoDiv.style.backgroundSize = "contain";
    loadingPage.appendChild(logoDiv);

    // اضافه کردن صفحه لودینگ به body
    document.body.appendChild(loadingPage);

    // پنهان کردن صفحه لودینگ وقتی تمام محتوا بارگیری شده است
    window.onload = function() {
        loadingPage.style.display = "none";
    };

    // تابع باز و بسته کردن منو
    function opn() {
        document.getElementsByTagName("nav")[0].classList.toggle("opn");
        document.getElementById("bg-menu").classList.toggle("bg-o");
    }

    // تابع تغییر حالت تاریک یا روشن
    function Dark(state) {
        document.documentElement.classList.toggle("dark-mode", state);
    }

    // تنظیم حالت تاریک یا روشن بر اساس تنظیمات سیستم
    isDarkmode = window.matchMedia("(prefers-color-scheme:dark)");
    Dark(isDarkmode.matches);
    isDarkmode.addListener((evt) => Dark(evt.matches));

    // تابع اعمال انیمیشن به اسکرول
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

    // تابع فعالسازی یا غیرفعالسازی انتقال
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

    // تابع به روزرسانی رنگ تم
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

    // فراخوانی تابع به روزرسانی رنگ تم
    document.addEventListener("DOMContentLoaded", updateThemeColor);
    document.body.onchange = updateThemeColor;
});
 
