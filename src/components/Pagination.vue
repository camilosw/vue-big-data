<template>
  <nav class="pagination is-right" role="navigation" aria-label="pagination">
    <a 
      class="pagination-previous" 
      @click.prevent="setPreviousPage()"
    >
      Previous
    </a>
    <div class="pagination-summary">
      Page {{currentPage}} from {{totalPages}}
    </div>
    <a 
      class="pagination-next"
      @click.prevent="setNextPage()"
    >
      Next page
    </a>
  </nav>
</template>

<script>
export default {
  methods: {
    setCurrentPage (n) {
      this.$store.dispatch('setCurrentPage', n)
    },
    setNextPage () {
      this.setCurrentPage(this.$store.state.currentPage + 1)
    },
    setPreviousPage () {
      this.setCurrentPage(this.$store.state.currentPage - 1)
    },
    isActive (n) {
      return this.$store.state.currentPage === n
    }
  },
  computed: {
    currentPage () {
      return this.$store.state.currentPage
    },
    totalPages () {
      return this.$store.state.totalPages
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination-previous {
    order: 1;
  }
  .pagination-summary {
    order: 2;
  }
  .pagination-next {
    order: 3;
  }
</style>
