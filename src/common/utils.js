// 防抖函数
export function debounce(func, delay) {
    let timer = null;
    return function(...agrs) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(_ => {
            func.apply(this, agrs);
        }, delay);
    };
}
