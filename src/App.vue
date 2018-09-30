<template>
  <v-app>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="./assets/lookatspace.svg" width="130" alt="look at space">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/curiosity">Mars Rover Photos</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <v-content>
      <router-view/>

    </v-content>
    <footer class="bg-dark">
      <p class="text-center text-white p-3">2018 - SPA Project</p>
    </footer>
  </v-app>
</template>
<style>
*{
  font-family: 'Scada', sans-serif;
}
.router{
  color: #FFFFFF;
}
.router:hover{
  color: #FCCB3F;
}
</style>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
  name: 'App',
};

</script>
