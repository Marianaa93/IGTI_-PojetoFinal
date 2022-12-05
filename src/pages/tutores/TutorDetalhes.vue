<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>R$ {{ horaAula }}/ hora</h3>
      <p>{{ descricao }}</p>
    </base-card>
  </section>

  <section>
    <base-card>
      <header>
        <h2>Mais detalhes? Contate-me!</h2>
        <base-button link :to="tutorLinkContato"> Contato</base-button>
      </header>
      <RouterView></RouterView>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedTutor: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedTutor.nome + " " + this.selectedTutor.sobrenome;
    },
    areas() {
      return this.selectedTutor.areas;
    },
    horaAula() {
      return this.selectedTutor.horaAula;
    },
    descricao() {
      return this.selectedTutor.descricao;
    },
    tutorLinkContato() {
      return this.$route.path + "/" + this.id + "/contato";
    },
  },
  created() {
    this.selectedTutor = this.$store.getters["tutores/tutores"].find(
      (tutor) => tutor.id === this.id
    );
  },
};
</script>

<!-- 
<section>
    <base-card>
      <base-badge :key="area" :type="area" :title="area">
        <p>{{ descricao }}</p>
      </base-badge>
    </base-card>
  </section> -->
