const faker = require('faker')
const argv = require('yargs').argv
const fs = require('fs');

const numCategories = argv.c || 10
const numProducts = argv.p || 10

const categories = new Array(numCategories).fill(0).map(() => {
  return {
    id: faker.random.uuid(),
    name: faker.lorem.words(2)
  }
})

const products = new Array(numProducts).fill(0).map(() => {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.random.number({ min: 5, max: 50, precision: .01}).toFixed(2),
    categoryId: categories[Math.floor(Math.random()*categories.length)].id
  }
})

const data = {
  categories,
  products
}

fs.writeFileSync('static/data.json', JSON.stringify(data))