const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

// Fungsi untuk menggambar huruf
const drawA = (ctx, x, y, size) => {
  const width = size;
  ctx.beginPath();
  ctx.moveTo(x, y + size);
  ctx.lineTo(x + width/2, y);
  ctx.lineTo(x + width, y + size);
  ctx.moveTo(x + width/4, y + size/2);
  ctx.lineTo(x + 3*width/4, y + size/2);
  ctx.stroke();
};

const drawR = (ctx, x, y, size) => {
  const width = size * 0.8;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + size);
  ctx.moveTo(x, y + size*0.46);
  ctx.lineTo(x + width * 0.75, y + size);
  ctx.moveTo(x, y)
  ctx.lineTo(x + width * 0.73, y + size * 0);
  ctx.moveTo(x, y + size * 0.46);
  ctx.lineTo(x + width * 0.73, y + size * 0.46);
  ctx.moveTo(x + width * 0.73, y + size * 0.46);
  ctx.lineTo(x + width*0.73, y);
  ctx.stroke();
};

const drawM = (ctx, x, y, size) => {
  ctx.beginPath();
  ctx.moveTo(x, y + size);
  ctx.lineTo(x, y);
  ctx.lineTo(x + size/2, y + size/2);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size, y + size);
  ctx.stroke();
};

const drawH = (ctx, x, y, size) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + size);
  ctx.moveTo(x + size * 0.6, y);
  ctx.lineTo(x + size * 0.6, y + size);
  ctx.moveTo(x, y + size/2);
  ctx.lineTo(x + size * 0.6, y + size/2);
  ctx.stroke();
};

const drawF = (ctx, x, y, size) => {
  ctx.beginPath();
  ctx.moveTo(x + size * 0.6, y);
  ctx.lineTo(x, y);
  ctx.lineTo(x, y + size);
  ctx.moveTo(x, y + size/2);
  ctx.lineTo(x + size * 0.4, y + size/2);
  ctx.stroke();
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.strokeStyle = 'black';
    context.lineWidth = width * 0.01;
    context.lineCap = 'round';

    // Ukuran dan spacing
    const letterSize = width * 0.2;
    const spacing = letterSize * 1.2;
    const sectionHeight = height/3;

    // Gambar AAR
    context.save();
    context.translate(width * 0.2, sectionHeight * 0.2);
    drawA(context, 0, 0, letterSize);
    context.translate(spacing, 0);
    drawA(context, 0, 0, letterSize);
    context.translate(spacing, 0);
    drawR(context, 0, 0, letterSize);
    context.restore();

    // Gambar MRH
    context.save();
    context.translate(width * 0.2, sectionHeight * 1.2);
    drawM(context, 0, 0, letterSize);
    context.translate(spacing, 0);
    drawR(context, 0, 0, letterSize);
    context.translate(spacing, 0);
    drawH(context, -120, 0, letterSize);
    context.restore();

    // Gambar MF
    context.save();
    context.translate(width * 0.2, sectionHeight * 2.2);
    drawM(context, 0, 0, letterSize);
    context.translate(spacing, 0);
    drawF(context, 0, 0, letterSize);
    context.restore();
  };
};

canvasSketch(sketch, settings);