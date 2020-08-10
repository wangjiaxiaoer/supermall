<template>
    <div>
        <CartListItem v-for="item in cartInfo" :key="item.iid" :itemInfo="item"></CartListItem>
    </div>
</template>
<script>
import CartListItem from './CartListItem'
export default {
    components: { CartListItem },
    name: '',
    data () {
        return {}
    },
    props: {
        cartInfo: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {}
};
</script>
<style scoped>
</style>
