<template lang="pug">
  v-app(id="inspire")
    v-container(fluid)
      v-layout(row wrap)
        v-flex(xs12 sm6)
          v-card(class="card")
            img(
              class="image_sr"
              :src="image_sr"
              height="200px"
            )
            v-card-title(primary-title)
              div
                .headline Slack Reminder
                span(class="grey--text") Who What When
            v-card-actions
              v-btn(flat href="https://isoki-s.github.io/slack_reminder/" target="_blank") Try App
                v-icon(dark right) filter_none
              v-spacer
              v-btn(icon @click="show = !show")
                v-icon {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            v-slide-y-transition
              v-card-text(v-show="show") 
                  | Vue.js
                  br
                  | Pug
                  br
                  | Stylus
</template>

<script>
export default {
  data () {
    return {
      show: false,
      image_sr: require("../assets/sr.png")
    }
  }
}
</script>

<style lang="stylus" conputed>
.v-card
  img
    width 100%
    height auto
  .image_sr
    padding 1em 1em 0
</style>
