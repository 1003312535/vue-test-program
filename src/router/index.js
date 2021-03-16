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

//首页和公共路由组件
const Index = () => { return import ('@/views/index') }
const layout = () => { return import ('@/layout/layout') }

//系统管理
const addMenu = () => { return import ('@/views/System/menu/addMenu') }
const listMenu = () => { return import ('@/views/System/menu/listMenu') }



// 树结构
const successTree = () => { return import ('@/views/tree/successTree') }
const TreeSelect = () => { return import ('@/views/tree/treeSelect') }
const lineTree = () => { return import ('@/views/tree/lineTree') }


// 文件管理
const importTable = () => { return import ('@/views/upload/importTable') }
const exportTable = () => { return import ('@/views/upload/exportTable') }
const loadownTable = () => { return import ('@/views/upload/loadown-table.vue') }
const inputTable = () => { return import ('@/views/upload/inputTable.vue') }
const binTable = () => { return import ('@/views/upload/binTable.vue') }

//工具管理
const markDown = () => { return import ('@/views/tool/markDown') }
const swiper = () => { return import ('@/views/tool/swiper') }
const ImageCompression = () => { return import ('@/views/tool/ImageCompression') }
const Throttle = () => { return import ('@/views/tool/throttleAnddebounce') }

//函数式组件
const allFun = () => { return import ('@/views/FunComponent/allFun') }



//表单问题
const Form = () => { return import ('@/views/formIssue/form') }
const inputValidation = () => { return import ('@/views/formIssue/inputValidation.vue') }

const AutoPlaceholder = () => { return import ('@/views/packageComponent/autoplaceholder') }

// const FunComponent = () => { return import ('@/views/treeSelect') }

const routes = [
    { path: '/Index', name: '首页', component: Index },
    {
        path: '/tree',
        component: layout,
        name: 'el-tree界面',
        children: [{ path: 'successTree', name: '某级别复选框显隐', component: successTree }, { path: 'TreeSelect', name: 'vue-treeSelect校验和高度设置', component: TreeSelect }, { path: 'lineTree', name: 'lineTree', component: lineTree }]
    },
    {
        path: '/System',
        name: '系统管理',
        component: layout,
        children: [
            { path: 'Menu', name: '菜单管理', component: listMenu, },
            { path: 'Menu/addMenu', name: '新增菜单', component: addMenu },
            { path: 'Menu/editMenu/:id', name: '编辑菜单', component: addMenu }
        ]
    },
    { path: '/Upload', name: '上传管理', component: layout, children: [{ path: 'importTable', name: '导入出表', component: importTable }, { path: 'exportTable', name: '导出表', component: exportTable }, { path: 'loadownTable', name: '下载el-table表格', component: loadownTable }, { path: 'inputTable', name: '可编辑表格', component: inputTable }, { path: 'binTable', name: '合并的表格', component: binTable }] },
    { path: '/FunComponent', name: '函数式组件', component: layout, children: [{ path: 'allFun', name: '按钮调用组件', component: allFun }] },

    {
        path: '/formIssue',
        name: '表单问题',
        component: layout,
        children: [
            { path: 'Form', name: 'form表单嵌套校验', component: Form },
            { path: 'inputValidation', name: '保留整数和小数点后几位', component: inputValidation },
        ]
    },
    { path: '/packageComponent', name: '自己分组的组件', component: layout, children: [{ path: 'AutoPlaceholder', name: 'input联动效果', component: AutoPlaceholder }, ] },
    // { path: 'FunComponent', name: '自定义插件', component: FunComponent },

    {
        path: '/tool',
        name: '工具管理',
        component: layout,
        children: [
            { path: 'markDown', name: 'markdown编辑器', component: markDown },
            { path: 'swiper', name: '轮播图', component: swiper },
            { path: 'ImageCompression', name: '图片压缩', component: ImageCompression },
            { path: 'Throttle', name: '指令防抖节流', component: Throttle },
        ]
    },
    { path: '/', redirect: '/Index' }
]
const router = new VueRouter({
    routes
})

export default router