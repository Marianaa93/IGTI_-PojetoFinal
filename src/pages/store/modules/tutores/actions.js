export default {
  registroTutor(context, data) {
    const tutorData = {
      id: context.rootGetter,
      nome: data.first,
      sobrenome: data.last,
      descricao: data.desc,
      horaAula: data.horaAula,
      areas: data.areas,
    };
    context.commit("registroTutor", tutorData);
  },
};
