<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

export default {
  name: "app",
  components: {
    Header,
    Main
  }
};
</script>

<style>
@import "./assets/styles/variables.css";

body {
  margin: 0px;
}

#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  padding: 0px;
}

h1,
h2 {
  font-weight: 500;
}

h1,
h2,
h3,
button,
p {
  color: var(--font-color);
}

h1 {
  font-size: 30px;
}
h2 {
  font-size: var(--h2-font-size);
}
p,
input {
  font-size: var(--body-font-size);
}
button {
  font-size: 16px;
  border-radius: var(--border-radius);
  border: none;
  cursor: pointer;
}
</style>
