var changeStyle = function (elem, name, value) {
    elem.style[name] = value;
}

window.onload = function () {
    var odiv = document.getElementById('div1');
    var obtn = document.getElementsByTagName('button');
    var oinput = document.getElementsByTagName('input');
    obtn[0].onclick = function () {
        changeStyle(odiv, oinput[0].value, oinput[1].value);
    };
    obtn[1].onclick = function () {
        odiv.removeAttribute('style');
    }
}