import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Card
import Card from '@/components/Card.vue'
Vue.component('Card', Card)
import CardLogo from '@/components/CardLogo.vue'
Vue.component('CardLogo', CardLogo)
import ThemeGrid from '@/components/ThemeGrid.vue'
Vue.component('ThemeGrid', ThemeGrid)
// Inputs
import InputName from '@/components/input/InputName.vue'
Vue.component('InputName', InputName)
import Dropdown from '@/components/Dropdown.vue'
Vue.component('Dropdown', Dropdown)
// Not classified yet
import Navigation from '@/frames/Navigation.vue'
Vue.component('Navigation', Navigation)
import MyFooter from '@/frames/MyFooter.vue'
Vue.component('MyFooter', MyFooter)
import Row from '@/components/Row.vue'
Vue.component('Row', Row)
import ButtonWFP from '@/components/ButtonWFP.vue'
Vue.component('ButtonWFP', ButtonWFP)
import RowControl from '@/components/RowControl.vue'
Vue.component('RowControl', RowControl)
// Bootstrap
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Hightlight JS
import 'highlight.js/styles/vs2015.css';
import hljs from 'highlight.js/lib/highlight';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml)
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css)
import scss from 'highlight.js/lib/languages/scss';
hljs.registerLanguage('scss', scss)
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript)
// productionTip
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
