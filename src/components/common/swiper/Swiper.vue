<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>
<script>
import { Swiper } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //注意这里  

export default {
    components: {
        Swiper,
    },
    name: 'Swiper',
    mounted () {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                disableOnInteraction: false,
            },
        })
    }
};
</script>
<style scoped>
.swiper-slide img {
    width: 100%;
}
</style>
