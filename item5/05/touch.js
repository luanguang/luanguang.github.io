window.onload = function () {
    var ali = document.getElementsByTagName('li');
    var abig = document.getElementById('big');
    var oload = abig.getElementsByTagName('div')[0];

    for (let i = 0; i < ali.length; i++) {
        ali[i].index = i;
        ali[i].onmouseover = function () {
            var oimg = document.createElement('img');
            var img = new Image();
            img.src = oimg.src = ali[this.index].getElementsByTagName('img')[0].src.replace('.jpg', '_big.jpg');
            abig.appendChild(oimg);
            this.className = 'active';
            abig.style.display = oload.style.display = 'block';
            img.complete ? oload.style.display = 'none' : (oimg.onload = function () {
                oload.style.display = 'none';
            });
        };

        ali[i].onmousemove = function (event) {
            var event = event || window.event;
            var iwidth = document.documentElement.offsetWidth - event.clientX;
            abig.style.top = event.clientY + 20 + 'px';
            abig.style.left = (iwidth < abig.offsetWidth + 10 ? event.clientX - abig.offsetWidth - 10 : event.clientX + 10) + 'px';
        };

        ali[i].onmouseout = function () {
            this.className = '';
            abig.style.display = 'none';
            abig.removeChild(abig.lastChild);
        }
    }
}