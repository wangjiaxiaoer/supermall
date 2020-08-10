<template>
    <div class="goods-item" @click="goDetail(goodsItem.iid)">
        <img v-lazy="goodsItem.show.img" alt @load="imageLoad" />
        <div class="goods-info">
            <h4 class="line-text">{{goodsItem.title}}</h4>
            <p class="flex">
                <span class="price">{{goodsItem.price}}</span>
                <span>{{goodsItem.cfav}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        goodsItem: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        goDetail (iid) {
            // this.$router.push('/detail/' + iid)
            this.$router.push({ path: '/detail', query: { iid } })
        },
        imageLoad () {
            // this.$emit('imageLoad')
            // 中央事件总线
            this.$bus.$emit('imageLoad')
        }
    }
};
</script>
<style scoped>
.goods-item {
    width: 46%;
    position: relative;
    padding-bottom: 80px;
    margin-bottom: 10px;
}
.goods-item img {
    width: 100%;
    border-radius: 5px;
}
.goods-item h4 {
    font-weight: normal;
    line-height: 1.5;
}
.goods-item p {
    justify-content: space-between;
    padding: 10px 0 0;
}
.goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
.goods-info span {
    padding: 5px;
    background-color: #eee;
    border-radius: 5px;
}
.goods-info span.price {
    background-color: transparent;
    color: var(--color-tint);
    font-size: 16px;
}
</style>
