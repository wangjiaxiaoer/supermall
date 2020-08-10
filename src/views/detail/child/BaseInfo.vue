<template>
    <div class="base-info" v-if="Object.keys(baseInfo).length !==0">
        <div class="info-title">{{baseInfo.info.title}}</div>
        <div class="info-price">
            <span class="n-price">{{baseInfo.info.price}}</span>
            <span class="o-price">{{baseInfo.info.oldPrice}}</span>
            <span class="discount">{{baseInfo.info.discountDesc}}</span>
        </div>
        <div class="info-other">
            <span v-for="(item,index) in data.columns" :key="index">{{item}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="(item,index) in data.services" :key="index">
                <img :src="item.icon" />
                <span>{{item.name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    data () {
        return {
            data: {}
        }
    },
    props: {
        baseInfo: {
            type: Object,
            default () {
                return {}
            }
        },
    },
    mounted () {
        if (this.baseInfo) {
            this.data = this.baseInfo
        }
    },
    methods: {}
};
</script>
<style scoped>
.base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}

.info-title {
    color: #222;
    font-size: 16px;
    line-height: 23px;
}

.info-price {
    margin-top: 10px;
}

.info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
}

.info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}

.info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
}

.info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    justify-content: space-between;
}

.info-service {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
}

.info-service-item img {
    width: 14px;
    height: 14px;
    display: block;
    margin: 10px auto;
}

.info-service-item span {
    font-size: 12px;
    color: #333;
}
</style>
