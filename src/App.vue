<template>
    <div id="app">
        <MainTabBar></MainTabBar>
        <keep-alive exclude="Detail">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar.vue'
export default {
    name: 'App',
    components: {
        MainTabBar
    }
}
</script>

<style>
@import 'assets/css/base.css';
#app {
    /* padding: 44px 0 50px; */
}
</style>
