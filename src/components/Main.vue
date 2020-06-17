<template>
  <v-app id="inspire">

    <nav-drawer :showDrawer="showDrawer" @onHomeClicked="onHomeClicked"/>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
    </v-app-bar>

    <home/>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ footer }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from './NavDrawer.vue';
import Home from './Home.vue';

export default {
  components: {
    NavDrawer,
    Home
  },
  props: {
    source: String
  },
  data: () => ({
    appName: 'Investable Assets Calculator',
    footer: '2020 Developed by Guyu Li',
    showDrawer: false
  }),
  methods: {
    onHomeClicked() {
      
    }
  }
};
</script>