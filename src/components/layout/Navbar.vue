<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

class NavItem {
    label: string;
    to: string;
}

@Component({})
export default class Navbar extends Vue {
    isOpen: boolean = false;
    navItems: NavItem[] = [
        { label: 'Home', to: '/home' },
        { label: 'About', to: '/about' }
    ]

    toggleCollapse() {
        this.isOpen = !this.isOpen;
    }
}
</script>

<template>
    <nav class="navbar navbar-default navbar-fixed-top"
        role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button"
                    class="navbar-toggle"
                    v-on:click="toggleCollapse()">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse"
                v-bind:class="{ in: isOpen }"
                id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <router-link v-bind:to="navItem.to"
                        v-bind:key="index"
                        v-for="(navItem, index) in navItems"
                        active-class="active"
                        tag="li"
                        v-on:click.native="toggleCollapse()">
                        <a>{{navItem.label}}</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
body {
    padding-top: 70px;
}
</style>
