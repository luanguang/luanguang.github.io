window.onload = function () {
    var ainput = document.getElementsByTagName('input');
    for (let i = 0; i < ainput.length; i++) {
        ainput[i].onfocus = function () {
            this.className = 'f-text-high';
        };
        ainput[i].onblur = function () {
            this.className = 'f-text';
        }
    }
}