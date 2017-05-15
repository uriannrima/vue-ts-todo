<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Contents extends Vue {

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-bottom: 40px
}
</style>

