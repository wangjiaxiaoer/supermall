<template>
    <div id="detail">
        <NavBar>
            <div slot="left" @click="back" class="back"></div>
            <div slot="center">详情页</div>
            <div slot="right" @click="goCart">购物车</div>
        </NavBar>
        <Scroll class="scroll" ref="scroll" @scroll="showBackTop" :probe-type="3">
            <DetailSwiper :banners="banners" v-if="flag"></DetailSwiper>
            <BaseInfo :baseInfo="baseInfo" v-if="flag"></BaseInfo>
            <ShopInfo v-if="flag"></ShopInfo>
            <GoodInfo :detailInfo="detailInfo" v-if="flag" @imageLoad="imageLoad"></GoodInfo>
        </Scroll>
        <detail-button-bar @addCart="addCart"></detail-button-bar>
        <BackTop @click.native="backTop" v-show="isShowBackTop" />
        <!-- <Toast :message="message" :isShow="isShow"></Toast> -->
    </div>
</template>
<script>
import { getDetail } from 'network/api'

import DetailSwiper from './child/DetailSwiper'
import BaseInfo from './child/BaseInfo'
import ShopInfo from './child/ShopInfo'
import GoodInfo from './child/GoodInfo'
import DetailButtonBar from './child/DetailButtonBar'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

// import Toast from 'components/common/toast/Toast'

import { backTopMinxin } from 'common/mixin'

import { mapActions } from 'vuex'
export default {
    name: 'Detail',
    data () {
        return {
            iid: this.$route.query.iid,
            banners: [],
            flag: false,
            baseInfo: {},
            detailInfo: {},
            isShowBackTop: false,
            // toast
            // message: '',
            // isShow: false
        }
    },
    mixins: [backTopMinxin],
    created () {
        this.getDetail(this.iid)
    },
    methods: {
        ...mapActions(['addCart']),
        // 返回
        back () {
            this.$router.go(-1)
        },
        goCart () {
            this.$router.push('/cart')
        },
        // 添加到购物车
        async addCart () {
            const product = {}
            product.title = this.baseInfo.info.title
            product.price = this.baseInfo.info.highNowPrice
            product.desc = this.detailInfo.desc
            product.image = this.banners[0]
            product.iid = this.iid

            // 普通写法
            const res = await this.$store.dispatch('addCart', product)
            // 添加到购物车成功
            // this.message = res
            // this.isShow = true
            // setTimeout(_ => {
            //     this.isShow = false
            //     this.message = ''
            // }, 2000)
            this.$toast.show(res)
        },
        // 根据iid请求详情
        async getDetail (iid) {
            const res = await getDetail(iid)
            this.banners = res.result.itemInfo.topImages
            const info = res.result.itemInfo
            const columns = res.result.columns
            const services = res.result.shopInfo.services
            this.baseInfo = { info, columns, services }
            this.detailInfo = res.result.detailInfo
            this.flag = true
        },
        imageLoad () {
            this.$refs.scroll.refresh()
        },
    },
    components: {
        DetailSwiper,
        BaseInfo,
        NavBar,
        ShopInfo,
        GoodInfo,
        Scroll,
        DetailButtonBar,
        // Toast
    }
};
</script>
<style scoped>
.back {
    font-size: 24px;
}
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
#detail .scroll {
    height: calc(100vh - 89px);
}
</style>
