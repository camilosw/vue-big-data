<template>
  <section class="section">
    <div id="app" class="container columns">
      <div class="column is-2">
        <Categories />
      </div>
      <div class="column is-10">
        <Pagination />
        <List :products="products" />
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script>
import List from './components/List'
import Categories from './components/Categories'
import Pagination from './components/Pagination'

export default {
  name: 'app',
  components: {
    List,
    Categories,
    Pagination
  },
  data () {
    return {
      categories: [],
      products: []
    }
  },
  mounted () {
    this.$store.dispatch('loadData')
  }
}
</script>

<style>

</style>
