import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from "./store/index";

import FastClick from "fastclick";
import VueLazyLoad from "vue-lazyload";

import toast from "components/common/toast/index";

// 自定义插件的toast
Vue.use(toast);

// 解决移动端300ms延迟问题
FastClick.attach(document.body);
// 图片懒加载
Vue.use(VueLazyLoad, {
    loading: require("./assets/img/common/placeholder.png")
});

import _ from "lodash";

Vue.prototype._ = _;

Vue.config.productionTip = false;

// event Bus 用于无关系组件间的通信。中央事件总线
Vue.prototype.$bus = new Vue();

new Vue({
    render: h => h(App),
    router,
    store
}).$mount("#app");
