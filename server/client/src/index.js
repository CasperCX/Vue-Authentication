import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './styles.css';

import Vue from 'vue'
import App from './components/App.vue'
import Vuetify from 'vuetify'


Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
