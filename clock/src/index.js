import './style.css';
var shi = document.getElementById('shi');
var fen = document.getElementById('fen');
var miao = document.getElementById('miao');
//每隔一段时间调用一下
var clock = setInterval(function(){
    var nowDate = new Date();
    var hour = nowDate.getHours();
    var minute = nowDate.getMinutes();
    var second = nowDate.getSeconds();
    // 12
    var circleHour = hour%12*30
    shi.style.transform = 'rotate('+circleHour+'deg)';
    fen.style.transform = 'rotate('+minute * 6 +'deg)';
    miao.style.transform = 'rotate('+second * 6+'deg)';
},1000);
