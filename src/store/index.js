import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCount(state, payload) {
            payload.count++;
        },
        addProduct(state, payload) {
            state.cartList.push(payload);
        }
    },
    actions: {
        addCart({ state, commit }, payload) {
            return new Promise((resolve, reject) => {
                // for of 循环方法
                // let oldProduct = null;
                // for (let item of state.cartList) {
                //     if (item.iid === payload.iid) {
                //         oldProduct = item;
                //     }
                // }
                const oldProduct = state.cartList.find(
                    item => item.iid === payload.iid
                );
                if (oldProduct) {
                    commit("addCount", oldProduct);
                    resolve("当前商品数量加1");
                } else {
                    payload.count = 1;
                    payload.checked = true;
                    commit("addProduct", payload);
                    resolve("添加购物成功");
                }
            });
        }
    },
    getters: {
        cartList(state) {
            return state.cartList;
        },
        cartCount(state, getters) {
            return getters.cartList.length;
        }
    }
});

export default store;
