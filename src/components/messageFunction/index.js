const obj = {}
import message1 from './message'
obj.install = function(Vue) {
    const confirmConstructor = Vue.extend(message1)
    const myConfirm = new confirmConstructor()
    myConfirm.$mount(document.createElement('div'))
    document.body.appendChild(myConfirm.$el)
    Vue.prototype.$myConfirm = myConfirm
}

export default obj