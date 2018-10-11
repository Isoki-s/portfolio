<template lang="pug">
  v-app(id="inspire")
    v-container(fluid)
      v-layout(row xs12 wrap sm6 offset-sm3)
        v-card
          img(
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          )
          v-card-title(primary-title)
            div
              .headline Slack Reminder
              span(class="grey--text") Who What When
          v-card-actions
            v-btn(flat href="https://isoki-s.github.io/slack_reminder/" target="_blank") Try
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
      show: false
    }
  }
}
</script>

<style lang="stylus" conputed>
</style>
