<template>
  <div id="app">
    <nav class="navbar-dark bg-primary navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bachata Buena 2022</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/pessoas">Bachateros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/quartos">Quartos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/aulas">Aulas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/bailes">Bailes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/mapa">Mapa</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/casa">Casa</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h1>WIFI</h1>
    <h4>Rede: WSM-5G</h4>
    <h4>Senha: 060221102305</h4>
    <router-view/>
    <iframe width="300" height="100" src="https://www.youtube-nocookie.com/embed/U-k7HEOyLRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
