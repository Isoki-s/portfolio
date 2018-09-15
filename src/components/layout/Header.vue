<template lang="pug">
  header
    v-navigation-drawer(
      v-model="drawer"
      fixed
      app
      )
      v-list(dense)
        v-list-tile(@click="")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Home
        v-list-tile(@click="")
          v-list-tile-action
            v-icon contact_mail
          v-list-tile-content
            v-list-tile-title Contact
    v-toolbar(color="indigo" dark fixed app)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Application
</template>

<script>
export default {
  data () {
    return {
      title: 'portfolio',
      drawer: false
    }
  }
}
</script>
