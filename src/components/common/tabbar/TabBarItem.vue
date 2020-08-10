<template>
    <div class="tab-bar-item" @click="clickItem" :style="activeStyle">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
</template>
<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#ff8198'
        }
    },
    computed: {
        isActive () {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle () {
            return this.isActive ? { color: this.activeColor } : {}
        }
    },
    methods: {
        clickItem () {
            if (this.$route.path.indexOf(this.path) < 0) {
                this.$router.replace(this.path)
            }
        }
    },
};
</script>
<style scoped>
.tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
}
.active {
    color: #ff8198;
}
#tab-bar i {
    display: block;
    width: 100%;
    font-size: 18px;
    margin-bottom: 3px;
}
</style>
