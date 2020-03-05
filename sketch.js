const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  return ({ context: c, width, height }) => {
    c.fillStyle = 'grey';
    c.fillRect(0, 0, width, height);

    c.beginPath()
    c.arc(
      width / 2, // x
      height / 2, // y
      200, // radius
      0, // start angle
      Math.PI * 2, // end angle
      false, // anticlockwise
    )
    c.fillStyle = 'salmon';
    c.fill()
    c.lineWidth = 20
    c.strokeStyle = 'black'
    c.stroke()
  };
};

canvasSketch(sketch, settings);
