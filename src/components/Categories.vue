<template>
  <aside class="menu">
    <p class="menu-label">
      Categories
    </p>
    <ul class="menu-list">
      <li>
        <a 
          href="#" 
          :class="{'is-active': isActive(null) }"
          @click.prevent="setActiveCategory(null)"
        >
          All
        </a>
      </li>
      <li v-for="category in categories" :key="category.id">
        <a 
          href="#" 
          :class="{'is-active': isActive(category.id) }"
          @click.prevent="setActiveCategory(category.id)"
        >
          {{ category.name }} {{isActive()}}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
// import { updateActiveCategory } from '../vuex/actions'

export default {
  props: ['categories'],
  data () {
    return {}
  },
  methods: {
    setActiveCategory (categoryId) {
      this.$store.dispatch('setActiveCategory', categoryId)
    },
    isActive (categoryId) {
      return this.$store.getters.currentCategoryId === categoryId
    }
  }
}
</script>