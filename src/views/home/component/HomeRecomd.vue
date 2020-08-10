<template>
    <div class="recommend flex">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link" class="flex flex-column">
                <img :src="item.image" alt />
                <span>{{item.title}}</span>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        recommends: {
            type: Array,
            required: true
        }
    },
    data () {
        return {}
    },
    methods: {}
};
</script>
<style scoped>
.recommend {
    border-bottom: 10px solid #eee;
    padding-bottom: 15px;
}
.recommend-item {
    width: 25%;
}
.recommend-item img {
    width: 60%;
    margin: 10px 0;
}
</style>
