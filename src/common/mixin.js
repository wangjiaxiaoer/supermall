import BackTop from "components/content/backtop/BackTop";

export const backTopMinxin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        };
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        showBackTop(pos) {
            // 返回顶部显示隐藏
            this.isShowBackTop = -pos.y > 1000;
        }
    }
};
