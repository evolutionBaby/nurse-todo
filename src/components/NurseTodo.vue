<template>
  <div>
    <visits-list v-if="showList"></visits-list>
    <visit-details
    v-else
    :visit="selectedVisit"></visit-details>
  </div>
</template>

<script>
import VisitsList from './visits_components/visits-list'
import VisitDetails from './visits_components/visit-details'
export default {
  name: 'NurseTodo',
  components: {
    VisitsList,
    VisitDetails
  },
  computed: {
    selectedVisit () {
      return this.$store.getters['visits/visitDetails']
    },
    showList () {
      return !this.selectedVisit
    }
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
