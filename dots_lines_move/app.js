class Point {
  constructor(x, y, radius = "10", color = "white") {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1080;
canvas.height = 1080;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

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
points.forEach((point) => {
  point.draw(ctx);
});
