var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var w = window.innerWidth;
var h = window.innerHeight;
var blur = 10;
var speed = "fast";
var waveOpacity = 0.5;
var waveColors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];
var waveWidth = 50;

canvas.width = w;
canvas.height = h;
ctx.filter = `blur(${blur}px)`;

window.onresize = function () {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  ctx.filter = `blur(${blur}px)`;
};

function getSpeed() {
  switch (speed) {
    case "slow":
      return 0.001;
    case "fast":
      return 0.002;
    default:
      return 0.001;
  }
}

function drawWave(n) {
  for (var i = 0; i < n; i++) {
    ctx.beginPath();
    ctx.lineWidth = waveWidth;
    ctx.strokeStyle = waveColors[i % waveColors.length];
    for (var x = 0; x < w; x += 5) {
      var y = h * 0.5; // Cambiado para no usar SimplexNoise
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.closePath();
  }
}

function render() {
  ctx.fillStyle = "black";
  ctx.globalAlpha = waveOpacity;
  ctx.fillRect(0, 0, w, h);
  drawWave(5);
  requestAnimationFrame(render);
}

render();
