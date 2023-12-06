import Vue from 'vue'
import App from './App.vue'
import router from './router'
//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";


Vue.config.productionTip = false

appInsights.setup({
  instrumentationKey: 'c8b1a1f2-8c2c-4f2a-9d4e-2a4b7d1f9f4d',
  connectionString: 'InstrumentationKey=6aec6ece-5fd6-40fb-a965-01f9e88c220e;IngestionEndpoint=https://northcentralus-0.in.applicationinsights.azure.com/;LiveEndpoint=https://northcentralus.livediagnostics.monitor.azure.com/'
}).start();


Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
