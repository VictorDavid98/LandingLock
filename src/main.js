import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


import VueTextareaAutosize from 'vue-textarea-autosize';

Vue.config.productionTip = false

// import VueFire from 'vuefire';
// Vue.use(VueFire);

new Vue({
  created() {
    AOS.init();
  },
  vuetify,
  render: h => h(App)
}).$mount('#app')
