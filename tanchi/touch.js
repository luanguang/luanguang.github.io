var box = document.getElementById('box');
var oul = document.getElementById('oul');
var box1 = document.getElementById('box1');
var ls = document.getElementById('ls');
var dqcd = document.getElementById('dqcd');
var level = document.getElementById('level');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var geshu = 20;//一行li的个数
var fxg = 39;//初始行动方向为右
var snk = [];//整体框
var snkbody = [];//贪吃蛇身体
var kaishi = null;
var sudu = 300;
var score = localStorage.getItem("score") || 0;//历史最高值
ls.innerHTML = score;

var ox = document.createDocumentFragment();
//创建li
function createLi() 
{
    for (let i = 0; i < 400; i++) {
        var oli = document.createElement('li');
        ox.appendChild(oli);
    }
}
createLi();
oul.appendChild(ox);
//分配颜色
function co()
{
    return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
}

snk = oul.children;
var ox2 = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
    snkbody.push({pos: i, color: co()});
}

function body()
{
    for (let j = 0; j < snkbody.length; j++) {
        snk[snkbody[j].pos].style.background = snkbody[j].color;
    }
}
body();
dqcd.innerHTML = snkbody.length - 5;

var food = [{pos: 0, color: "red"}];
function isin(index)
{
    for (let j = 0; j < snkbody.length; j++) {
        if (snkbody[j].pos === index) {
            return true;
            break;
        }
    }
    return false;
}

function snkfood() 
{
    var index = Math.floor(Math.random() * 400);
    while (isin(index)) {
        index = Math.floor(Math.random() * 400);
    }
    food = {pos: index, color: co()};
    snk[index].style.background = food.color;
}
snkfood();




function death() {
    var l = snkbody.length - 5;
    var score = localStorage.getItem("score");
    if (l > score) {
        localStorage.setItem("score", l);
    }
    alert("GameOver");
    location.reload();
    return false;
}

function start() {
    var snkh = snkbody.slice(-1)[0].pos;//蛇头
    var snkw = snkbody.slice(0, 1)[0].pos;//蛇尾

    //碰撞处理
    if ((snkh + 1) % geshu === 0 && fxg === 39) {
        death();
    } else if (snkh >= 400 - geshu && fxg === 40) {
        death();
    } else if (snkh % geshu === 0 && fxg === 37) {
        death();
    } else if (snkh < geshu && fxg === 38) {
        death();
    }
//前进
    snk[snkw].style.background = 0;
    for (let k = 0; k < snkbody.length - 1; k++) {
        snkbody[k].pos = snkbody[k + 1].pos;
    }
    

    
//改变方位
    if (fxg === 40) {
        snkbody[snkbody.length - 1].pos = snkbody[snkbody.length - 1].pos + 20;
    } else if (fxg === 37) {
        snkbody[snkbody.length - 1].pos = snkbody[snkbody.length - 1].pos - 1;
    } else if (fxg === 38) {
        snkbody[snkbody.length - 1].pos = snkbody[snkbody.length - 1].pos - 20;
    } else if (fxg === 39) {
        snkbody[snkbody.length - 1].pos = snkbody[snkbody.length - 1].pos + 1;
    }

    snkh = snkbody[snkbody.length - 1].pos;
    if (snkh === food.pos) {
        snkbody.unshift({ pos: snkw, color: food.color });
        snkfood();
        var snkbodycd = snkbody.length - 5;
        dqcd.innerText = snkbodycd;
    }

    for (let i = 0; i < snkbody.length - 1; i++) {
        if (snkbody[i].pos === snkh) {
            death();
        }
    }
    body();
}


btn1.onclick = function() {
    sudu = level.value;
    clearInterval(kaishi);
    kaishi = setInterval(function() {
        start();
    }, sudu);
}
btn2.onclick = function() {
    clearInterval(kaishi);
}

var bodywid = document.body.offsetWidth;
if (bodywid > 1024) {
    document.addEventListener('keydown', function (e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 37: {
                if (fxg === 39) return false;
                fxg = e.keyCode;
                break;
            }
            case 38: {
                if (fxg === 40) return false;
                fxg = e.keyCode;
                break;
            }
            case 39: {
                if (fxg === 37) return false;
                fxg = e.keyCode;
                break;
            }
            case 40: {
                if (fxg === 38) return false;
                fxg = e.keyCode;
                break;
            }
        }
    }, false);
} else {
    oul.touch({
        swipeLeft: function () {
            kkk(37)
        },
        swipeRight: function () {
            kkk(39)
        },
        swipeUp: function () {
            kkk(38)
        },
        swipeDown: function () {
            kkk(40)
        },
    });
    // 划动改变函数kkk的值，使蛇改变方向
    function kkk(e) {
        switch (e) {
            case 37: {
                //  left
                if (fxg == 39) return false;
                fxg = e;
                break;
            }
            case 38: {
                if (fxg == 40) return false;
                fxg = e;
                break;
                // up 
            }
            case 39: {
                if (fxg == 37) return false;
                fxg = e;
                break;
                // right   
            }
            case 40: {
                if (fxg == 38) return false;
                fxg = e;
                break;
                // down
            }
        }
    }
}


