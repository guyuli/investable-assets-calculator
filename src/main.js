// import external components
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

// use external components
Vue.use(VueRouter)

// import internal components
import Home from "./components/Home";
import Contact from "./components/Contact";

// define routes
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
]

// add routes to router
const router = new VueRouter({
  routes // short for `routes: routes`
})

// add titles
const DEFAULT_TITLE = "IAC";

router.afterEach((to, from) => {
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
