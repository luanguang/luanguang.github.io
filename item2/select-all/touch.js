window.onload = function () {
    var oa = document.getElementsByTagName('a')[0];
    var oinput = document.getElementsByTagName('input');
    var olabel = document.getElementsByTagName('label')[0];
    var isCheckAll = function () {
        for (var i = 1, n = 0; i < oinput.length; i++) {
            oinput[i].checked && n++;
        }
        oinput[0].checked = n == oinput.length - 1;
        olabel.innerHTML = oinput[0].checked ? '全部选' : '全选';
    };

    oinput[0].onclick = function () {
        for (let i = 1; i < oinput.length; i++) {
            oinput[i].checked = this.checked;
        }
        isCheckAll();
    };

    oa.onclick = function () {
        for (let i = 1; i < oinput.length; i++) {
            oinput[i].checked = !oinput[i].checked;
        }
        isCheckAll();
    };

    for (let i = 1; i < oinput.length; i++) {
        oinput[i].onclick = function () {
            isCheckAll();
        }
    }
}