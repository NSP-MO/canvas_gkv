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

    // Penanda Detik (Second Marks)
    context.save();
    context.translate(width / 2, height / 2);
    context.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        context.beginPath();
        context.moveTo(275, 0);
        context.lineTo(285, 0);
        context.stroke();
      }
      context.rotate(Math.PI / 30);
    }
    context.restore();

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