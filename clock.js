// 2021 0209 tue
// button or event listener 를 통해 데이터를 변화시킬 예정.
// 아직 미구현.
// 전역 변수로 설정되어 있는 녀석들도 제거 하여 구현할 예정.
const clock = document.querySelector(".js-form");
const clockContainer = clock.querySelector("h4");

const hour_24 = true;

function setTime(txt, afternoon) {
    if (hour_24 == true) {
        clockContainer.innerText = txt;
    } else {
        if (hour_24 == true) {
            clockContainer.innerText = "am" + txt;
        } else {
            clockContainer.innerText = "pm" + txt;
        }
    }
}

function getTime() {
    var time = new Date();

    var hour = time.getHours();
    var minute = time.getMinutes();
    var timeAfter = true;

    minute = minute < 10 ? ' 0' + minute : ' ' + minute;
    hour = hour < 10 ? ' 0' + hour : ' ' + hour;
    
    if (hour_24 == true) {
        console.log(hour + ':' + minute);
    } else { 
        if (hour < 12) {
            timeAfter = true;
        } else {
            timeAfter = false;
        }
        console.log(hour + ':' + minute);
    }
    setTime(hour + ' : ' + minute, timeAfter);
}

function init() {
    getTime();
    timer = setInterval(getTime, 1000);
}

init();
