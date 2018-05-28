window.onload = function () {
    var oclock = document.getElementById('clock');
    var aspan = document.getElementsByTagName('span');
    function getTimes()
    {
        var oDate = new Date();
        var aDate = [oDate.getHours(), oDate.getMinutes(), oDate.getSeconds()];
        for (let i in aDate) {
            aspan[i].innerHTML = format(aDate[i]);
        }

        function format(a)
        {
            return a.toString().replace(/^(\d)$/, '0$1');
        }
    }
    setInterval(getTimes, 1000);
    getTimes();
}