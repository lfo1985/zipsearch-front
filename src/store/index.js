import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      zipcode: null,
      listZipcode: [],
      showResults: false,
      history: [],
      error: false,
      type: null,
      loading: false,
    };
  },
  mutations: {
    zipcode(state, value) {
      state.zipcode = value;
    },
    showResults(state, value) {
      state.showResults = value;
    },
    history(state, value) {
      state.history = value;
    },
    listZipcode(state, value) {
      state.listZipcode = value;
    },
    error(state, value) {
      state.error = value;
    },
    type(state, value) {
      state.type = value;
    },
    loading(state, value) {
      state.loading = value;
    },
  },
  actions: {
    setZipcode({ commit }, value) {
      commit("zipcode", value);
    },
    setShowResults({ commit }, value) {
      commit("showResults", value);
    },
    setHistory({ commit }, value) {
      commit("history", value);
    },
    setListZipcode({ commit }, value) {
      commit("listZipcode", value);
    },
    setError({ commit }, value) {
      commit("error", value);
    },
    setType({ commit }, value) {
      commit("type", value);
    },
    setLoading({ commit }, value) {
      commit("loading", value);
    },
  },
  getters: {
    getZipcode(state) {
      return state.zipcode;
    },
    getShowResults(state) {
      return state.showResults;
    },
    getHistory(state) {
      return state.history;
    },
    getListZipcode(state) {
      return state.listZipcode;
    },
    getError(state) {
      return state.error;
    },
    getType(state) {
      return state.type;
    },
    getLoading(state) {
      return state.loading;
    },
  },
});

export default store;
