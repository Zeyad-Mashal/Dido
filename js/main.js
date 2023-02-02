let main = document.querySelector(".main");
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river");
let boat6 = document.getElementById("boat");
let mashal = document.querySelector(".mashal");

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    mashal.style.fontSize = value + 'px';

    if (scrollY >= 49) {
        mashal.style.fontSize = 49 + 'px';
        mashal.style.position = 'fixed';
        if (scrollY >= 381) {
            mashal.style.display = 'none';
        }else{
            mashal.style.display = 'block';
        }
        if (scrollY >= 70) {
            document.querySelector(".main").style.background = "linear-gradien(#376281, #10001f)";
        }else{
            document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)";
        }
    }
}