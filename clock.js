
const clock = document.querySelector(".js-form");
const clockContainer = clock.querySelector("h4");

// button or event listener 를 통해 데이터를 변화시킬 예정.
// 아직 미구현.
const hour_24 = true;

function setTime(txt, time) {
    if (time == true) {
        clockContainer.innerText = "am" + txt;
    } else {
        clockContainer.innerText = "pm" + txt;
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
    // interval 로 구현하였으나 인터벌 대신 다른 방법을 이용해 보고자 함.
    timer = setInterval(getTime, 1000);
}

init();
