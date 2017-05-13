<template>
    <div>
        <Navbar></Navbar>
        <Contents></Contents>
        <Foot></Foot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Contents from './layout/Contents'
import Foot from './layout/Foot'
import Navbar from './layout/Navbar'

@Component({
    components : {
        Contents, 
        Navbar, 
        Foot
    }
})
export default class extends Vue {

}
</script>
