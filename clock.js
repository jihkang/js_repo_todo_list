// 2021 0209 tue
// button or event listener 를 통해 데이터를 변화시킬 예정.
// 아직 미구현.
// 전역 변수로 설정되어 있는 녀석들도 제거 하여 구현할 예정.
const clock = document.querySelector(".js-form"),
  clockTexter = clock.querySelector("h1");
  clockContainer = clock.querySelector("h4");

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

function changedDay(time) {
    if (time.getHours() == 0 && time.getSecond() == 0) {
      return true;
    } else {
      return false;
    }
}

function getTime(target) {
    var time = new Date();

    var hour = time.getHours();
    var minute = time.getMinutes();
    var timeAfter = true;

    if (changedDay(time)) {
      remainDate(target - time);
    }

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

function remainDate(target) {
    target = target / (1000 * 60 * 60 * 24);
    console.log(target);
    target = Math.ceil(target);
    clockTexter.innerText = target + "remain";
}

function init() {
    targetDate = new Date("2022-06-14:00:00:00+0900");

    remainDate(targetDate - new Date());
    getTime(targetDate);
    timer = setInterval(getTime, 1000);
}

init();
