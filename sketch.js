const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math')

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  const genGrid = (count) => {
    const points = []
    
    const iterable = Array(count).fill(null)
    iterable.forEach((_, x) => {
      iterable.forEach((_, y) => {
        const xPos = count <= 1 ? 0.5 : x / (count - 1)
        const yPos = count <= 1 ? 0.5 : y / (count - 1)
        
        points.push([xPos, yPos])
      })
    })
    return points
  }
  
  const grid = genGrid(7)
  const margin = 200

  return ({ context: c, width: w, height: h }) => {
    c.fillStyle = 'grey'
    c.fillRect(0, 0, w, h)

    grid.forEach(([xPos, yPos]) => {
      const x = lerp(margin, w - margin, xPos)
      const y = lerp(margin, h - margin, yPos)

      c.beginPath()
      c.arc(x, y, 100, 0, Math.PI * 2, false)
      c.strokeStyle = 'black'
      c.lineWidth = 10
      c.stroke()
    })
    
  };
};

canvasSketch(sketch, settings);
