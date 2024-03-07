class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Point {
  constructor(x, y, color = "white") {
    this.pos = new Vector(x, y);
    this.vel = new Vector(randomRange(-1, 1), randomRange(-1, 1));
    this.radius = randomRange(4, 12);
    this.color = color;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "lightblue";
    ctx.lineWidth = randomRange(0.1, 2);
    ctx.stroke();
    ctx.restore();
  }
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1080;
canvas.height = 1080;

const pointA = new Point(100, 100, 10, "red");
const pointB = new Point(200, 200, 10, "blue");
const pointC = new Point(800, 400);
const points = [];

for (let i = 0; i < 40; i++) {
  points.push(
    new Point(Math.random() * canvas.width, Math.random() * canvas.height)
  );
}

pointC.draw(ctx);

ctx.beginPath();
ctx.arc(pointA.x, pointA.y, pointA.radius, 0, Math.PI * 2);
ctx.fillStyle = pointA.color;
ctx.fill();

ctx.beginPath();
ctx.arc(pointB.x, pointB.y, pointB.radius, 0, Math.PI * 2);
ctx.fillStyle = pointB.color;
ctx.fill();

// Dibuja los puntos en el canvas
// for (let point of points) {
//   point.draw(ctx);
// }

function draw() {
  // Limpia el canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Actualiza y dibuja tus puntos
  points.forEach((point) => {
    point.update();
    point.draw(ctx);
  });

  // Solicita el próximo cuadro de la animación
  window.requestAnimationFrame(draw);
}

// Inicia la animación
draw();
