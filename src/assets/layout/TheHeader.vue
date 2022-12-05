<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Encontre seu tutor!</router-link>
      </h1>
      <ul>
        <li>
          <RouterLink to="/tutores">Todos os tutores</RouterLink>
        </li>
        <li>
          <router-link to="/solicitacao">Solicitações</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #005c8d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #e0f0f1;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #91bff3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
