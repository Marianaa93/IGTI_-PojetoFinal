<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label>Nome</label>
      <input type="text" id="nome" v-model="nome" />
    </div>

    <div class="form-control">
      <label for="sobrenome">Sobrenome</label>
      <input type="text" id="sobrenome" v-model="sobrenome" />
    </div>
    <div class="form-control">
      <label for="descricao">Informações</label>
      <textarea id="descricao" rows="5" v-model.trim="descricao"></textarea>
    </div>

    <div class="form-control">
      <label for="horaAula">Hora/Aula</label>
      <input id="horaAula" type="number" v-model.number="horaAula" />
    </div>

    <div class="form-control">
      <h3>Disciplinas</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input type="checkbox" id="espanhol" value="espanhol" v-model="areas" />
        <label for="espanhol">Espanhol</label>
        <div>
          <input
            type="checkbox"
            id="matematica"
            value="matematica"
            v-model="areas"
          />
          <label for="matematica">Matemática</label>
        </div>
      </div>
    </div>
    <base-button> Registrar</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nome: " ",
      sobrenome: " ",
      descricao: " ",
      horaAula: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.nome,
        last: this.sobrenome,
        desc: this.descricao,
        horaAula: this.horaAula,
        areas: this.areas,
      };
      console.log(formData);
    },
  },
};
</script>
