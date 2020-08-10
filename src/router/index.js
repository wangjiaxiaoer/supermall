import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const Detail = () => import("views/detail/Detail.vue");
const Cart = () => import("views/cart/Cart.vue");
const Profile = () => import("views/profile/Profile.vue");

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        name: "Detail",
        path: "/detail",
        component: Detail
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
