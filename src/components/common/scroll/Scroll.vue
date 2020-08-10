<template>
    <div class="scroll" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: '',
    data () {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
        // 初始化scroll
        this.scroll = new BScroll(this.$refs.scroll, {
            click: true,
            probeType: this.probeType,
            mouseWheel: true,
            pullUpLoad: this.pullUpLoad
        })
        // 监听滚动的位置
        if (this.probeType === 2 || this.probeType === 3) {
            this.scroll.on('scroll', position => {
                this.$emit('scroll', position)
            })
        }
        // 上拉加载更多
        if (this.pullUpLoad) {
            this.scroll.on('pullingUp', _ => {
                this.$emit('pullingUp')
            })
        }
    },
    methods: {
        finishPullUp () {
            this.scroll && this.scroll.finishPullUp()
        },
        scrollTo (x, y, time = 300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        refresh () {
            this.scroll && this.scroll.refresh()
        }
    }
};
</script>
<style scoped>
.scroll {
    overflow: hidden;
}
</style>
