<template>
  <section>
    <base-card>
      <h2>Registrar como Tutor</h2>
      <TutorForm @save-data="saveData"></TutorForm
    ></base-card>
  </section>
</template>
<script>
import TutorForm from "../../assets/tutores/TutorForm.vue";
export default {
  components: {
    TutorForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch("tutores/registroTutor", data);
      this.$router.replace("/tutores");
    },
  },
};
</script>
<style>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
