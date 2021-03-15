import http from '@/axios/axios'

//添加菜单
export function saveMenu(data) {
    return http({ url: '/menu/saveMenu', data, method: 'POST' })
}
//// 获取某个菜单详情
export function getMenuDetail(params) {
    return http({ url: '/menu/getMenuDetail', params })
}
// 获取一级菜单列表 (获取 menu 下拉框列表)
export function getMenuDropDownList() {
    return http({ url: '/menu/menuList' })
}
// 获取菜单Tree列表 (表格树展示)
export function getMenuTreeList() {
    return http({ url: '/menu/menuTreeList' })
}