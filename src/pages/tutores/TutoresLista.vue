<template >
  <section>
    FILTER
  </section>
  <section>

    <div class="controls">
      <button>Refresh</button>
      <router-link to="/registrar">Registrar como tutor</router-link>

      <ul v-if="hasTutores">
        <li v-for="tutor in filteredTutores" :key="tutor.id"> {{ tutor.nome }}
        </li>
      </ul>
      <h3 v-else>Nenhum tutor foi encontrado.</h3>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    filteredTutores() {
      return this.$store.getters['tutores/tutores'];
    },
    hasTutores() {
      return this.$store.getters['tutores/hasTutores'];
    }
  }
}
</script>
