import { request } from "./request";

// 首页banner
export function getHomeMultidata() {
    return request({
        url: "/home/multidata"
    });
}

// 首页列表
export function getGoodsData(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    });
}

// 根据iid请求详情
export function getDetail(iid) {
    console.log(iid);
    return request({
        url: "/detail",
        params: {
            iid
        }
    });
}
