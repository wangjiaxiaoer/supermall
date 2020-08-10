<template>
    <div class="tab-control flex">
        <div
            class="tab-control-item"
            v-for="(item,index) in titles"
            :key="index"
            @click="changTab(index)"
            :class="{'active':currentIndex==index}"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        titles: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            currentIndex: 0
        }
    },
    methods: {
        changTab (index) {
            this.currentIndex = index
            this.$emit('tabClick', index)
        }
    }
};
</script>
<style scoped>
.tab-control {
    background-color: #fff;
    position: relative;
    z-index: 99;
    padding-bottom: 10px;
}
.tab-control-item {
    width: 33%;
    text-align: center;
}
.tab-control-item span {
    border-bottom: 3px solid #fff;
    line-height: 35px;
    height: 35px;
    display: inline-block;
    font-size: 14px;
}
.tab-control-item.active span {
    border-bottom-color: var(--color-tint);
    color: var(--color-tint);
}
</style>
