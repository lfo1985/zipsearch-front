import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      zipcode: null,
      showResults: false,
      showNoResults: false,
      history: [],
    };
  },
  mutations: {
    zipcode(state, value) {
      state.zipcode = value;
    },
    showResults(state, value) {
      state.showResults = value;
    },
    showNoResults(state, value) {
      state.showNoResults = value;
    },
    history(state, value) {
      state.history = value;
    }
  },
  actions: {
    setZipcode({ commit }, value) {
      commit("zipcode", value);
    },
    setShowResults({ commit }, value) {
      commit("showResults", value);
    },
    setShowNoResults({ commit }, value) {
      commit("showNoResults", value);
    },
    setHistory({ commit }, value) {
      commit("history", value);
    },
  },
  getters: {
    getZipcode(state) {
      return state.zipcode;
    },
    getShowResults(state) {
      return state.showResults;
    },
    getShowNoResults(state) {
      return state.showNoResults;
    },
    getHistory(state) {
      return state.history;
    }
  },
});

store.subscribe((mutation, state) => {
    if(mutation.type === 'zipcode') {
        if(state.zipcode) {
            state.showResults = true;
            state.showNoResults = false;
        } else {
            state.showResults = false;
            state.showNoResults = true;
        }
    }
});

export default store;
