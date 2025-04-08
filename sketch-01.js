const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [600, 600],
  animate: true,
  fps: 60, // Control frame rate
};

const sketch = () => {
  return ({ context, width, height, time }) => {
    // Clear canvas
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Pengaturan transformasi untuk setiap huruf
    const letters = [
      { draw: drawA, x: 400, y: 400, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 400, rotateY: 400 },
      { draw: drawA, x: 600, y: 400, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 600, rotateY: 400 },
      { draw: drawR, x: 800, y: 400, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 800, rotateY: 400 },
      { draw: drawM, x: 400, y: 800, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 400, rotateY: 800 },
      { draw: drawR, x: 600, y: 800, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 600, rotateY: 800 },
      { draw: drawH, x: 800, y: 800, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 800, rotateY: 800 },
      { draw: drawM, x: 400, y: 1200, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 400, rotateY: 1200 },
      { draw: drawF, x: 600, y: 1200, scale: 1.0, rotation: Math.PI * (0 / 180), rotateX: 600, rotateY: 1200 }
    ];

    // Label Angka
    context.save();
    context.font = "30px Arial";
    context.fillStyle = "red";
    context.textAlign = "center"; // Center text horizontally
    context.textBaseline = "middle"; // Center text vertically

    // Angka 60
    context.fillText("60", width / 2, 60);

    // Angka 15
    context.fillText("15", width - 60, height / 2);

    // Angka 30
    context.fillText("30", width / 2, height - 60);

    // Angka 45
    context.fillText("45", 60, height / 2);

    context.restore();

    // Jarum Stopwatch
    context.save();
    context.translate(width / 2, height / 2);
    const angle = (Math.PI * 2 / 60) * (time % 60); // Sudut jarum berdasarkan waktu
    context.rotate(angle);

    context.lineWidth = 3;
    context.strokeStyle = "black";

    const handLength = width * 0.35; // Relative to canvas size
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(handLength, 0);
    context.stroke();

    context.restore();
  };
};

canvasSketch(sketch, settings);