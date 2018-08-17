<template>
  <div class="VisitsList">
    <div class="VisitsList__header">
      <div class="VisitsList__current-date">
        {{ todayDate }}
      </div>
      <div class="VisitsList__visits-count">
        Visits: {{ visitsCounter }}
      </div>
    </div>
    <div class="VisitsList__container">
      <visit-card
      v-for="visit in upcomingVisits"
      :key="visit.id"
      :visit="visit"></visit-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import VisitCard from './visit-card'

export default {
  name: 'VisitsList',
  components: {
    VisitCard
  },
  data () {
    return {
      today: new Date()
    }
  },
  computed: {
    upcomingVisits () {
      return this.$store.getters['visits/upcoming']
    },
    pastVisits () {
      return this.$store.getters['visits/done']
    },
    totalVisitsToday () {
      return this.$store.getters['visits/list'].length
    },
    totalFinished () {
      return this.upcomingVisits.length
    },
    visitsCounter () {
      return `${this.totalFinished}/${this.totalVisitsToday}`
    },
    todayDate () {
      return moment(this.today).format("DD-MM-YYYY")
    }
  },
  mounted () {
    this.$store.dispatch('visits/fetchVisits')
  }
}
</script>

<style scoped lang="scss">
.VisitsList {
  width: 100%;

  &__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #F3F3F3;
  }

  &__current-date {
    font-size: 22px;
  }
}
</style>
