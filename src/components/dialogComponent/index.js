const obj = {}
import dialog1 from './dialog'
obj.install = function(Vue) {
    const dialogConstructor = Vue.extend(dialog1)
    const dialog = new dialogConstructor()
    dialog.$mount(document.createElement('div'))
    document.body.appendChild(dialog.$el)
    Vue.prototype.$dialog = dialog
}
export default obj