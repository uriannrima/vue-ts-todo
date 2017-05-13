import Vue from 'vue'
import App from './components/App.vue'

// mount
new Vue({
  el: '#app',
  render: (createElement) => {
    return createElement(App, {
      props: { propMessage: 'World' }
    });
  }
})
