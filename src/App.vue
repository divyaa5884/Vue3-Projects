<template>
  <home></home>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
</style>
