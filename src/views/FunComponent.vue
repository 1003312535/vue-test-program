<template>
  <div>
    <el-button @click="toastClick">我是toast 弹窗</el-button>
    <el-button @click="messageClick">我是messsage 弹窗</el-button>
    <el-button @click="dialogClick">我是dialog 弹窗</el-button>
  </div>
</template>

<script>
import message1 from '../components/messageFunction/message'
export default {
  components: {
    message1
  },
  methods: {
    toastClick() {
      this.$toast.show("我是提示信息2秒后消失", 2000);
    },
    dialogClick() {
      this.$dialog.show();
    },
    messageClick() {
      this.$myConfirm.myConfirm("我是message消息", '我是标题',{
        callback() {
          console.log('点击确认消息按钮')
        },
        confirmBtn: '我是确认按钮'
      });
    },
  },
};
</script>

<style>
</style>
