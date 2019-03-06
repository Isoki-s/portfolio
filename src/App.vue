<template lang="pug">
  v-app
    Header
    v-content
      router-view
    Footer
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Skills from './components/Skills'
import Made from './components/Made'
import Like from './components/Like'
import Social from './components/Social'

export default {
  name: 'App',
  components: {
    Skills,
    Made,
    Social,
    Like,
    Header,
    Footer
  },
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Quicksand');
.v-content
  font-family: 'Quicksand', sans-serif;
  margin-bottom 60px

.v-content
  width 94%
  max-width 900px
  margin auto
</style>

