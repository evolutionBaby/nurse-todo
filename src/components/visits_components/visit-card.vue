<template>
  <div class="VisitCard">
    <div class="VisitCard__wrapper">
      <div class="VisitCard__patient-card">
        <img :src="avatarUrl" class="VisitCard__patient-avatar">
        <div class="VisitCard__patient-details">
          <div class="VisitCard__patient-name">
            {{ fullName }}
          </div>
          <div class="VisitCard__patient-visit-time">
            {{ visitTime }} - {{ address }}
          </div>
        </div>
      </div>

      <div class="VisitCard__actions">
        <div class="VisitCard__type">
          <i clas="el-icon-view"></i>
          {{ visit.type }}
        </div>

        <button
        @click="markAsDone"
        class="VisitCard__mark-button">
          Mark as Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'VisitCard',
  props: {
    visit: {
      type: Object,
      required: true
    }
  },
  computed: {
    patient () {
      return this.visit.patient || {}
    },
    addressObject () {
      return this.patient.address
    },
    address () {
      return `${this.addressObject.street}, ${this.addressObject.city}`
    },
    avatarUrl () {
      return this.patient.avatarUrl
    },
    fullName () {
      return `${this.patient.firstName} ${this.patient.lastName}`
    },
    visitTime () {
      return moment(this.visit.date).format('hh:mm')
    }
  },
  methods: {
    markAsDone () {
      this.$store.dispatch('visits/markAsDone', this.visit)
    }
  }
}
</script>

<style scoped lang="scss">
.VisitCard {
  width: 100%;

  &__wrapper {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }

  &__patient-card {
    display: flex;
    align-items: center;
  }

  &__patient-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  &__patient-name {
    font-weight: 500;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__type {
    margin-right: 10px;
    text-align: right;
  }

  &:nth-child(odd) {
    background-color: #FAFAFAFA;
  }
}
</style>
