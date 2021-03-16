<template>
  <div v-if="!blank">
    <otheeRow style="background: #aaaaaa">
      <cell
        style="
          line-height: 60px;
          color: white;
          font-size: 20px;
          font-weight: 700;
        "
      >
        <slot></slot>
      </cell>
    </otheeRow>
  </div>
  <div v-else>
    <otheeRow>
      <cell style="line-height: 60px">
        <slot></slot>
      </cell>
    </otheeRow>
  </div>
</template>
<script>
import Cell from './cell.vue'
import otheeRow from './otheeRow'
export default {
  components: { Cell, otheeRow },
  props: {
    blank: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
</style>