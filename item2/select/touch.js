window.onload = function () {
    var oli = document.getElementById('tab').getElementsByTagName('li');
    var oul = document.getElementById('content').getElementsByTagName('ul');
    for (let i = 0; i < oli.length; i++) {
        oli[i].index = i;
        oli[i].onmouseover = function () {
            for (let n = 0; n < oli.length; n++) {
                oli[n].className = '';
            }
            this.className = 'current';
            for (let n = 0; n < oul.length; n++) {
                oul[n].style.display = 'none';
            }
            oul[this.index].style.display = 'block';
        }

    }
}