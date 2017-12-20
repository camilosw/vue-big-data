<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>
            {{ product.name }}
          </td>
          <td>
            {{ product.description }}
          </td>
          <td>
            {{ product.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data () {
    return {
    }
  },
  computed: {
    filteredProducts () {
      return this.products.filter(product => {
        return !this.$store.getters.currentCategoryId || product.categoryId === this.$store.getters.currentCategoryId
      })
    }
  }
}
</script>