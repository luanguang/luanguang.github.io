window.onload = function () {
    var obox = document.getElementById('box');
    var aLeft = aTop = aRight = aBottom = aCtrlKey = false;

    setInterval(function () {
        if (aLeft) {
            obox.style.left = obox.offsetLeft - 10 + 'px';
        } else if (aTop) {
            obox.style.top = obox.offsetTop - 10 + 'px';
        } else if (aRight) {
            obox.style.left = obox.offsetLeft + 10 + 'px';
        } else if (aBottom) {
            obox.style.top = obox.offsetTop + 10 + 'px';
        }
        limit();
    }, 30);

    document.onkeydown = function (event) {
        var event = event || window.event;
        aCtrlKey = event.ctrlKey;

        switch (event.keyCode) {
            case 37:
                aLeft = true;
                break;
            case 38:
                if (aCtrlKey) {
                    var oldWidth = obox.offsetWidth;
                    var oldHight = obox.offsetHeight;
                    console.log(oldHight, oldWidth);

                    obox.style.width = obox.offsetWidth * 1.5 + 'px';
                    obox.style.height = obox.offsetHeight * 1.5 + 'px';

                    obox.style.left = obox.offsetLeft - (obox.style.width - oldWidth) / 2 + 'px';
                    obox.style.top = obox.offsetTop - (obox.style.height - oldHight) / 2 + 'px';

                    break;
                }
                aTop = true;
                break;
            case 39:
                aRight = true;
                break;
            case 40:
                if (aCtrlKey) {
                    var oldWidth = obox.offsetWidth;
                    var oldHight = obox.offsetHeight;

                    obox.style.width = obox.offsetWidth * 0.75 + 'px';
                    obox.style.height = obox.offsetHeight * 0.75 + 'px';

                    obox.style.left = obox.offsetLeft - (obox.style.width - oldWidth) / 2 + 'px';
                    obox.style.top = obox.offsetTop - (obox.style.height - oldHight) / 2 + 'px';

                    break;
                }
                aBottom = true;
                break;
            case 49:
                aCtrlKey && (obox.style.background = 'green');
                break;
            case 50:
                aCtrlKey && (obox.style.background = 'yellow');
                break;
            case 51:
                aCtrlKey && (obox.style.background = 'blue');
                break;
        }

        return false;
    };

    document.onkeyup = function (event) {
        switch ((event || window.event).keyCode) {
            case 37:
                aLeft = false;
                break;
            case 38:
                aTop = false;
                break;
            case 39:
                aRight = false;
                break;
            case 40:
                aBottom = false;
                break;
        }
    };

    function limit()
    {
        var doc = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        obox.offsetLeft <= 0 && (obox.style.left = 0);
        obox.offsetTop <= 0 && (obox.style.top = 0);
        doc[0] - obox.offsetLeft - obox.offsetWidth <= 0 && (obox.style.left = doc[0] - obox.offsetWidth + 'px');
        doc[1] - obox.offsetTop - obox.offsetHeight <= 0 && (obox.style.top = doc[1] - obox.offsetHeight +'px');
    }
}