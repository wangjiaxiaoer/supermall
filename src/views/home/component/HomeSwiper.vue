<template>
    <Swiper>
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" />
            </a>
        </div>
    </Swiper>
</template>
<script>
import Swiper from 'components/common/swiper/Swiper'
export default {
    name: '',
    props: {
        banners: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        Swiper,
        // SwiperItem,
    }
};
</script>
<style scoped>
</style>
