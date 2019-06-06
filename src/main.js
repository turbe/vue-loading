import Vue from 'vue'
import App from './App.vue'
import loading from './loading/loading.js'
Vue.use(loading)
new Vue({
  el: '#app',
  mounted () {
    this.$loading.show({
      el: document.body || document.documentElement,
      text: '拼命加载...'
    })
  },
  render: h => h(App)
})

