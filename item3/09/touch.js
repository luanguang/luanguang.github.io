window.onload = function () {
    var acountdown = document.getElementById('countdown');
    var ainput = document.getElementsByTagName('input')[0];
    var timer = null;

    ainput.onclick = function () {
        this.className == '' ? (timer = setInterval(updateTime, 1000), updateTime()) : (clearInterval(timer));
        this.className = this.className == '' ? 'cancel' : '';
    };

    function format(a)
    {
        return a.toString().replace(/^(\d)$/, '0$1');
    }

    function updateTime()
    {
        var aspan = acountdown.getElementsByTagName('span');
        var aremain = aspan[0].innerHTML.replace(/^0/, '') * 60 + parseInt(aspan[1].innerHTML.replace(/^0/, ''));
        if (aremain <= 0) {
            clearInterval(timer);
            return ;
        }
        aremain--;
        aspan[0].innerHTML = format(parseInt(aremain / 60));
        aremain %= 60;
        aspan[1].innerHTML = format(parseInt(aremain));
    }
}