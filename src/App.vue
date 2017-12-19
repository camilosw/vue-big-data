<template>
  <div id="app">
    <img src="./assets/logo.png">
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
    axios.get('data.json')
      // .then(response => {
      //   console.log(response)
      //   // const data = JSON.parse(response)
      //   // this.products
      // })
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
