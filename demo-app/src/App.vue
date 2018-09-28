<template>
  <v-app>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="./assets/telescope.svg" width="60" alt=""><span class="text-yellow p-3">Look at Space</span>
          </a>
        </div>
      </nav>
    </header>
    <v-content>
      <router-link class="btn btn-primary mr-2" to="/">HelloWorld</router-link>
      <router-link class="btn btn-primary mr-2" to="/curiosity">curiosity</router-link>
      <router-view/>
    </v-content>

    <footer class="bg-dark">
      <p class="text-center text-white p-3">Sol 2018 - SPA Project</p>
    </footer>
  </v-app>
</template>
<style>
*{
  font-family: 'Scada', sans-serif;
}
.text-yellow {
  color:#ffa815;
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
