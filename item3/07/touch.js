window.onload = function () {
    var ocalc = document.getElementById('calc');
    var aa = document.getElementsByTagName('a');
    var ainput = document.getElementsByTagName('input')[0];
    var oformula = document.getElementById('formula');
    var s = false;
    for (let i = 0; i < aa.length; i++) {
        aa[i].onfocus = function () {
            this.blur();
        };
        aa[i].onclick = function () {
            switch(this.innerHTML) {
                case 'c':
                    ainput.value = 0;
                    oformula.value = '';
                    break;
                case '%':
                    count('%');
                    break;
                case "÷":
                    count("/")
                    break;
                case "×":
                    count("*")
                    break;
                case "-":
                    count("-")
                    break;
                case "+":
                    count("+")
                    break;
                case '=':
                    s || (oformula.value += ainput.value);
                    ainput.value = eval(oformula.value.replace(/\%\/\*\-\+/, ''));
                    ainput.value = ainput.value.substr(0, 10).replace('NaN', 0);
                    s = true;
                    break;
                case '.':
                    if (ainput.value.search(/[\.\%\/\*\-\+]/) != -1)
                    break;
                default:
                    s && (ainput.value = 0, oformula.value = "", s = false);
                    ainput.value.length < 10 && (ainput.value = (ainput.value + this.innerHTML).replace(/^[0\%\/\*\-\+](\d)/, "$1"));
            }
        }
    }

    function count(a)
    {
        if (s) {
            oformula.value = ainput.value + a;
            ainput.value = a;
            s = false;
        } else {
            /[\%\/\*\-\+]$/.test(ainput.value) || (oformula.value += ainput.value);
            ainput.value = a;
            /[\%\/\*\-\+]$/.test(oformula.value) || (oformula.value += ainput.value);
            oformula.value = oformula.value.slice(-1) != a ? oformula.value.replace(/.$/, a) : oformula.value;
        }
    }
}