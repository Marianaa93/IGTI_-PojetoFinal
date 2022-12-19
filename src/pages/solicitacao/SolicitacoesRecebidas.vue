<template lang="">
  <div>
    <section>
      <base-card>
        <header>
          <h2>Solicitações Recebidas</h2>
        </header>
        <ul>
          <RequestItem></RequestItem>
        </ul>
        <h3>Você ainda não recebeu solicitações</h3>
      </base-card>
    </section>
  </div>
</template>
<script>
import RequestItem from "./RequestItem.vue";
export default {
  components: {
    RequestItem,
  },
  computed: {
      solicitacoesRecebidas() {
        this.$store.getters["solicitacoes/solicitacoes"];
      },
      hasSolicitaoes() {
        return this.$store.getters["solicitacoes/hasSolicitacoes"];
      },
    },
  };
};
</script>
<style lang=""></style>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
