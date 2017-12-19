<template>
  <div>
    <div v-for="product in products" :key="product.id">
      {{ product.name }}
      {{ product.description }}
      {{ product.price }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data () {
    return {
    }
  }
}
</script>