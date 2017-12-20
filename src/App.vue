<template>
  <section class="section">
    <div id="app" class="container columns">
      <div class="column is-2">
        <Categories :categories="categories" />
      </div>
      <div class="column is-10">
        <List :products="products" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import List from './components/List'
import Categories from './components/Categories'

export default {
  name: 'app',
  components: {
    List,
    Categories
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

</style>
