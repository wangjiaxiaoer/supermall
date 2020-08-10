<template>
    <TabBar>
        <TabBarItem path="/home">
            <i class="iconfont icon-home" slot="item-icon"></i>
            <span slot="item-text">首页</span>
        </TabBarItem>
        <TabBarItem path="/category">
            <i class="iconfont icon-category_find_icon" slot="item-icon"></i>
            <span slot="item-text">分类</span>
        </TabBarItem>
        <TabBarItem path="/cart">
            <i class="iconfont icon-cart" slot="item-icon"></i>
            <span slot="item-text">购物车</span>
        </TabBarItem>
        <TabBarItem path="/profile">
            <i class="iconfont icon-wode" slot="item-icon"></i>
            <span slot="item-text">我的</span>
        </TabBarItem>
    </TabBar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
    components: {
        TabBar,
        TabBarItem
    },
    name: 'MainTabBar'
};
</script>
<style>
</style>
