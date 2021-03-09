<template>
  <div class="otheeRow">
    <slot></slot>
  </div>
</template>

<script>
import cell from './cell'
export default {
  components: {cell},
  
};
</script>

<style scoped lang="less">
.otheeRow {
  display: flex;
  & > div {
    // max-width: 100%;
    // width: 100%;
    box-sizing: border-box;
    border: 1px solid #d7d7d7;
    // border-top: transparent;
    // border-left: transparent;
  }
  & > div:not([style*="width"]) {
    flex: 1;
  }
}
</style>