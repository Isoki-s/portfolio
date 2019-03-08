<template lang="pug">
  v-container(fluid)
    v-layout(row xs12 wrap)
      v-flex(xs12)
        h2 Like
    v-layout(row xs12 wrap)
      v-flex(xs12)
        p Travel / Eat / Movie / Music
          | <br>Musical
          | <br>Netflix / AmazonPrime / Hulu
          | <br>Dog(especially Shiba) / Cat
          | <br>Coffee
          | <br>Apple / Gopro

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
h2
  text-align center
  margin-bottom 20px
</style>
