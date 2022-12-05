import { createRouter, createWebHistory } from "vue-router";
import SolicitacoesRecebidas from "./pages/solicitacao/SolicitacoesRecebidas";
import TutorContato from "./pages/solicitacao/TutorContato";
import TutorDetalhes from "./pages/tutores/TutorDetalhes";
import TutorRegistro from "./pages/tutores/TutorRegistro";
import TutoresLista from "./pages/tutores/TutoresLista";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tutores" },
    {
      path: "/tutores",
      component: TutoresLista,
    },

    {
      path: "/tutores/:id",
      component: TutorDetalhes,
      props: true,
      children: [{ path: "contato", component: TutorContato }],
    },
    { path: "/registrar", component: TutorRegistro },
    { path: "/solicitacao", component: SolicitacoesRecebidas },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
