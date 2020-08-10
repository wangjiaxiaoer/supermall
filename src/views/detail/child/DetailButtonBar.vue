<template>
    <div class="footbar flex">
        <div class="footbar-before-extra"></div>
        <div class="footbar-icons flex">
            <div class="icon-wrapper flex">
                <span class="iconfont icon-dianpu"></span>
                <span class="text">店铺</span>
            </div>
            <div class="icon-wrapper flex">
                <span class="iconfont icon-kefu"></span>
                <span class="text">客服</span>
            </div>
            <div class="icon-wrapper flex">
                <span class="iconfont icon-shoucang"></span>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="footbar-btns">
            <div class="component-buy-and-cart-btn flex">
                <div class="btn-pink" @click="addCart">
                    <span>加入购物车</span>
                </div>
                <div class="btn-red">
                    <div>立即购买</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    data () {
        return {}
    },
    methods: {
        addCart () {
            this.$emit('addCart')
        }
    }
};
</script>
<style scoped>
.footbar {
    height: 45px;
    line-height: 45px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 1;
    flex-flow: row nowrap;
    text-align: center;
    z-index: 9999999999;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
}
.footbar-icons,
.footbar-btns {
    width: 50vw;
    justify-content: space-between;
    width: 50%;
}
.footbar-icons .icon-wrapper {
    width: 100%;
    line-height: normal;
    border-right: 1px solid #eee;
    height: 45px;
    flex-wrap: wrap;
    flex-direction: column;
}
.footbar-icons .iconfont {
    display: block;
    width: 100%;
}
.footbar-btns .component-buy-and-cart-btn div {
    width: 100%;
    height: 45px;
    font-size: 14px;
}
.btn-pink {
    background-color: #ffe6e8;
    color: #ff5777;
}
.btn-red {
    background: linear-gradient(90deg, #ff5777, #ff468f);
    color: #fff;
}
</style>
