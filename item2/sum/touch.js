window.onload = function () {
    var oinput = document.getElementsByTagName('input')[0];
    var obtn = document.getElementsByTagName('button')[0];
    var ostrong = document.getElementsByTagName('strong')[0];
    oinput.onkeyup = function () {
        this.value = this.value.replace(/[^(\d)|(,)]/, '');
    };

    obtn.onclick = function () {
        var sum = 0;
        var oinput = document.getElementsByTagName('input')[0].value.split(',');
        for (let i = 0; i < oinput.length; i++) {
            sum += parseInt(oinput[i]);
        }
        ostrong.innerHTML = sum;
    }
}