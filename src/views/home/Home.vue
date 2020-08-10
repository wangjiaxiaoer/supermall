<template>
    <div>
        <!-- 导航区域 -->
        <NavBar class="home-nav">
            <div slot="center">购物街</div>
        </NavBar>
        <TabControl
            class="tab-control"
            :titles="['流行', '新款', '精选']"
            @tabClick="tabClick"
            ref="tabControlTop"
            v-show="isTabFixed"
        ></TabControl>

        <Scroll
            ref="scroll"
            :probe-type="3"
            @scroll="positionScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore"
            class="scroll"
        >
            <HomeSwiper :banners="banners" v-if="flag"></HomeSwiper>
            <HomeRecomd :recommends="recommends" v-if="flag"></HomeRecomd>
            <!-- <HomeFeature></HomeFeature> -->
            <TabControl
                class="tab-control"
                :titles="['流行', '新款', '精选']"
                @tabClick="tabClick"
                ref="tabControl"
            ></TabControl>
            <GoodsList :goods="showGoods">
                <GoodsListItem></GoodsListItem>
            </GoodsList>
        </Scroll>
        <BackTop @click.native="backTop" v-show="isShowBackTop" />
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import HomeRecomd from './component/HomeRecomd'
import HomeFeature from './component/HomeFeature'
import HomeSwiper from './component/HomeSwiper'

import GoodsList from 'components/content/goods/GoodsList'
import TabControl from 'components/content/tabcontrol/TabControl'


import { getHomeMultidata, getGoodsData } from 'network/api.js'
import { backTopMinxin } from 'common/mixin'
import { debounce } from 'common/utils'
export default {
    name: '',
    data () {
        return {
            // 判断是否拿到banner数据
            flag: false,
            banners: [],
            recommends: [],
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] }
            },
            currentCategory: 'pop',
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0
        }
    },
    mixins: [backTopMinxin],
    computed: {
        showGoods () {
            return this.goods[this.currentCategory].list
        }
    },
    components: {
        Scroll,
        NavBar,
        HomeSwiper,
        HomeRecomd,
        HomeFeature,
        TabControl,
        GoodsList,
    },
    activated () {
        this.$refs.scroll.scrollTo(0, this.saveY, 0)
        this.$refs.scroll.refresh()
    },
    deactivated () {
        this.saveY = this.$refs.scroll.scroll.y
    },
    methods: {
        // 上拉加载更多
        loadMore () {
            this.getGoodsData(this.currentCategory)
        },
        positionScroll (pos) {
            // 吸顶效果
            this.isTabFixed = (-pos.y) > this.$refs.tabControl.$el.offsetTop + 44
            this.showBackTop(pos)
        },
        // tab 切换事件
        tabClick (index) {
            switch (index) {
                case 0:
                    this.currentCategory = 'pop'
                    break;
                case 1:
                    this.currentCategory = 'new'
                    break;
                case 2:
                    this.currentCategory = 'sell'
                    break;
            }
            this.$refs.tabControlTop.currentIndex = index
            this.$refs.tabControl.currentIndex = index
        },
        // 首页商品列表 pop new sell
        async getGoodsData (type) {
            const page = this.goods[type].page + 1
            const res = await getGoodsData(type, page)
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page = page
            // 完成上拉加载更多，可以继续出发上拉加载更多
            this.$refs.scroll.finishPullUp()
        },
        // 请求banner数据
        async getHomeMultidata () {
            const res = await getHomeMultidata()
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            this.flag = true
        }
    },
    created () {
        // 请求首页banner及
        this.getHomeMultidata()
        // 请求商品列表数据
        this.getGoodsData('pop')
        this.getGoodsData('new')
        this.getGoodsData('sell')

    },
    mounted () {
        // 自己封装的防抖函数
        const refresh = debounce(this.$refs.scroll.refresh, 1000)
        // 中央事件总线
        this.$bus.$on('imageLoad', (item) => {
            // 加载图片后重新计算高度
            refresh()
            // lodash 插件
            // this._.debounce(this.$refs.scroll.refresh, 1000, false)
            // 没有使用防抖
            // this.$refs.scroll.refresh()
        })
    }

};
</script>
<style scoped>
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
}
.scroll {
    height: calc(100vh - 94px);
}
</style>
