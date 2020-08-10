import axios from "axios";
export function request(config) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000/api/n3",
        timeout: 10000
    });

    // axios请求拦截器
    instance.interceptors.request.use(
        config => {
            // 配置后端要求的请求头
            // 显示loading加载动画
            return config;
        },
        err => {
            console.log(err);
        }
    );
    // axios响应拦截器
    instance.interceptors.response.use(
        res => {
            // 隐藏loading加载动画
            return res.data;
        },
        err => {}
    );
    // 发送请求
    return instance(config);
}
