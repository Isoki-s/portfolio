<template lang="pug">
  v-card(height="60px")
    v-bottom-nav(
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute="true"
      shift
    )
      v-btn(to="/" dark)
        span Me
        v-icon person
      v-btn(to="made" dark)
        span I Made
        v-icon code
      v-btn(to="like" dark)
        span Like
        v-icon thumb_up_alt
      v-btn(to="social" dark)
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
        case 0: return 'indigo accent-4'
        case 1: return 'cyan'
        case 2: return 'pink accent-2'
        case 3: return 'green '
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-card
  position fixed
  bottom 0
  left 0
  right 0
</style>

