import { createStore } from "vuex";

import tutoresModule from "./modules/tutores/index.js";
import solicitacoesModule from "./modules/solicitacoes/index.js";

const store = createStore({
  modules: {
    tutores: tutoresModule,
    solicitacoes: solicitacoesModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
export default store;
