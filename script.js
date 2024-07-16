let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let mili = 0;
let hr = 0
let min = 0
let sec = 0

function startButton() {
    timer = true
    stopwatch()
}

function stopButton() {
   timer = false

}

function resetButton() {
    timer = false
    mili = 0
    hr = 0
    min = 0
    sec = 0
}

function stopwatch() {
    if (timer) {
        mili++

        if (mili == 100) {
            sec++
            mili = 0
        }
        if (sec == 60) {
            min++
            sec = 0
        }
        if (min == 60) {
            hr++
            min = 0
            sec = 0
        }
    }
    let hour = hr 
    let minute = min
    let second = sec
    let miliSecond = mili

    if(hr < 10){
        hour = "0" + hour
    }
    if(min < 10){
        minute = "0" + minute
    }
    if(sec < 10){
       second = "0" + second
    }
    if(mili < 10){
        miliSecond = "0" + miliSecond
    }

    document.getElementById("hr").innerText = hour
    document.getElementById("min").innerText = minute
    document.getElementById("sec").innerText = second
    document.getElementById("mili").innerText = miliSecond
    setTimeout(stopwatch,10)
    
}