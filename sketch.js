const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const { lerp } = require('canvas-sketch-util/math')
const palettes = require('nice-color-palettes')

const { genGrid } = require('./helpers')

const colorCount = random.rangeFloor(2, 6)
const palette = random.shuffle(random.pick(palettes))
  .slice(0, colorCount)

random.setSeed([
  'Dmitry G. Anderson',
  'Irina V. Anderson',
  'dandgerson',
  'Daria A. Platonova',
  'Maxim P. Pavlov',
  'Aleksey S. Bobin',
][2])

const sketch = () => {
  const grid = genGrid({
    count: 65,
    palette,
  }).filter(() => random.value() > 0.5)
  const margin = 200

  return ({ context: c, width: w, height: h }) => {
    c.fillStyle = 'grey'
    c.fillRect(0, 0, w, h)

    grid.forEach(({
      position: [xPos, yPos],
      radius,
      color,
    }) => {
      const x = lerp(margin, w - margin, xPos)
      const y = lerp(margin, h - margin, yPos)

      c.beginPath()
      c.arc(x, y, radius * w, 0, Math.PI * 2, false)
      c.fillStyle = color
      c.fill()
    })

  };
};

canvasSketch(sketch, {
  dimensions: [2048, 2048],
});
