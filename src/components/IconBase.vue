<template lang="pug">
  svg(xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 32 32"
    :aria-labelledby="iconName"
    role="presentation"
  )
    title(:id="iconName") {{ iconName }} icon
    slot 
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style lang="stylus">
svg
  display inline-block
  vertical-align baseline
  margin-bottom -2px
  margin-right 5px
</style>

