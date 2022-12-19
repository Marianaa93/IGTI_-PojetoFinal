import mutations from "./mutations.js";
import actions from "./solicitacao/actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      userIsTutor: false,
      tutores: [
        {
          id: "c1",
          nome: "Mariana",
          sobrenome: "Lima",
          areas: "Frontend",
          descricao:
            " Sou formada em engenharia ambiental e dou aulas desde 2011",
          horaAula: 30,
        },

        {
          id: "c2",
          nome: "Carla",
          sobrenome: "Valdivia",
          areas: "Espanhol",
          descricao: " Sou formada em Marketing e sou Chilena",
          horaAula: 40,
        },

        {
          id: "c3",
          nome: "Paula",
          sobrenome: "Rodrigues",
          areas: "Matemática",
          descricao: " Sou formada em Matemática",
          horaAula: 40,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
