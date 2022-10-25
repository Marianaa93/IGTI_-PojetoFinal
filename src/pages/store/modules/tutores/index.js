import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state() {
    return {
      tutores: [
        {
          id: 'c1',
          nome: 'Mariana',
          sobrenome: 'Lima',
          areas: ['matemática', 'inglês', 'história'],
          descricao: " Sou formada em engenharia ambiental e dou aulas desde 2011",
          horaAula: 30,
        },

        {
          id: 'c2',
          nome: 'Carla',
          sobrenome: 'Valdivia',
          areas: ['matemática', 'inglês', 'espanhol'],
          descricao: " Sou formada em Marketing e sou Chilena",
          horaAula: 40,
        }

      ]
    };
  },
  mutations,
  actions,
  getters
};