# Vue.js big data test

> Testing Vue.js with many data loaded at once.

## Usage

This project simulate a list of products with categories. You must generate your data with the desired ammount of products and categories before run the project.

``` bash
# generate the data
node generate.js -c=10 -p=1000
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
