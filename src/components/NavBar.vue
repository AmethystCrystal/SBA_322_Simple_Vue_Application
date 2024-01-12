<template>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Home</a>
    <form class="d-flex" role="search" v-on:submit.prevent="handleSearch">
      <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
    methods: {
        handleSearch() {
            console.log('Searched!')
        }
    }
}
</script>

<style scoped>
.navbar-brand {
    font-weight: bold;
}
</style>