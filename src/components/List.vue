<template>
  <div>
    <div v-for="product in products" :key="product">
      {{product}}
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