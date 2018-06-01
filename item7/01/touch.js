window.onload = function () {
    var obox = document.getElementById('box');
    var olist = obox.getElementsByTagName('ul')[0];
    var aimg = obox.getElementsByTagName('img');
    var timer = playTimer = null;
    var index = i = 0;
    var border = true;
    var atmp = [];
    var abtn = null;

    for (i = 0; i < aimg.length; i++) {
        atmp.push('<li>' + (i +  1) + '</li>');
    }

    var oCount = document.createElement('ul');
    oCount.className = 'count';
    oCount.innerHTML = atmp.join('');
    obox.appendChild(oCount);
    abtn = obox.getElementsByTagName('ul')[1].getElementsByTagName('li');

    cutover();

    for (i = 0; i < abtn.length; i++) {
        abtn[i].index = i;
        abtn[i].onmouseover = function () {
            index = this.index;
            cutover();
        }
    }

    function cutover()
    {
        for (i = 0; i < abtn.length; i++) {
            abtn[i].className = '';
        }
        abtn[index].className = 'current';
        startMove(-(index * aimg[0].offsetHeight));
    }

    function next()
    {
        border ? index++ : index--;
        index <= 0 && (index = 0, border = true);
        index >= abtn.length - 1 && (index = abtn.length - 1, border = false);
        cutover();
    }

    playTimer = setInterval(next, 3000);

    obox.onmouseover = function () {
        clearInterval(playTimer);
    };

    obox.onmouseout = function () {
        playTimer = setInterval(next, 3000);
    };

    function startMove(iTarget)
    {
        clearInterval(timer);
        timer = setInterval(function () {
            doMove(iTarget);
        }, 30);
    }

    function doMove(iTarget)
    {
        var iSpeed = (iTarget - olist.offsetTop) / 10;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        olist.offsetTop == iTarget ? clearInterval(timer) : olist.style.top = olist.offsetTop + iSpeed + 'px';
    }
};