<template>
    <div class="goods-list flex">
        <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodsListItem>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: '',
    data () {
        return {}
    },
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
    }
};
</script>
<style scoped>
.goods-list {
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    height: calc(100vh-94px);
}
</style>
