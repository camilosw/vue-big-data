<template>
  <div id="app">
    <List :products="products" />
  </div>
</template>

<script>
import axios from 'axios'
import List from './components/List'

export default {
  name: 'app',
  components: {
    List
  },
  data () {
    return {
      categories: [],
      products: []
    }
  },
  created () {
    axios.get('/static/data.json')
      .then(response => {
        this.categories = response.data.categories
        this.products = response.data.products
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
