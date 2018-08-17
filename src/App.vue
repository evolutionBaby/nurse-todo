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
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
</style>
