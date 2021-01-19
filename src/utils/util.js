// export function _throttle(fn, interval) {
//     console.log('_throttle')
//     let last = 0
//     let timer
//     const interVal = interval || 200
//     return function() {
//         const th = this
//         const args = arguments
//         const now = new Date().getTime()
//         if (last && now - last < interVal) {
//             clearTimeout(timer)
//             timer = setTimeout(function() {
//                 last = new Date().getTime()
//                     // fn.apply(th, args)
//             }, interVal)
//         } else {
//             last = new Date().getTime()
//             fn.apply(th, args)
//         }
//     }


// }
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

// 设置延时函数
export function delay(duration = 300) {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            resolve()
            clearTimeout(timer)
        }, duration)
    })
}