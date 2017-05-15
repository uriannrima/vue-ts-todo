<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Contents, Foot, Navbar } from '../components/layout'
import {  } from 'components/layout'

@Component({
    components: {
        Contents,
        Navbar,
        Foot
    }
})
export default class Layout extends Vue {

}
</script>

<template>
    <div>
        <Navbar></Navbar>
        <Contents></Contents>
        <Foot></Foot>
    </div>
</template>
