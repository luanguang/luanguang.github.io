var clock = null;
var state = 0;
var speed = 4;

function init()
{
    for (let i = 0; i < 4; i++) {
        createrow();
    }

    document.getElementById('main').onclick = function (ev) {
        judge(ev);
    }

    clock = window.setInterval('move()', 30);
}


function creatediv(className)
{
    var div = document.createElement('div');
    div.className = className;
    return div;
}

function createcell() 
{
    var temp = [];
    for (let i = 0; i < 4; i++) {
        temp.push('cell');
    }
    var i = Math.floor(Math.random() * 4);
    temp[i] = 'cell black';
    return temp;
}

function createrow()
{
    var con = document.getElementById('con');
    var row = creatediv('row');
    var arr = createcell();

    con.appendChild(row);

    for (let i = 0; i < 4; i++) {
        row.appendChild(creatediv(arr[i]))
    }

    if (con.firstChild === null) {
        con.appendChild(row);
    } else {
        con.insertBefore(row, con.firstChild);
    }
}

function delrow()
{
    var con = document.getElementById('con');
    if (con.childNodes.length === 6) {
        con.removeChild(con.lastChild);
    }
}

function move()
{
    var con = document.getElementById('con');
    var top = parseInt(window.getComputedStyle(con, null)['top']);

    if (speed + top > 0) {
        top = 0;
    } else {
        top += speed;
    }
    con.style.top = top + 'px';

    if (top === 0) {
        createrow();
        con.style.top = '-100px';
        delrow();
    } else if (top === (-100 + speed)) {
        var rows = con.childNodes;
        if ((rows.length === 5) && (rows[rows.length - 1].pass !== 1)) {
            fail();
        }
    }
}

function fail()
{
    clearInterval(clock);
    confirm('你的最重得分为 ' + parseInt(document.getElementById('score').innerHTML));
}

function judge(ev)
{
    if (ev.target.className.indexOf('black') != -1) {
        ev.target.className = 'cell';
        ev.target.parentNode.pass = 1;
        score();
    }
}

function score()
{
    var newscore = parseInt(document.getElementById('score').innerHtml) + 1;
    document.getElementById('score').innerHTML = newscore;
    if (newscore % 10 === 0) {
        speedup();
    }
}

function speedup() {
    speed += 2;
    if (speed == 20) {
        alert('你超神了');
    }
}
