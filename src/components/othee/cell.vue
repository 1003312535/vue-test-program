<template>
  <div class="mycell">
    <!-- <div class="label"  v-if="label !== '' || col" :style="`width: ${col?'100%': labelwidth + 'px'};`"> -->
    <div class="label"  v-if="label !== '' || col" :style="col?{width: '100%',border: 'none'}:{width: labelwidth+ 'px',border: '1px solid #d7d7d7',borderLeft: 'transparent',borderTop: 'transparent',borderBottom: 'transparent'}">
      <div :class="request? 'request':''" :style="{padding: `0px ${lablepadding}px`}">{{ label }}</div>
    </div>
    <div class="myother" v-if="!col"><div :class="{activespace: justify !=''}" :style="justify ==''? {}: {display: 'flex',justifyContent: justify,}"><slot></slot></div></div>
  </div>
</template>

<script>
export default {
  props: {
    labelwidth: {
      type: Number,
      default: 240,
    },
    lablepadding: {
      type: Number,
      default: 50,
    },
    label: {
      type: String,
      default: "",
    },
    request: {
      type: Boolean,
      default: false
    },
    col: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: ''
    }
  },
};
</script>

<style scoped lang="less">
.mycell {
  display: flex;
  line-height: 30px;
  min-height: 57px;
  min-width: 38px; //解决缩放问题
  .label {
    padding: 10px 0px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    &>div{text-align: center;width: 100%;position: relative;}
    &>div.request::before {
      content: "*";
      color: red;
      position: absolute;
      left: 10px;
      top: 0;
      vertical-align: middle;
    }
  }
  .myother {
    // min-width: 180px;
    // padding: 10px;
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &>div{
      width: 100%;
      overflow: hidden;
      word-break:break-all;
      word-wrap:break-word
    }
    &>div.activespace{
        font-size: 28px;
        line-height: 126px;
        padding: 0 45px;
        button{
          font-size: 28px;
          line-height: 36px;
          color: black;
        }
      }
  }
}
</style>