<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>R${{ horaAula }}/hora</h4>
    <div>
      <base-badge>{{ areas }}</base-badge>
    </div>
    <div class="action">
      <base-button mode="outline" link :to="tutorLinkContato"
        >Contato</base-button
      >
      <base-button link :to="tutorDetalheLink">Detalhes</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "nome", "sobrenome", "horaAula", "areas"],
  computed: {
    fullName() {
      return this.nome + " " + this.sobrenome;
    },
    tutorLinkContato() {
      return this.$route.path + "/" + this.id + "/contato";
    },
    tutorDetalheLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  list-style: none;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
