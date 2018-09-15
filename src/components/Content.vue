<template lang="pug">
  v-app(id="inspire")
    v-container(fluid)
      v-layout(row xs12 wrap)
        v-flex(xs6 sm4 md3 v-for="list in lists" :key="list.id" class="skill_box")
          p {{list.name}}
          v-progress-circular(
            :rotate="-90"
            :size="150"
            :width="20"
            :value="list.level"
            :color="list.color"
          ) {{ list.level }}
      
</template>

<script>
// import axios from 'axios';
export default {
  data () {
    return {
      interval: {},
      value: 0,
      list: []
    }
  },
  mounted () {
    this.interval = setInterval(() => {
        if (this.value2 === 100) {
          return false
        }
        this.value2 += 10
      }, 1000)
  },
  created: function () {
    var lists = require("../assets/skills.json")
    this.lists = lists
  }
}
</script>

<style lang="stylus" conputed>
.skill_box
  text-align center
</style>
