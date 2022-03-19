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
      <a href="http://inteud.github.io/hydro" target="_blank">Hidrología</a>
      <a href="http://inteud.github.io/hydro" target="_blank">Suelos</a>
      <a href="http://inteud.github.io/hydro" target="_blank">Concretos</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  a {
    align-items: center;
    background: #2d2d2d;
    border-radius: 0.25rem;
    color: white;
    display:flex;
    font-size: 1.2rem;
    justify-content: center;
    margin: .5rem;
    padding: 0.25rem 0.75rem;
    width: calc(calc(100% / 3) - 1rem);
  }
}
</style>
