const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const { lerp } = require('canvas-sketch-util/math')
const palettes = require('nice-color-palettes')

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  const colorCount = random.rangeFloor(1, 6)
  const palette = random.shuffle(random.pick(palettes))
    .slice(0, colorCount)

  const genGrid = (count) => {
    const points = []

    const iterable = Array(count).fill(null)
    iterable.forEach((_, x) => {
      iterable.forEach((_, y) => {
        const xPos = count <= 1 ? 0.5 : x / (count - 1)
        const yPos = count <= 1 ? 0.5 : y / (count - 1)

        points.push({
          color: random.pick(palette),
          radius: Math.abs(random.gaussian() * 0.0035),
          position: [xPos, yPos],
        })
      })
    })
    return points
  }

  const seeds = [
    'Daria A. Platonova',
    'Dmitry G. Anderson',
    'dandgerson',
    'Maxim P. Pavlov',
  ]

  random.setSeed(seeds[2])
  const grid = genGrid(65).filter(() => random.value() > 0.5)
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

canvasSketch(sketch, settings);
