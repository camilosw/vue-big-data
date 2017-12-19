const faker = require('faker')
const argv = require('yargs').argv
const fs = require('fs');

const numCategories = argv.c || 10
const numProducts = argv.p || 10

const categories = new Array(numCategories).fill(0).map(() => faker.lorem.word())

const products = new Array(numProducts).fill(0).map(() => {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.random.number({ min: 5, max: 50, precision: .01}),
    category: categories[Math.floor(Math.random()*categories.length)]
  }
})

const data = {
  categories,
  products
}

fs.writeFileSync('dist/data.json', JSON.stringify(data))
fs.writeFileSync('src/data.json', JSON.stringify(data))