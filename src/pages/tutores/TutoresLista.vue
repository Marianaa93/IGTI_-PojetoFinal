<template >
  <section>
    FILTER
  </section>
  <section>

    <div class="controls">
      <button>Refresh</button>
      <router-link to="/registrar">Registrar como tutor</router-link>

      <ul>
        <li v-for="tutor in filteredTutores" :key="tutor.id"> {{ tutor.nome }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    filteredTutores() {
      return this.$store.getters['tutores/tutores'];
    }
  }
}
</script>
