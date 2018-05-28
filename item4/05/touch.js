function css(obj, attr, value)
{
    switch (arguments.length) {
        case 2:
            if (typeof arguments[1] == 'object') {
                for (let i in attr) {
                    obj.style[i] = attr[i];
                }
            } else {
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
            }
            break;
        case 3:
            obj.style[attr] = value;
            break;
        default:
            alert('参数错误!');
    }
}

window.onload = function () {
    var obox = document.getElementById('box');
    var ainput = obox.getElementsByTagName('input');

    ainput[0].onclick = function () {
        alert('width: ' + css(obox, 'width') + '\nheight: ' + css(obox, 'height') + '\nbackground-color: ' + css(obox, 'backgroundColor'));
    };
    ainput[1].onclick = function () {
        css(obox, { width: "330px", height: "100px", borderColor: "#0084ff", backgroundColor: "#eff8ff" });
        for (let i = 0; i < ainput.length; i++) {
            css(ainput[i], 'backgroundColor', '#0084ff');
        }
    };
    ainput[2].onclick = function () {
        css(obox, { width: "400px", height: "200px", borderColor: "#f60", backgroundColor: "#fef4eb" });
        for (let i = 0; i < ainput.length; i++) {
            css(ainput[i], 'backgroundColor', '#f60');
        }
    }
}