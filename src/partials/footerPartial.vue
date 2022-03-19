<template>
  <footer class="footer">
    <p>
      Universidad Distrital Francisco Jose de Caldas
      <br />Facultad Tecnologica
      <br />
      {{ year }}
    </p>
    <p style="color: #ffff3e">
      <i class="fad fa-terminal"></i>
      Creado y manenido por
      <br />
      <router-link to="/me">Edwin Marroquin</router-link>
    </p>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const year = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
.footer {
  background: #2d2d2d;
  color: white;
  padding: 1rem;
  text-align: center;
  p:first-child {
    color: #dc0000;
  }
  p:last-child {
    color: #ffff3e;
    a > i {
      margin-right: 1rem;
    }
  }
}
</style>
