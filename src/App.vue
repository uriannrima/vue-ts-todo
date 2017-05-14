<template>
  <div class="container">
    <Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueRouter from 'vue-router'
import Component from 'vue-class-component'
import Layout from './shared/Layout.vue'

@Component({
  components: { Layout }
})
export default class App extends Vue {

}
</script>
