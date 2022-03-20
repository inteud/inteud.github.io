<template>
  <div>
    <h1>INTEUD</h1>
    <hr class="divider" />
    <p>
      <strong>
        El Area de investigación Tecnológica de la Universidad
        Distrital
      </strong>, es una iniciativa educativa enfocada en el desarrollo e investigación
      de herramientas tecnológicas implementado software y hardware de
      vanguardia en cada uno de los proyectos personales y grupales
    </p>
    <hr class="spacer" />
    <h1>AREAS</h1>
    <hr class="divider" />
    <div class="links">
      <CardLink
        v-for="(link, key) in links"
        :key="key"
        :title="link.title"
        :icon="link.icon"
        :to="link.to"
        style="width: calc(calc(100% / 3) - 1rem)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardLink from "@/components/cardLink.vue";

const domain = ref("http://inteud.github.io/");
const links = ref([
  { title: "hidrología", icon: "hydro-power", to: domain.value + "hydro" },
  { title: "topografía", icon: "eye-circle-outline", to: "/comming" },
  { title: "suelos", icon: "hexagon-multiple", to: "/comming" },
  { title: "concretos", icon: "wall", to: "/comming" },
  { title: "estructuras", icon: "tower-fire", to: "/comming" },
  { title: "software", icon: "desktop-classic", to: "/comming" },
  { title: "hardware", icon: "video-input-component", to: "/comming" },
  { title: "cálculos", icon: "microsoft-excel", to: "/comming" },
  { title: "librería", icon: "book-open-page-variant", to: "/comming" },
]);
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
</style>
