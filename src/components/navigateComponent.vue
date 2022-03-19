<template>
  <nav class="navigate">
    <ul>
      <li>
        <router-link to="/">
          <i class="fad fa-home"></i>
          home
        </router-link>
      </li>
      <li>
        <router-link to="/collaborators">
          <i class="fad fa-user-group"></i>
          Collaborators
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.navigate {
  background: #2d2d2d;
  width: 100%;
  border-top: 1px solid invert(#2d2d2d);
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    li {
      padding: 0.5rem;
      margin: 0.5rem;
      color: white;
      font-size: 1rem;
      font-weight: 300;
      i {
        margin-right: 0.5rem;
      }
      &:hover {
        background: #3d3d3d;
      }
    }
  }
}
</style>
