<template>
    <footer v-bind:style="footerStyle">
        <div class="container">
            <p class="text-muted">Made by UriannRima.</p>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Foot extends Vue {
    footerStyle : any = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        height: "45px",
        backgroundColor: "#f5f5f5",
        border: "1px solid transparent",
        borderColor: "#e7e7e7"
    }
}
</script>
