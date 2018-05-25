var changeStyle = function (elem, attr, value) 
{
    elem.style[attr] = value;
};

window.onload = function ()
{
    var obtn = document.getElementsByTagName('input');
    var odiv = document.getElementById('div1');
    var oatt = ['width', 'height', 'background', 'display', 'display'];
    var oval = ['200px', '200px', 'red', 'none', 'block'];

    for (let i = 0; i < obtn.length; i++) {
        obtn[i].index = i;
        obtn[i].onclick = function () {
            this.index == obtn.length - 1 && (odiv.style.cssText = '');//&&只要前面是false，不管后面如何，都返回前面的值。而前面是true，就返回后面的值。这与||正好相反
            changeStyle(odiv, oatt[this.index], oval[this.index]);
        }
    }
}