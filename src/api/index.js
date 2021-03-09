// 集合所有请求接口函数
const moduleFiles = require.context('./', true, /.js$/); //读取
const modules = moduleFiles.keys().reduce((module, modulePath) => { //计算总对象
    if (modulePath !== 'index.js') { //排除自身文件
        let obj = moduleFiles(modulePath) //读取模块对象
        return Object.assign(module, obj) // 合并对象成为新对象
    }
}, {})
export default modules //导出合并好的 api对象