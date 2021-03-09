import { Message, MessageBox } from 'element-ui'

export function successMessage(content) {
    if (!content) {
        content = "操作成功"
    }
    Message.success({
        showClose: true,
        message: content,
        duration: 2000
    });
}

export function failMessage(content) {
    if (!content) {
        content = "操作失败"
    }
    Message.error({
        showClose: true,
        message: content,
        duration: 2000
    });
}
export function warningMessage(content) {
    Message.warning({
        showClose: true,
        message: content,
        duration: 2000
    });
}
export function infoMessage(content) {
    Message.info({
        showClose: true,
        message: content,
        duration: 2000
    });
}
//获取md5加密后大写字符传
export function getMd5UpperStr(content) {
    let crypto = require('crypto');
    let result = crypto.createHash('md5').update(content).digest("hex")
    return result.toUpperCase();
}

export function configMessage(content, Fun) {
    MessageBox.confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        Fun();
    }).catch(() => {
        // infoMessage("取消操作")
    });
}

//将map类型转换成list类型 key：id  value:name
export function map2Arr(map) {
    let arr = [];
    if (map) {
        for (let key in map) {
            arr.push({ id: key, name: map[key] });
        }
    }
    return arr;
}

//格式化下拉树
export function selectFormatterTreeAgency(node) {
    if ((node.SubAgency && !node.SubAgency.length) || node.SubAgency == null) {
        delete node.SubAgency;
    }
    return {
        id: node.Id,
        label: node.Name,
        children: node.SubAgency
    }
}

//消息 信息模式
export const messageModeOption = [{ id: 0, name: '广播' }, { id: 1, name: '指定用户' },
    { id: 2, name: '指定角色' }, { id: 3, name: '指定机构' }
];
//编辑器 显示按钮
export const quillEditorOption = {
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'image', 'clean'], // toggled buttons
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }], // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
            [{ 'direction': 'rtl' }], // text direction
            [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
        ],
        imageResize: { //调整大小组件。
            displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
            },
            modules: ['Resize', 'DisplaySize', 'Toolbar']
        }
    }
};
//消息 信息状态
export const messageStateOption = [{ id: 1, name: '正常' }, { id: 2, name: '置顶' }, { id: 0, name: '禁用' }];

//流程状态枚举
//已创建=0,处理中=2,已完成=3,挂起=4,关闭=5 用户创建
export const flowStateOption = [{ id: 0, name: '已创建' }, { id: 2, name: '处理中' }, { id: 3, name: '已完成' }, { id: 4, name: '挂起' }, { id: 5, name: '关闭' }];