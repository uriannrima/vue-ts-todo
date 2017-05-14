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
import { Contents, Foot, Navbar } from './layout-components'

@Component({
    components: {
        Contents,
        Navbar,
        Foot
    }
})
export default class extends Vue {

}
</script>
