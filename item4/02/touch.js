window.onload = function () {
    var obox = document.getElementById('box');
    var aul = document.getElementsByTagName('ul');
    var aimg = aul[0].getElementsByTagName('li');
    var anum = aul[1].getElementsByTagName('li');
    var timer = play = null;
    var i = index = 0;

    for (i = 0; i < anum.length; i++) {
        anum[i].index = i;
        anum[i].onmouseover = function () {
            show(this.index);
        }
    }

    obox.onmouseover = function () {
        clearInterval(play);
    }

    obox.onmouseout = function () {
        autoPlay();
    }

    function autoPlay() 
    {
        play = setInterval(function () {
            index++;
            index >= aimg.length && (index = 0);
            show(index);
        }, 2000);
    }
    autoPlay();

    function show(a)
    {
        index = a;
        var alpha = 0;
        for (let i = 0; i < anum.length; i++) {
            anum[i].className = '';
        }
        anum[index].className = 'current';
        clearInterval(timer);

        for (let i = 0; i < aimg.length; i++) {
            aimg[i].style.opacity = 0;
            aimg[i].style.filter = 'alpha(opacity=0)';
        }

        timer = setInterval(function () {
            alpha += 2;
            alpha > 100 && (alpha = 100);
            aimg[index].style.opacity = alpha / 100;
            aimg[index].style.filter = 'alpha(opacity = ' + alpha + ')';
            alpha == 100 && clearInterval(timer);
        }, 20);
    }
}