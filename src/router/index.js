import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    /**
     * 重写路由的push方法,清除路由重复点击报错问题
     */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const Index = () => { return import ('@/views/index') }

//系统管理
const System = () => { return import ('@/views/System/System') }
const Menu = () => { return import ('@/views/System/Menu') }



// 树结构
const Tree = () => { return import ('@/views/tree/tree') }
const successTree = () => { return import ('@/views/tree/children/successTree') }
const TreeSelect = () => { return import ('@/views/tree/children/treeSelect') }


// 文件管理
const Upload = () => { return import ('@/views/upload/upload') }
const importTable = () => { return import ('@/views/upload/children/importTable') }
const exportTable = () => { return import ('@/views/upload/children/exportTable') }


//工具管理
const tool = () => { return import ('@/views/tool/tool') }
const markDown = () => { return import ('@/views/tool/children/markDown') }
const swiper = () => { return import ('@/views/tool/children/swiper') }

//函数式组件
const FunComponent = () => { return import ('@/views/FunComponent/FunComponent') }
const allFun = () => { return import ('@/views/FunComponent/children/allFun') }




const Throttle = () => { return import ('@/views/throttleAnddebounce') }
const Form = () => { return import ('@/views/form') }
const AutoPlaceholder = () => { return import ('@/views/autoplaceholder') }

// const FunComponent = () => { return import ('@/views/treeSelect') }
const loadownTable = () => { return import ('@/views/loadown-table.vue') }
const Input = () => { return import ('@/views/input.vue') }
const routes = [
    { path: '/Index', name: '首页', component: Index },
    {
        path: '/tree',
        component: Tree,
        name: 'el-tree界面',
        children: [{ path: 'successTree', name: '某级别复选框显隐', component: successTree }, { path: 'TreeSelect', name: 'vue-treeSelect校验和高度设置', component: TreeSelect }, ]
    },
    { path: '/System', name: '系统管理', component: System, children: [{ path: 'Menu', name: '菜单管理', component: Menu }] },
    { path: '/Upload', name: '上传管理', component: Upload, children: [{ path: 'importTable', name: '导入出表', component: importTable }, { path: 'exportTable', name: '导出表', component: exportTable }] },
    { path: '/FunComponent', name: '函数式组件', component: Upload, children: [{ path: 'allFun', name: '按钮调用组件', component: allFun }] },

    { path: '/Throttle', name: '指令防抖节流', component: Throttle },

    { path: '/Form', name: 'el-form表单三层嵌套校验', component: Form },
    { path: '/AutoPlaceholder', name: 'input联动效果', component: AutoPlaceholder },
    // { path: '/MessageBox', name: '函数式组件', component: MessageBox },
    // { path: 'FunComponent', name: '自定义插件', component: FunComponent },
    { path: '/input', name: '保留整数和小数点后几位', component: Input },
    { path: '/loadownTable', name: '下载el-table表格', component: loadownTable },
    { path: '/tool', name: '工具管理', component: tool, children: [{ path: 'markDown', name: 'markdown编辑器', component: markDown }, { path: 'swiper', name: '轮播图', component: swiper }] },

    { path: '/', redirect: '/Index' }

]
const router = new VueRouter({
    routes
})

export default router