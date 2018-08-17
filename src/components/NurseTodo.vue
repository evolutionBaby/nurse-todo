<template>
  <div>
    <visits-list></visits-list>
  </div>
</template>

<script>
import VisitsList from './visits_components/visits-list'
export default {
  name: 'NurseTodo',
  components: {
    VisitsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$green: #42b983;
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $green;
}
</style>
