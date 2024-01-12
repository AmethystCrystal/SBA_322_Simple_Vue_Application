<template>
  <div>
    <img src="../assets/MainPic.jpg" alt="" />
    <h1>{{ paragraph }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    paragraph: String
  }
}
</script>

<style scoped>
img {
  display: block;
  max-width: 25%;
  margin: 0 auto;
  padding: 20px;
  height: auto;
}

h1 {
    display: flex;
    justify-content: center;
    padding: 50px;
}
</style>