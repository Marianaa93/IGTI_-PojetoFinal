<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/registrar">Registrar como tutor</router-link>
      </div>
      <ul v-if="hasTutores">
        <TutorItem
          v-for="tutor in filteredTutores"
          :key="tutor.id"
          :id="tutor.id"
          :nome="tutor.nome"
          :sobrenome="tutor.sobrenome"
          :horaAula="tutor.horaAula"
          :areas="tutor.areas"
        ></TutorItem>
      </ul>
      <h3 v-else>Nenhum tutor foi encontrado.</h3>
    </base-card>
  </section>
</template>

<script>
import TutorItem from "../../assets/tutores/TutorItem.vue";
export default {
  components: {
    TutorItem,
  },
  computed: {
    filteredTutores() {
      return this.$store.getters["tutores/tutores"];
    },
    hasTutores() {
      return this.$store.getters["tutores/hasTutores"];
    },
  },
};
</script>
