

let startbtn = document.getElementById('strt');

let stpbtn = document.getElementById('stp');

let resetbtn = document.getElementById('rst');


startbtn.addEventListener('click', () => {
    timer = true;
    stopWatch();
});

stpbtn.addEventListener('click', () => {
    timer = false;
});

resetbtn.addEventListener('click', () => {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    mili = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('mili').innerHTML = "00";
})


let hour = 0;
let minute = 0;
let second = 0;
let mili = 0;

function stopWatch() {

    if (timer) {
        mili++;
        if (mili == 100) {
            second++;
            mili = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let miliString = mili;

    if (hour < 10) {
        hrString = "0" + hrString;
    }
    if (minute < 10) {
        minString = "0" + minString;
    }
    if (second < 10) {
        secString = "0" + secString;
    }

    if (mili < 10) {
        miliString = "0" + miliString;
    }

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('mili').innerHTML = miliString;
    setTimeout(stopWatch, 10);
}
