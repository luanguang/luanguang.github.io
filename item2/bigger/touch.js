window.onload = function () {
    var oimg = document.getElementById('box').getElementsByTagName('img');
    var odiv = document.getElementsByTagName('div')[0];
    for (let i = 1; i < oimg.length; i++) {
        oimg[i].onmouseover = function () {
            var img = new Image();
            img.src = oimg[0].src = this.src.replace(/small/, 'big');
            odiv.style.display = 'block';
            img.complete ? odiv.style.display = 'none' : (oimg[0].onload = function () {
                odiv.style.display = 'none';
            })
        }
    }
}