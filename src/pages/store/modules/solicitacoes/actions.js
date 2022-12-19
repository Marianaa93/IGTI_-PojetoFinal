export default {
  contatoTutor(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      userEmail: payload.email,
      mensagem: payload.mensagem,
    };
    context.commit("addSolicitacao", newRequest);
  },
};
