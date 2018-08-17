<template>
  <div class="VisitDetails">
    <div class="VisitDetails__wrapper">
      <div class="VisitDetais__header">
        <div class="VisitDetails__patient">
          <img src="" class="VisitDetails__avatar">
          <div class="VisitDetails__patient-details">
            <div class="VisitDetails__name">
              John Doe
            </div>
            <div class="VisitDetails__time-and-address">
              15:00 - Elm street 1, Poznan
            </div>
          </div>
        </div>
      </div>

      <div class="VisitsDetails__menu">
        <div class="VisitsDetails__menu-item">
          General Info
        </div>
        <div class="VisitsDetails__menu-item">
          Medical Condition
        </div>
        <div class="VisitsDetails__menu-item">
          Visit Purpose
        </div>
        <div class="VisitsDetails__menu-item">
          Additional Info
        </div>
      </div>

      <div class="VisitDetails__container">
        <div class="VisitDetails__tab">
          General Info about patient. (name, age, address, gender, etc)
        </div>
        <div class="VisitDetails__tab">
          Medical Informations about patient (brief of medical history)
        </div>
        <div class="VisitDetails__tab">
          Details about purpose of visit
        </div>
        <div class="VisitDetails__tab">
          Additional Information (eg. notes from other nurses about patient)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisitDetails',
  props: {
    visit: {
      type: Object,
      required: true
    }
  }
}
</script>
