let timer = document.querySelector('.timer');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let start = document.querySelector('.start');
let splitBotton = document.querySelector('.split');
let stopBotton =  document.querySelector('.stop');
let pause = document.querySelector('.pause');
let continueButton = document.querySelector('.continue');
let reset = document.querySelector('.reset');
let splitContainer = document.querySelector('.split_container');



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





function getSplitValue() {
    return `${formatValue(hours)} : ${formatValue(min)} : ${formatValue(sec)} : ${formatMsValue(ms)}`
}

function splitTimer(stop = false) {
    var splitItem = document.createElement('div');
    splitItem.classList.add('split_item');
    splitItem.innerHTML = `Split: ${getSplitValue()}`;
    if (stop) {
        clearInterval(timeGo);
        splitItem.style.fontWeight = 'bold';
        splitItem.innerHTML = `Stop: ${getSplitValue()}`;
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
    splitContainer.appendChild(splitItem);
}

splitBotton.addEventListener('click', function(){splitTimer(false)})
stopBotton.addEventListener('click', function(){splitTimer(true)})






function resetTimer() {
    var timeReset = clearInterval(timeGo)
    splitContainer.innerHTML = '';
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

reset.addEventListener('click', resetTimer)
