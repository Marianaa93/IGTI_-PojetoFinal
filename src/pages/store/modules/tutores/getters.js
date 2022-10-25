
export default {
  tutores(state) {
    return state.tutores;
  },
  hasTutores(state) {
    return state.tutores && state.tutores.length > 0;
  }
};