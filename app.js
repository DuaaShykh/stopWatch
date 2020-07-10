var interval;
var min = 0;
var sec = 0;
var msec = 0;
var msecHeading= document.getElementById("msec")
var secHeading = document.getElementById("sec")
var minHeading = document.getElementById("min")
function timer()
{
    msec++;
    msecHeading.innerHTML = msec;

    if(msec>=100)
    {
     
        sec++ ;
        secHeading.innerHTML = sec;
        msec = 0;
    }

    else if(sec >= 60){
        
        min++ ;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start() {
 interval = setInterval(timer,10);
startDisabled()
}
function stop(){
    clearInterval(interval);
    pauseDisabled()
}

function reset(){
    min = 0;
    sec = 0 ;
    msec = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    stop();
    resetDisabled();
}

function startDisabled(){
    document.getElementById("startDis").disabled = true;
    document.getElementById("pauseDis").disabled = false;
    document.getElementById("resetDis").disabled = false;
}

function pauseDisabled(){
    document.getElementById("startDis").disabled = false;
    document.getElementById("pauseDis").disabled = true;
    document.getElementById("resetDis").disabled = false;
}

function resetDisabled(){
    document.getElementById("startDis").disabled = false;
    document.getElementById("pauseDis").disabled = true;
    document.getElementById("resetDis").disabled = true;
}
