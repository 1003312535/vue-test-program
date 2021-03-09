import api from '@/api'
import rul from "utils/rules.js";
const MessageModule = require.context('./', false, /message.js/)
const msg = MessageModule(MessageModule.keys()[0])
export default {
    install(Vue) {
        Vue.prototype.$api = api
        Vue.prototype.$msg = msg
        Vue.prototype.$rul = rul
    }
}