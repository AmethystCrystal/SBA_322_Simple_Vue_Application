<template>
  <NavBar />
  <MainPic :paragraph="description1" />
  <BodyElement :bodyElement="description" />
</template>

<script>
import NavBar from './components/NavBar.vue'
import BodyElement from './components/BodyElement.vue'
import MainPic from './components/MainPic.vue'

export default {
  components: {
    NavBar,
    BodyElement,
    MainPic
  },
  data() {
    return {
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque minima veritatis quibusdam accusamus voluptas, quisquam quos quae id harum, sequi iste natus eius eum nobis quis? Omnis perspiciatis tempore quae.",
        description1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet velit illo animi fugit quidem architecto porro ea soluta mollitia facere! Sequi beatae ipsa distinctio dolorem eos sed dolore et itaque.",
    }
  }
}
</script>
