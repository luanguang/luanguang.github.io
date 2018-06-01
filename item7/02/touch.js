function getStyle(obj, attr)
{
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
}

window.onload = function () {
    var obig = document.getElementById('big');
    var oMasksl = document.getElementById('masks_L');
    var oMasksr = document.getElementById('masks_R');
    var oBtnl = document.getElementById('btn_L');
    var oBtnr = document.getElementById('btn_R');
    var otitle = document.getElementById('title');
    var ospan = otitle.getElementsByTagName('span')[0];
    var inow = 0;
    var aData = [
        { "imgSrc": "http://img1.gtimg.com/news/pics/hv1/106/238/825/53706421.jpg", "title": "7月26日，吊车将事故现场的车头残片吊至大型运输车辆上。" },
        { "imgSrc": "http://img1.gtimg.com/news/pics/hv1/105/238/825/53706420.jpg", "title": "7月26日，一辆大卡车准备驶离事故现场。" },
        { "imgSrc": "http://img1.gtimg.com/news/pics/hv1/101/238/825/53706416.jpg", "title": "7月26日，工人在给最后一节车厢盖上彩条布，准备运离现场。" },
        { "imgSrc": "http://img1.gtimg.com/news/pics/hv1/99/238/825/53706414.jpg", "title": "7月26日，一名工人在事故现场最后一节车厢上作业。" },
        { "imgSrc": "http://img1.gtimg.com/news/pics/hv1/100/238/825/53706415.jpg", "title": "7月26日，工人在给最后一节车厢盖上彩条布，准备运离现场。" }
    ];

    oMasksl.onmouseover = oBtnl.onmouseover = function () {
        startMove(oBtnl, 'opacity', 100);
    };

    oMasksl.onmouseout = oBtnl.onmouseout = function () {
        startMove(oBtnl, 'opacity', 0);
    };

    oMasksr.onmouseover = oBtnr.onmouseover = function () {
        startMove(oBtnr, 'opacity', 100);
    };

    oMasksr.onmouseout = oBtnr.onmouseout = function () {
        startMove(oBtnr, 'opacity', 0);
    };

    function startMove(obj, attr, iTarget, fnEnd)
    {console.log(obj);
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            doMove(obj, attr, iTarget, fnEnd);
        }, 300);
    }

    function doMove(obj, attr, iTarget, fnEnd)
    {
        var iCur = parseFloat(getStyle(obj, attr));
        if (attr == 'opacity') {
            iCur = parseInt(iCur * 100);
        }
        var iSpeed = (iTarget - iCur) / 5;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        if (iTarget == iCur) {
            clearInterval(obj.timer);
            fnEnd && fnEnd();
        } else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity = ' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
    }

    oBtnl.onclick = function () {
        if (inow <= 0) {
            alert('前面没有图片了!');
            return ;
        }
        inow--;
        loadImg();
    };

    oBtnr.onclick = function () {
        if (inow >= aData.length - 1) {
            alert('这是最后一张图片了!');
            return ;
        }
        inow++;
        loadImg();
    };

    loadImg();
    function loadImg()
    {
        obig.className = 'loading';
        ospan.style.opacity = otitle.style.height = 0;
        ospan.style.filter = "alpha(opacity=0)";
        var oImg = obig.getElementsByTagName('img');
        oImg[0] && obig.removeChild(oImg[0]);
        var oTemp = document.createElement('img');
        var oNewImg = new Image();
        oNewImg.onload = function () {
            obig.className = '';
            oTemp.src = this.src;
            obig.appendChild(oTemp);
            oTemp.style.width = (oTemp.offsetWidth > 800 ? 800 : oTemp.offsetWidth) + 'px';
            obig.style.height = oTemp.style.height = oTemp.offsetHeight * oTemp.offsetWidth / oTemp.offsetWidth + 'px';
            ospan.innerHTML = aData[inow].title;
            startMove(otitle, 'height', 50, function () {
                startMove(otitle.childNodes[0], 'opacity', 100);
            });
        };
        oNewImg.src = aData[inow].imgSrc;
    }
};