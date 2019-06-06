import LoadingComponent from './lib/loading.vue'
import Vue from 'vue'

let instance

const LoadingPlugin = Vue.extend(LoadingComponent)

instance = new LoadingPlugin({
  el: document.createElement('div')
})
instance.show = false

let loading = {
  show (option = {}) {
    instance.show = true
    if (option) {
      option.el.appendChild(instance.$el)
      instance.text = option.text
    }
  },
  hide () {
    instance.show = false
  }
}

export default {
  install () {
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    Vue.mixin({
      created () {
        this.$loading = Vue.$loading
      }
    })
  }
}
