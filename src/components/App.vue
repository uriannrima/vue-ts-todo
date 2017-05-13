<template>
  <Layout>
    
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from 'vue-router'
import Component from 'vue-class-component'
import Layout from './shared/Layout'

@Component({
  props: {
    propMessage: String
  },
  components: {
    "Layout": Layout
  }
})
export default class App extends Vue {
  propMessage: string

  // inital data
  msg: number = 123

  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    console.log('greeting: ' + this.msg)
  }
}
</script>
