<template>
    <div class="toast" v-show="isShow">{{message}}</div>
</template>
<script>
export default {
    name: 'Toast',
    props: {
        // message: {
        //     type: String
        // },
        // isShow: {
        //     type: Boolean,
        //     default: false
        // }
    },
    data () {
        return {
            message: '',
            isShow: false
        }
    },
    methods: {
        show (message, duration = 2000) {
            this.isShow = true
            this.message = message
            setTimeout(_ => {
                this.isShow = false
                this.message = ''
            }, duration)
        }
    }
};
</script>
<style scoped>
.toast {
    position: fixed;
    left: 50%;
    top: 50%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 15px 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    transform: translateX(-50%);
    z-index: 999;
    transition: all 1s;
}
</style>
