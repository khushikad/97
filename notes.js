canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var mouseevent = "";
var oldx;
var oldy;
var color = "black";

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
  currentx = e.clientX - canvas.offsetLeft-180;
  currenty = e.clientY - canvas.offsetTop-80;

  if (mouseevent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(oldx, oldy);
    ctx.lineTo(currentx, currenty);
    ctx.stroke();


  }
  oldx = currentx;
  oldy = currenty;




}
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
  mouseevent = "mousedown";

}

function logout() {
  window.location = "second.html";


}

function red() {
  color = "red";

}

function orange() {
  color = "orange";

}
function yellow() {
  color = "yellow";

}
function green() {
  color = "green";

}
function blue() {
  color = "blue";

}

function purple() {
  color = "purple";

} function pink() {
  color = "pink";

} function black() {
  color = "black";

}








