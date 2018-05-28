var get = {
    byId: function(id) {
        return document.getElementById(id);
    },
    byClass: function(sClass, oParent) {
        var aClass = [];
        var reClass = new RegExp('(^| )' + sClass + '( |$)');
        var aElem = this.byTagName('*', oParent);
        for (let i = 0; i < aElem.length; i++) {
            reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        }
        return aClass;
    },
    byTagName: function(elem, obj) {
        return (obj || document).getElementsByTagName(elem);
    }
};

window.onload = function () {
    var anav = get.byId('nav');
    var ali = get.byTagName('li', anav);
    var asubnav = get.byClass('subnav', anav);
    var osubnav = oEm = timer = null;

    for (let i = 0; i < ali.length; i++) {
        ali[i].onmouseover = function () {
            for (let n = 0; n < asubnav.length; n++) {
                asubnav[n].style.display = 'none';
            }
            osubnav = get.byClass('subnav', this)[0];
            oEm = get.byTagName('em', this)[0];
            osubnav.style.display = 'block';
            anav.offsetWidth - this.offsetLeft > osubnav.offsetWidth ? osubnav.style.left = this.offsetLeft + 'px' : osubnav.style.right = 0;
            oEm.style.left = this.offset - osubnav.offsetLeft + 50 + 'px';
            clearInterval(timer);
            osubnav.onmouseover = function (event) {
                (event || window.event).cancelBubble = true;
                clearTimeout(timer);
            }
        };

        ali[i].onmouseout = function () {
            timer = setTimeout(function () {
                osubnav.style.display = 'none';
            }, 300);
        }
    }
}