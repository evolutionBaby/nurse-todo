import * as types from './utils/mutation-types'
import mocks from './utils/mocks'

const namespaced = true

const state = {
  visits: [],
  visitToShow: null
}

const getters = {
  list: state => state.visits,
  upcoming: state => state.visits.filter((visit) => {
    return !visit.done
  }),
  done: state => state.visit.filter((visit) => {
    return visit.done
  }),
  visitDetails: state => state.visitToShow
}

const actions = {
  fetchVisits ({commit}) {
    let visits = mocks.fetch()

    commit(types.PUSH_VISITS, {visits})
  },
  markAsDone ({commit}, visit) {
    commit(types.MARK_AS_DONE, {visit})
  },
  showVisitDetails ({commit}, visit) {
    commit(types.SHOW_DETAILS, {visit})
  },
  backToList ({commit}) {
    let visit = null
    commit(types.SHOW_DETAILS, {visit})
  }
}

const mutations = {
  [types.PUSH_VISITS] (state, {visits}) {
    visits.forEach((visit) => {
      state.visits.push(visit)
    })
  },
  [types.MARK_AS_DONE] (state, {visit}) {
    let index = state.visits.findIndex((v) => {
      return v.id === visit.id
    })

    visit.done = true

    state.visits.splice(index, 1, visit)
  },
  [types.SHOW_DETAILS] (state, {visit}) {
    state.visitToShow = visit
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
