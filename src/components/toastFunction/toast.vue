<template>
  <div class="toast" v-if="isShow">
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      message: "",//消息
      isShow: false,//显示隐藏
      timer: null //定时器
    };
  },
  methods: {
      show(message,duration = 2000) {//Tost 的显示
      console.log(111133333)
        this.message = message
        this.isShow = true //显示
        if(this.timer) clearTimeout(this.timer)  // 清除上一个定时器
        this.timer = setTimeout(() => { //控制tost 的显示时间
            this.isShow = false //隐藏
            this.message = ''//清空消息
            this.timer = null //清空定时器
        },duration)
      }
  }
};
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 10px;
  background-color: rgba(0,0,0,0.6);
  color: white;
  border-radius: 10px;
}
</style>