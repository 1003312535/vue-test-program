<template>
  <div class="wrap" v-show="isShow" @click.self="cancelClick">
    <div class="messageBox">
        <div class="title">
      <span class="left">{{title}}</span>
      <span class="right" @click="cancelClick">X</span>
    </div>
    <div class="content">
      <div class="info">
       {{message}}
      </div>
    </div>
    <div class="footer">
      <el-button type="primary" class="confirm" @click="confirmClick">{{confirmBtn}}</el-button>
      <el-button class="cancel" @click="cancelClick">{{cancelBtn}}</el-button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '', //消息内容
            title: '提示消息', // 标题
            confirmBtn: '确定',//确定按钮 文字
            cancelBtn: '取消', //取消按钮 文字
            options:{},
            isShow: false,
            confirm: false,
            cancel:false
        }
    },
    methods: {
        myConfirm(message, title,options) {
            this.isShow = true
            this.message = message
            this.title = title || '提示消息'
            if(!options) return;
            this.options = options
            this.confirmBtn = options.confirmBtn || '确定'
            this.cancelBtn = options.cancelBtn || '取消'

        },
        confirmClick() {
            this.isShow = false
            this.options.callback&&this.options.callback()
        },
        cancelClick() {
            this.isShow = false
        }
    }
};
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
}
.messageBox {
  width: 400px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
}
.title {
  height: 40px;
  font-size: 11px;
  padding: 0 20px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 0px 0px #0b997e;
}
.title .right {
  text-align: center;
  line-height: 12px;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  cursor: pointer;
}
.messageBox .content {
  height: 244px;
  box-sizing: border-box;
  border-top: 4px solid;
}
.info {
  padding: 90px 20px 0;
  text-align: center;
}

.footer {
  overflow: hidden;
  display: flex;
}
.footer .confirm,
.footer .cancel {
  flex: 1;
  margin: 0;
}
</style>