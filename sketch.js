const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const { lerp } = require('canvas-sketch-util/math')
const palettes = require('nice-color-palettes')

const { genGrid } = require('./helpers')

const colorCount = random.rangeFloor(2, 6)
const palette = random.shuffle(random.pick(palettes))
  .slice(0, colorCount)

const seeds = [
  '=',
  'Dmitry G. Anderson',
  'Irina V. Anderson',
  'dandgerson',
  'Daria A. Platonova',
  'Maxim P. Pavlov',
  'Aleksey S. Bobin',
]

const seed = seeds[0]

random.setSeed(seed)

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
      rotation,
    }) => {
      const x = lerp(margin, w - margin, xPos)
      const y = lerp(margin, h - margin, yPos)

      c.save()
      c.fillStyle = color
      c.font = `${radius * w}px 'Helvetica'`
      c.rotate(rotation)
      c.translate(x, y)
      c.fillText(`${seed}`, 0, 0)

      c.restore()
    })

  };
};

canvasSketch(sketch, {
  dimensions: [2048, 2048],
});
