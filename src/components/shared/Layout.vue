<template>
    <div>
        <Navbar></Navbar>
        <Contents></Contents>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Contents from './layout/Contents'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

@Component({
    components : {
        Contents, 
        Navbar, 
        Footer
    }
})
export default class extends Vue {

}
</script>
