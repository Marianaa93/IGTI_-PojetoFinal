<template>
  <section>
    <TutorFilter @change-filter="setFilters"></TutorFilter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>

        <base-button link to="/registrar">Registrar como tutor</base-button>
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
import TutorFilter from "../../assets/tutores/TutorFilter.vue";
export default {
  components: {
    TutorItem,
    TutorFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        matematica: true,
        espanhol: true,
      },
    };
  },
  computed: {
    filteredTutores() {
      const tutores = this.$store.getters["tutores/tutores"];
      return tutores.filter((tutor) => {
        if (this.activeFilters.frontend && tutor.areas.includes("Frontend")) {
          return true;
        } else if (
          this.activeFilters.espanhol &&
          tutor.areas.includes("Espanhol")
        ) {
          return true;
        } else if (
          this.activeFilters.matematica &&
          tutor.areas.includes("Matemática")
        ) {
          return true;
        }
        return false;
      });
    },
    hasTutores() {
      return this.$store.getters["tutores/hasTutores"];
    },
    methods: {
      setFilters(updatedFilters) {
        this.activeFilters = updatedFilters;
      },
    },
  },
};
</script>
