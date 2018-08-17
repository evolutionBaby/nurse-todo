<template>
  <div id="app">
    <NurseTodo/>
  </div>
</template>

<script>
import NurseTodo from './components/NurseTodo'

export default {
  name: 'App',
  components: {
    NurseTodo
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
