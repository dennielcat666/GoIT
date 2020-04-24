let timer = document.querySelector('.timer');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let continueButton = document.querySelector('.continue');
let clear = document.querySelector('.clear');

/* console.log(start);
console.log(pause);
console.log(conTinue);
console.log(clear); */

/* console.log(timer);
console.log(hour);
console.log(minute);
console.log(second); */

var ms = 0;
var sec = 0;
var min = 0;
var hours = 0;

function formatMsValue(value) {
    if (value < 10) {
        return `00${value}` 
    }
    if (value < 100) {
        return `0${value}` 
    }

    return value
}


function formatValue(value) {
    if (value < 10) {
        return `0${value}` 
    }

    return value
}


function counterTime() {
    timer.innerHTML = formatMsValue(ms);
    second.innerHTML = formatValue(sec);
    minute.innerHTML = formatValue(min);
    hour.innerHTML = formatValue(hours);
    ms++;  
    if (ms === 1000) {
        sec++;
        ms = 0;
    }    
    if (sec === 60) {
        min++;
        sec = 0;
    }
    if (min === 60) {
        hours++;
        min = 0;
    }
    if (hours === 24) {

    }
}

var timeGo;

function startTimer() {
    timeGo = setInterval(counterTime, 1);
    start.style.display = ('none')
    pause.style.display = ('inline-block')
}

start.addEventListener('click', startTimer)




function pauseTimer() {
    var timePause = clearInterval(timeGo)
    pause.style.display = ('none')
    continueButton.style.display = ('inline-block')
}

pause.addEventListener('click', pauseTimer)



function continueTimer() {
    timeGo = setInterval(counterTime, 1);
    continueButton.style.display = ('none')
    pause.style.display = ('inline-block')
}

continueButton.addEventListener('click', continueTimer)




function clearTimer() {
    var timeClear = clearInterval(timeGo)
    timer.innerHTML = "000";
    second.innerHTML = "00";
    minute.innerHTML = "00";
    hour.innerHTML = "00";
    ms = 0;
    sec = 0;
    min = 0;
    hours = 0;
    pause.style.display = ('none')
    continueButton.style.display = ('none')
    start.style.display = ('inline-block')
}

clear.addEventListener('click', clearTimer)









/* 
//Секундомер
//изначальные переменные
min = 0;
hour = 0;
//Оставляем вашу функцию
function init() {
    sec = 0;
    setInterval(tick, 1000);
}

//Основная функция tick()
function tick() {
    sec++;
    if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) { //Визуальное оформление
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                document.getElementById('timer').innerHTML = '0' + hour + ':' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;
            }
        }
    }
}

init(); */