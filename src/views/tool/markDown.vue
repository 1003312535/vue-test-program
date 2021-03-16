<template>
  <div class="markDown">

    <!-- 编辑内容 -->
    <mavon-editor
      v-model="context"
      :toolbars="toolbars"
      placeholder="请输入内容"
      @change="contentChange"
      @imgAdd="formatImg"
    />

    <!-- 显示编辑好的内容 -->
    <mavon-editor
      class="showMd"
      :value="renderContent"
      :subfield="prop.subfield"
      :defaultOpen="prop.defaultOpen"
      :toolbarsFlag="prop.toolbarsFlag"
      :editable="prop.editable"
      :scrollStyle="prop.scrollStyle"
      :navigation="prop.navigation"
    ></mavon-editor>
  </div>
</template>

<script>
export default {
  name: "markDown",
  data() {
    return {
      context: " ", //输入的数据,
      renderContent: null,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
      },
    };
  },
  computed: {
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true,
        navigation: true, //	默认展示目录
      };
      return data;
    },
  },
  methods: {
    //formatImg 添加图片处理 （默认时base64格式）
    formatImg(fileName, file) {
      console.log(fileName, file, 'img------')
      return;
    },

    //内容改变时触发
    contentChange(value, render) {
      console.log(value, render, "value---------------");
      this.renderContent = render;
    },
  },
};
</script>

<style scoped>
.showMd{
  margin-top: 20px;
}
</style>


//   markDown使用:npm install mavon-editor --save
    //   <hr>
    //   // 全局注册
    // import Vue from 'vue'
    // import mavonEditor from 'mavon-editor'
    // import 'mavon-editor/dist/css/index.css'
    // // use
    // Vue.use(mavonEditor)
    // new Vue({
    //     'el': '#main'
    // })
    // <hr>
    // `<mavon-editor v-model="context" :toolbars="toolbars"/>` 
    // `  data(){
    // return {
    //   context: ' ',//输入的数据,
    //   addOrderVisible: false,
    //   toolbars: {
    //     bold: true, // 粗体
    //     italic: true, // 斜体
    //     header: true, // 标题
    //     underline: true, // 下划线
    //     mark: true, // 标记
    //     superscript: true, // 上角标
    //     quote: true, // 引用
    //     ol: true, // 有序列表
    //     link: true, // 链接
    //     imagelink: true, // 图片链接
    //     help: true, // 帮助
    //     code: true, // code
    //     subfield: true, // 是否需要分栏
    //     fullscreen: true, // 全屏编辑
    //     readmodel: true, // 沉浸式阅读
    //     /* 1.3.5 */
    //     undo: true, // 上一步
    //     trash: true, // 清空
    //     save: true, // 保存（触发events中的save事件）
    //     /* 1.4.2 */
    //     navigation: true // 导航目录
    //   }
    // }`