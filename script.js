console.log("page loaded...");

function mouseIn(element) {
    // play the video element
    element.play();
    // show the controls
    element.controls = true;
}

function mouseOff(element) {
    // pause the video
    element.pause();
    // hide the controls
    element.controls = false;
}
