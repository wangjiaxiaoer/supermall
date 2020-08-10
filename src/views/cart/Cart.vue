<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartCount}})</div>
        </nav-bar>
        <CartList :cartInfo="cartInfo"></CartList>
        <CartButtonBar></CartButtonBar>
    </div>
</template>
<script>
import CartList from './child/CartList'

import NavBar from 'components/common/navbar/NavBar'
import CartButtonBar from './child/CartButtonBar'
export default {
    components: {
        NavBar,
        CartList,
        CartButtonBar
    },
    name: '',
    data () {
        return {}
    },
    computed: {
        cartCount () {
            return this.$store.getters.cartCount
        },
        cartInfo () {
            return this.$store.getters.cartList
        }
    }
};
</script>
<style>
</style>
