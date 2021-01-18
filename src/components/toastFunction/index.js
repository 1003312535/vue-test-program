const obj = {}
import Toast from './toast'
obj.install = function(Vue) { //安装时执行 obj.install 函数
    const ToastConstructor = Vue.extend(Toast)
    const toast = new ToastConstructor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj