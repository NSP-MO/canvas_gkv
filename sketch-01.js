const canvasSketch = require('canvas-sketch');
const { math } = require('canvas-sketch-util');

const settings = {
  dimensions: [2048, 2048]
};

// Fungsi untuk menerapkan transformasi dengan rotasi terhadap titik tertentu
const applyTransform = (ctx, x, y, scale, rotation, rotateX, rotateY, drawFunc) => {
  ctx.save();
  ctx.translate(rotateX, rotateY);
  ctx.rotate(rotation);
  ctx.translate(x - rotateX, y - rotateY);
  ctx.scale(scale, scale);
  drawFunc(ctx);
  ctx.restore();
};

// Fungsi menggambar huruf A
const drawA = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(50, 0);
  ctx.lineTo(100, 100);
  ctx.moveTo(25, 50);
  ctx.lineTo(75, 50);
  ctx.stroke();
};

// Fungsi menggambar huruf R
const drawR = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 100);
  ctx.moveTo(0, 50);
  ctx.lineTo(60, 100);
  ctx.moveTo(0, 0);
  ctx.lineTo(60, 0);
  ctx.lineTo(60, 50);
  ctx.lineTo(0, 50);
  ctx.stroke();
};

// Fungsi menggambar huruf M
const drawM = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.lineTo(100, 0);
  ctx.lineTo(100, 100);
  ctx.stroke();
};

// Fungsi menggambar huruf H
const drawH = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 100);
  ctx.moveTo(50, 0);
  ctx.lineTo(50, 100);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 50);
  ctx.stroke();
};

// Fungsi menggambar huruf F
const drawF = (ctx) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 100);
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 0);
  ctx.moveTo(0, 50);
  ctx.lineTo(40, 50);
  ctx.stroke();
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.lineWidth = 10;
    context.lineCap = 'round';

    // Pengaturan transformasi untuk setiap huruf
    const letters = [
      { draw: drawA, x: 400, y: 400, scale: 1.0, rotation: Math.PI * 0, rotateX: 400, rotateY: 400 },
      { draw: drawA, x: 600, y: 400, scale: 1.0, rotation: Math.PI * 0, rotateX: 600, rotateY: 400 },
      { draw: drawR, x: 800, y: 400, scale: 1.0, rotation: Math.PI * 0, rotateX: 800, rotateY: 400 },
      { draw: drawM, x: 400, y: 800, scale: 1.0, rotation: Math.PI * 0, rotateX: 400, rotateY: 800 },
      { draw: drawR, x: 600, y: 800, scale: 1.0, rotation: Math.PI * 0, rotateX: 600, rotateY: 800 },
      { draw: drawH, x: 800, y: 800, scale: 1.0, rotation: Math.PI * 0, rotateX: 800, rotateY: 800 },
      { draw: drawM, x: 400, y: 1200, scale: 1.0, rotation: Math.PI * 0, rotateX: 400, rotateY: 1200 },
      { draw: drawF, x: 600, y: 1200, scale: 1.0, rotation: Math.PI * 0, rotateX: 600, rotateY: 1200 }
    ];

    // Gambar huruf dengan transformasi
    letters.forEach(letter => {
      applyTransform(context, letter.x, letter.y, letter.scale, letter.rotation, letter.rotateX, letter.rotateY, letter.draw);
    });
  };
};

canvasSketch(sketch, settings);
