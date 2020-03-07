const random = require('canvas-sketch-util/random')

module.exports = ({count, palette}) => {
  const points = []
  const iterable = Array(count).fill(null)

  iterable.forEach((_, x) => {
    iterable.forEach((_, y) => {
      const xPos = count <= 1 ? 0.5 : x / (count - 1)
      const yPos = count <= 1 ? 0.5 : y / (count - 1)
      const noisedRadius = random.noise2D(xPos, yPos)

      points.push({
        color: random.pick(palette),
        radius: Math.abs(noisedRadius * 0.2),
        position: [xPos, yPos],
        rotation: noisedRadius,
      })
    })
  })

  return points
}
