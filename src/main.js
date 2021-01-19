import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import loading from '@/components/FunComponent.vue'

// Vue.prototype.$loading1 = loading
import toast from './components/toastFunction/index'
Vue.use(toast)
import message2 from './components/messageFunction/index'
Vue.use(message2)
import dialog from './components/dialogComponent/index'
Vue.use(dialog)
import router from './router/index'

//swiper 插件的引入
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

//mavon-editor 插件的引入
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)



//防抖指令期待参数为 [fn, event, time]
Vue.directive('debounce', {
        inserted: function(el, binding) {
            let [fn, event = "click", time = 300] = binding.value
            let timer
            el.addEventListener(event, () => {
                timer && clearTimeout(timer)
                timer = setTimeout(() => fn(), time)
            })
        }
    })
    //节流指令期待参数为 [fn, event, time]
Vue.directive('throttle', {
    inserted: function(el, binding) {
        let [fn, event = "click", time = 1500] = binding.value
        let timer, timer_end;
        el.addEventListener(event, () => {
            if (timer) {
                clearTimeout(timer_end);
                return timer_end = setTimeout(() => fn(), time);
            }
            fn();
            timer = setTimeout(() => timer = null, time)
        })
    }
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')