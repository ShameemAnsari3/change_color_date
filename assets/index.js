function showDate(){

    var d = new Date();

    document.getElementById("dateTime").innerHTML =d;
    document.getElementById("dateTime").style.color="#0098ff"
    document.getElementById("dateTime").style.fontSize="2rem"
    document.getElementById("dateTime").style.animation="sam 15s infinite"

    setInterval(showDate, 1000)
}
