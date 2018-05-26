window.onload = function () {
    var oli = document.getElementsByTagName('li');
    var oa = document.getElementsByTagName('a');
    var oimg = document.getElementsByTagName('img');
    for (let i = 0; i < oli.length; i++) {
        oa[i].index = oimg[i].index = i;
        oa[i].onmouseover = function () {
            oli[this.index].className = 'zindex';
            oimg[this.index].style.display = 'block';
        };
        oa[i].onmouseout = function () {
            oli[this.index].className = '';
            oimg[this.index].style.display = 'none';
        };
        oimg[i].onmouseover = function () {
            oli[this.index].className = 'zindex';
            oimg[this.index].style.display = 'block';
        };
        oimg[i].onmouseout = function () {
            oli[this.index].className = '';
            oimg[this.index].style.display = 'none';
        }
    }
}