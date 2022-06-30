<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/pessoas">Pessoas</router-link> |
      <router-link to="/aulas">Aulas</router-link> |
      <router-link to="/bailes">Bailes</router-link> |
      <router-link to="/mapa">Mapa</router-link> |
      <router-link to="/casa">Casa</router-link>
    </nav>
    <router-view/>
    <iframe width="400" height="100" src="https://www.youtube-nocookie.com/embed/U-k7HEOyLRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#modal-root {
  display: none;
}
</style>
