<template lang="pug">
  v-container(fluid)
    v-layout(row wrap)
      v-flex(xs12)
        v-card.out-skew
          v-layout.in-skew(row wrap)
            v-flex(xs12 sm5 md5 align-center)
              img(
                class="image_sr"
                :src="image_sr"
                height="150px"
                contain
              )
            v-flex(xs12 sm7 md7)
              v-card-title(primary-title)
                div
                  h2 Slack Reminder
                  div You can make Slack Reminder text easily!
          v-divider(light)
          v-card-actions.pa-3.in-skew
            v-tooltip(right)
              template(v-slot:activator="{ on }")
                v-btn.bhm(color="white" fab light small href="https://isoki-s.github.io/slack_reminder/" target="_blank" slot="activator" :style="{ backgroundImage: 'url(' + author + ')' }")
              span.test Try me!
            v-spacer
            icon-vue.skillicon
            icon-yarn.skillicon
            icon-pug.skillicon
            icon-stylus.skillicon
        v-card.mt20.out-skew
          v-layout.in-skew(row wrap)
            v-flex(xs12 sm5 md5 align-center)
              img(
                class="image_sr"
                :src="lineStampeThum"
                height="150px"
                contain
              )
            v-flex(xs12 sm7 md7)
              v-card-title(primary-title)
                div
                  h2 Line Stamp
                  div This is my face.
          v-divider(light)
          v-card-actions.pa-3.in-skew
            v-tooltip(right)
              template(v-slot:activator="{ on }")
                v-btn.bhm(color="white" fab light small href="https://store.line.me/stickershop/product/1017767/ja" target="_blank" slot="activator" :style="{ backgroundImage: 'url(' + author + ')' }")
              span.test It's me!
            v-spacer
            icon-ai.skillicon

</template>

<script>
import IconVue from './icons/IconVue128'
import IconStylus from './icons/IconStylus128'
import IconYarn from './icons/IconYarn'
import IconPug from './icons/IconPug128'
import IconAi from './icons/IconAi128'

export default {
  components: {
    IconVue,
    IconStylus,
    IconYarn,
    IconPug,
    IconAi
  },
  data () {
    return {
      image_sr: require("../assets/sr.png"),
      author: "https://stickershop.line-scdn.net/stickershop/v1/sticker/785180/iPhone/sticker_key@2x.png",
      lineStampeThum: "https://stickershop.line-scdn.net/stickershop/v1/product/1017767/LINEStorePC/main.png"
    }
  }
}
</script>

<style lang="stylus" scoped>
h2
  display block
.out-skew
  transform skew(-4deg)
  // border-top 4px solid #1976D2
.in-skew
    transform skew(4deg)
.v-card
  img
    width auto
  .image_sr
    padding 0.8em
.bhm
  background-position 0px 2px
  background-size contain
.v-tooltip__content
  background #1976D2
.align-center
  text-align center
.skillicon
  margin-right 4px
.mt20
  margin-top 20px
</style>
