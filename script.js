

function openWindow(url) {
    console.log(screen.width);
    console.log(screen.height);
    leftOffset = (screen.width/2)-400;
    topOffset = (screen.height/2)-400;
    console.log("left offset:" + leftOffset);
    console.log("top offset:" + topOffset);
    window.open (url, "mywindow","height=800px, left=" + leftOffset + "resizable=no, top=" + topOffset + ",  width=800px");
    return false;
}

