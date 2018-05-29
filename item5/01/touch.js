window.onload = function () {
    var aspan = document.getElementsByTagName('span')[0];
    var aul = document.getElementsByTagName('ul')[0];
    var ali = aul.getElementsByTagName('li');

    aspan.onclick = function (event) {
        aul.style.display = aul.style.display == 'none' ? 'block' : 'none';
        (event || window.event).cancelBubble = true;
    };

    for (let i = 0; i < ali.length; i++) {
        ali[i].onmouseover = function () {
            ali[i].className = 'hover';
        };
        ali[i].onmouseout = function () {
            ali[i].className = 'none';
        };
        ali[i].onclick = function (event) {
            aspan.innerHTML = this.innerHTML;
            console.log(event);
        }
    };

    document.onclick = function () {
        aul.style.display = 'none';
    };
}