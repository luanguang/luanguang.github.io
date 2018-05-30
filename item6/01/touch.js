window.onload = function () {
    var obox = document.getElementById('box');
    var oh2 = obox.getElementsByTagName('h2')[0];
    var aspan = obox.getElementsByTagName('span');
    var oa = obox.getElementsByTagName('a')[0];
    var disx = disy = 0;
    var bdrag = false;
    var apos = [{x: obox.offsetLeft, y: obox.offsetTop}];

    oh2.onmousedown = function (event) {
        var event = event || window.event;
        bdrag = true;
        disx = event.clientX - obox.offsetLeft;
        console.log(event.clientX, obox.offsetLeft);
        disy = event.clientY - obox.offsetTop;
        apos.push({x: obox.offsetLeft, y: obox.offsetTop});
        this.setCapture && this.setCapture();

        return false;
    };

    document.onmousemove = function (event) {
        if (!bdrag) return;
        var event = event || window.event;
        var il = event.clientX - disx;
        var it = event.clientY - disy;
        var maxl = document.documentElement.clientWidth - obox.offsetWidth;
        var maxt = document.documentElement.clientHeight - obox.offsetHeight;

        il = il < 0 ? 0 : il;
        il = il > maxl ? maxl : il;

        it = it < 0 ? 0 : it;
        it = it > maxt ? maxt : it;

        obox.style.marginTop = obox.style.marginLeft = 0;
        obox.style.left = il + 'px';
        obox.style.top = it + 'px';

        apos.push({x: il, y: it});

        status();

        return false;
    };

    document.onmouseup = window.onblur = oh2.onlosecapture = function () {
        bdrag = false;
        oh2.releaseCapture && oh2.releaseCapture();
        status();
    };

    oa.onclick = function () {
        if (apos.length == 1) return ;
        var timer = setInterval(function () {
            var opos = apos.pop();
            opos ? (obox.style.left = opos.x + 'px', obox.style.top = opos.y + 'px', status()) : clearInterval(timer);
        }, 30);

        this.focus = false;

        return false;
    };

    oa.onmousedown = function (event) {
        (event || window.event).cancelBubble = true;
    };

    function status()
    {
        aspan[0].innerHTML = bdrag;
        aspan[1].innerHTML = obox.offsetTop;
        aspan[2].innerHTML = obox.offsetLeft;
    };

    status();
}