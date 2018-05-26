window.onload = function () {
    var olay = document.getElementById('overlay');
    var owin = document.getElementById('win');
    var oclose = document.getElementById('close');
    var obtn = document.getElementsByTagName('button')[0];
    console.log(obtn);
    obtn.onclick = function () {
        olay.style.display = 'block';
        owin.style.display = 'block';
    };
    oclose.onclick = function () {
        olay.style.display = 'none';
        owin.style.display = 'none';
    }
}