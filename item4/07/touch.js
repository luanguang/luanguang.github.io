window.onload = function () {
    var adiv = document.getElementsByTagName('div');
    var ainput = document.getElementsByTagName('input');
    var i = 0;
    var bs1 = bs2 = true;
    var atemp = [];
    function getArray(str)
    {
        atem.length = 0;
        str = str.split(',');
        for (let i in str) {
            atemp.push(str[i]);
        }
        return atemp;
    }
    ainput[0].onclick = function () {
        atemp = getArray(adiv[0].innerHTML);
        if (bs1) {
            atemp.shift();
            this.value = this.value.replace('删除', '添加');
            bs1 = false;
        } else {
            atemp.unshift('January(1)');
            this.value = this.value.replace('添加', '删除');
            bs1 = true;
        }
        adiv[0].innerHTML = atemp.join();
    };

    ainput[1].onclick = function () {
        atemp = getArray(adiv[0].innerHTML);
        if (bs2) {
            atemp.pop();
            this.value = this.value.replace('删除', '添加');
            bs2 = false;
        } else {
            atemp.push('December(12)');
            this.value = this.value.replace('添加', '删除');
            bs2 = true;
        }
        adiv[0].innerHTML = atemp.join();
    };

    ainput[2].onclick = function () {
        atemp = getArray(adiv[1].innerHTML);
        adiv[1].innerHTML = atemp.concat(atemp).toString().replace(/\s/g, '');
    };

    ainput[3].onclick = function () {
        atemp = getArray(adiv[1].innerHTML);
        atemp.length = 10;
        adiv[1].innerHTML = atemp.join();
    };

    ainput[4].onclick = function () {
        atemp = ["red", "green", "blue", "white", "yellow", "black", "brown"];
        adiv[2].innerHTML = atemp.join();
    }

    ainput[5].onclick = function () {
        atemp = getArray(adiv[2].innerHTML);
        atemp.splice(0, 3);
        adiv[2].innerHTML = atemp.join();
    };

    ainput[6].onclick = function () {
        atemp = getArray(adiv[2].innerHTML);
        atemp.splice(1, 2);
        adiv[2].innerHTML = atemp.join();
    };

    ainput[7].onclick = function () {
        atemp = getArray(adiv[2].innerHTML);
        atemp.splice(1, 0, 'orange', 'purple');
        adiv[2].innerHTML = atemp.join();
    };

    ainput[8].onclick = function () {
        atemp = getArray(adiv[2].innerHTML);
        atemp.splice(1, 2, '#009900', '#0000ff');
        adiv[2].innerHTML = atemp.join();
    };

}