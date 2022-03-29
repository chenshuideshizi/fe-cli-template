<template>
  <div id="app">
    <Logo />
    <div>
      <RouterLink to="/">首页</RouterLink> | 
      <RouterLink to="/about">关于</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script>
import Logo from './components/Logo.vue'

export default {
  name: 'App',
  components: {
    Logo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
