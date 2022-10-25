import { createStore } from "vuex";

import tutoresModule from './modules/tutores/index.js'
const store = createStore({
  modules: {
    tutores: tutoresModule
  }
});
export default store;