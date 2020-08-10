<template>
    <div class="goods-info">
        <div class="info-desc clear-fix">
            <div class="start"></div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="info-list">
            <img :src="item" v-for="item in detailInfo.detailImage[0].list" :key="item" alt />
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    data () {
        return {
            counter: 0,
            imagesLength: 0
        }
    },
    props: {
        detailInfo: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    created () { },
    methods: {
        imageLoad () {
            if (++this.counter === this.imagesLength) {
                this.$emit('imageLoad')
            }
        }
    },
    watch: {
        detailInfo () {
            this.imagesLength = this.detailInfo.detailImage[0].list.length
        }
    }
};
</script>
<style scoped>
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}

.info-desc {
    padding: 0 15px;
    margin-bottom: 20px;
    line-height: 23px;
}

.info-desc .start,
.info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
}

.info-desc .start {
    float: left;
}

.info-desc .end {
    float: right;
}

.info-desc .start::before,
.info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
}

.info-desc .end::after {
    right: 0;
}

.info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
}

.info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
}

.info-list img {
    width: 100%;
}
</style>
