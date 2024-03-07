const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1080;
canvas.height = 1080;

function render() {
  ctx.save();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  const cols = 10;
  const rows = 10;
  const numCells = cols * rows;

  const gridw = canvas.width * 0.8;
  const gridh = canvas.height * 0.8;
  const cellw = gridw / cols;
  const cellh = gridh / rows;
  const margx = (canvas.width - gridw) * 0.5;
  const margy = (canvas.height - gridh) * 0.5;

  for (let i = 0; i < numCells; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);

    const x = col * cellw;
    const y = row * cellh;
    const w = cellw * 0.8;
    const h = cellh * 0.8;

    ctx.save();
    ctx.translate(x, y);
    ctx.translate(margx, margy);
    ctx.translate(cellw * 0.5, cellh * 0.5);

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.moveTo(w * -0.5, 0);
    ctx.lineTo(w * 0.5, 0);
    ctx.stroke();
    ctx.restore();
  }
}

render();
