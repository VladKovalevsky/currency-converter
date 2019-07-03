<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CurrencyConverter msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CurrencyConverter from './components/CurrencyConverter.vue'

export default {
  name: 'app',
  components: {
    CurrencyConverter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
