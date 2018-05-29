window.onload = function () {
    var ostar = document.getElementById('star');
    var oli = ostar.getElementsByTagName('li');
    var oul = ostar.getElementsByTagName('ul')[0];
    var ospan = ostar.getElementsByTagName('span')[1];
    var op = ostar.getElementsByTagName('p')[0];
    var i = iscore = istar = 0;
    var amsg = [
        "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
        "不满意|部分有破损，与卖家描述的不符，不满意",
        "一般|质量一般，没有卖家描述的那么好",
        "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
        "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
    ];

    for (i = 1; i <= oli.length; i++) {
        oli[i - 1].index = i;
        oli[i - 1].onmouseover = function () {
            fnPoint(this.index);
            op.style.display = 'block';
            op.style.left = oul.offsetLeft + this.index * this.offsetWidth - 104 + 'px';
            op.innerHTML = '<em><b>' + this.index + '</b>分' + amsg[this.index - 1].match(/(.+)\|/)[1] + '</em>' + amsg[this.index - 1].match(/\|(.+)/)[1];
        };

        oli[i - 1].onmouseout = function () {
            fnPoint();
            op.style.display = 'none';
        };

        oli[i - 1].onclick = function () {
            istar = this.index;
            op.style.display = 'none';
            ospan.innerHTML = '<strong>' + this.index + '分</strong> (' + amsg[this.index - 1].match(/\|(.+)/)[1] + ')';
        }
    }

    function fnPoint(iarg)
    {
        iscore = iarg || istar;
        for (i = 0; i < oli.length; i++) {
            oli[i].className = i < iscore ? 'on' : '';
        }
    }
}