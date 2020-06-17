<template>
  <v-app id="inspire">

    <!-- navigation drawer -->
    <v-navigation-drawer v-model="showDrawer" app>
      <v-list dense>
        <v-list-item link to="/home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- header -->
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
    </v-app-bar>

    <!-- body -->
    <router-view></router-view>

    <!-- footer -->
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ footer }}</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  components: {
  },
  props: {
  },
  data: () => ({
    appName: 'Investable Assets Calculator',
    footer: '2020 Developed by Guyu Li',
    showDrawer: false
  }),
  methods: {
  }
};
</script>