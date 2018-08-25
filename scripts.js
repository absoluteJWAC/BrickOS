function updateClock() {
    var now = new Date(); // current date
    var minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (now.getHours() > 12) {
        time = (now.getHours() - 12) + ':' + minutes + " PM"; // if it is AM
    }
    else if(now.getHours() == 0){
        time = now.getHours() + 12 + ":" + minutes + " AM";
    }
    else {
        time = now.getHours() + ':' + minutes + " AM"; // if it is PM
    }

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = time

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}

function whichClass(e) {
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ=e.target;
    } else if (e.srcElement) {
        targ=e.srcElement;
    }
    var tname;
    tname = targ.className;
    
    if (tname == "start-brick-content" || tname == "start-brick-dropdown" || tname == "start-brick-value"){
        console.log("HI");
    }
    else if(tname == "start-brick"){
        if(testStartBrickOpen()){
            startBrickClose();
        }
        else{
            startBrickClick();
        }
    }
    else{
        startBrickClose();
    }
}
function startBrickClick(){
    var element = document.getElementsByClassName("start-brick-content");
    element[0].style.display = "block"; 
}

function startBrickClose(){
    var element = document.getElementsByClassName("start-brick-content");
    element[0].style.display = "none"; 
}

function testStartBrickOpen(){
    var element = document.getElementsByClassName("start-brick-content");
    return element[0].style.display == "block"; 
}

function closeStallmanWindow() {
    var element = document.getElementsByClassName("window-gnu");
    element[0].style.display = "none"; 
}

function closeRitchieWindow() {
    var element = document.getElementsByClassName("window-ritchie");
    element[0].style.display = "none"; 
}

function openRitchieWindow() {
    var element = document.getElementsByClassName("window-ritchie");
    element[0].style.display = "block"; 
    startBrickClose();
}

function openGNUWindow() {
    var element = document.getElementsByClassName("window-GNU");
    element[0].style.display = "block"; 
    startBrickClose();
}


function openIEWindow() {
    var element = document.getElementsByClassName("window-IE");
    element[0].style.display = "block"; 
    startBrickClose();
}

function openFilesWindow() {
    var element = document.getElementsByClassName("window-files");
    element[0].style.display = "block"; 
    startBrickClose();
}

function closeFilesWindow() {
    var element = document.getElementsByClassName("window-files");
    element[0].style.display = "none"; 
}

function openZuckWindow() {
    var element = document.getElementsByClassName("window-zuck");
    element[0].style.display = "block"; 
    startBrickClose();
}

function closeZuckWindow() {
    var element = document.getElementsByClassName("window-zuck");
    element[0].style.display = "none"; 
}

function openBashWindow() {
    var element = document.getElementsByClassName("window-bash");
    element[0].style.display = "block"; 
    startBrickClose();
}

function closeBashWindow() {
    var element = document.getElementsByClassName("window-bash");
    element[0].style.display = "none"; 
}

function checkPassword(){
    var confirmPassword = "rit";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
        var element = document.getElementsByClassName("login");
        element[0].style.display = "none"; 
        var anotherElement = document.getElementsByClassName("loginStuff");
        anotherElement[0].style.display = "none";
    }
    else{
        window.alert("Password is not correct");
    }

}

updateClock(); 
