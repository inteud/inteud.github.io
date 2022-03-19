<template>
  <div class="header">
    <img src="../assets/logo_clean.svg" alt />
    <h1>Area de investigacion Tecnologica de la Universidad Distrital</h1>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #2d2d2d;
  color: white;
  padding: 1rem;
  img {
    width: auto;
    max-height: 4rem;
  }
  h1 {
    font-size: 1.25rem;
    flex: 1;
    text-align: -webkit-right;
    font-weight: 300;
    @media screen and (min-width: 520px) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 770px) {
      font-size: 2rem;
    }
  }
}
</style>
