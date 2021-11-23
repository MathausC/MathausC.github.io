const mode = document.getElementById("mode");

function changeMode() {
    let lightMode = mode.getAttribute("href");
    if(lightMode == "/css/lightmode.css"){
        mode.setAttribute("href","/css/darkmode.css");
    }
    else {
        mode.setAttribute("href","/css/lightmode.css")
    }
}