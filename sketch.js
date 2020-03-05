const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048],
  // units: 'cm',
  // orientation: 'landscape',
  // pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context: c, width: w, height: h }) => {
    // console.log({w, h})

    c.fillStyle = 'grey';
    c.fillRect(0, 0, w, h);

    c.beginPath()
    c.arc(
      w * 0.5, // x
      h * 0.5, // y
      w * 0.2, // radius
      0, // start angle
      Math.PI * 2, // end angle
      false, // anticlockwise
    )
    c.fillStyle = 'salmon';
    c.fill()
    c.lineWidth = w * 0.01
    c.strokeStyle = 'black'
    c.stroke()
  };
};

canvasSketch(sketch, settings);
