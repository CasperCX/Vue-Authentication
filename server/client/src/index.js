import 'jquery/src/jquery';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import './styles.css';

import Vue from 'vue'
import App from './components/App.vue'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
