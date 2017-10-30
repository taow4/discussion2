
function startClock(){
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
}
function getCurrentTime(){
    var dt = new Date();
    document.getElementById("txtDateTime").innerHTML = "The time is " + dt.toLocaleString();
}
