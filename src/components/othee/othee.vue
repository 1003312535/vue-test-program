<template>
  <div class="othee">
    <!-- title -->
    
    <div class="title" v-if="title">{{title}}</div>
    <slot></slot>
    <!-- content -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="less">
.othee {
  width: 100%;
  min-width: 500px;
  box-sizing: border-box;
  // border: 2px solid #d7d7d7;
  // border-right: transparent;
  // border-bottom: transparent;
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 36px;
    background-color: #aaaaaa;
    box-sizing: border-box;
      border: 1px solid #d7d7d7;

      // border-top: transparent;
      // border-left: transparent;
  }
}
</style>