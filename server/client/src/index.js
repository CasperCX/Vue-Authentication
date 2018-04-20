import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './styles.css';

import Vue from 'vue';
import App from './components/App.vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';


Vue.use(Vuetify);
sync(store, router);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
