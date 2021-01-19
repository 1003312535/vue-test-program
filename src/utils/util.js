export function _throttle(method, delay, duration) {
    var that = this;
    var timer = null;
    var begin = new Date().getTime();
    return function() {
        var current = new Date().getTime();
        clearTimeout(timer);
        if (current - begin >= duration) {
            method();
            begin = current;
        } else {
            that.timer = setTimeout(function() {
                method();
            }, delay);
        }
    };
}
//防抖
export const Debounce = (fn, t) => {
    let delay = t || 2000;
    let timer;
    return function() {
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
};
// 设置延时函数
export function delay(duration = 300) {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve()
            clearTimeout(timer)
        }, duration)
    })
}