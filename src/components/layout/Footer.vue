<template lang="pug">
  v-bottom-nav(
    :active.sync="bottomNav"
    :color="color"
    :value="true"
    absolute
    shift
  )
    v-btn(to="/")
      span Me
      v-icon person
    v-btn(to="made")
      span I Made
      v-icon code
    v-btn(to="like")
      span Like
      v-icon thumb_up_alt
    v-btn(to="social")
      span Social
      v-icon share
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 3
    }
  },
  computed: {
    color () {
      switch (this.bottomNav) {
        // chenge color
        // case 0: return 'indigo accent-4'
        // case 1: return 'cyan'
        // case 2: return 'pink accent-2'
        // case 3: return 'green '
        case 0: return 'white'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-bottom-nav
  position fixed
  bottom 0
  left 0
  right 0
  font-family: 'Quicksand', sans-serif; 
</style>

