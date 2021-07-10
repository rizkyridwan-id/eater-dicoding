const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const target = path.resolve(__dirname, 'src/public/images/heros')
const destinationBase = path.resolve(__dirname, 'dist/images')
const destination = path.resolve(__dirname, 'dist/images/heros')

if(!fs.existsSync(destination)) {
  fs.mkdirSync(destinationBase)
  fs.mkdirSync(destination)
}

fs.readdirSync(target)
  .forEach(image => {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}.jpg`))

    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`))
  })