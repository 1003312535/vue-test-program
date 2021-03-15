<template>
  <div>
    <!-- <el-button type="primary" v-debounce="clickCount"> 防抖点击</el-button> -->
    <el-button type="primary" v-debounce="[clickCount.bind(null,123)]"> 防抖点击</el-button>
  </div>
</template>

<script>
import { _throttle } from "@/utils/util";
export default {
  name: "Throttle",
  data() {
    return {};
  },
  directives: {
    // debounce: {
    //   inserted: function (el, binding) {
    //     console.log(22222)
    //     let timer;
    //     el.addEventListener("click", () => {
    //       if (timer) {
    //         clearTimeout(timer);
    //       }
    //       timer = setTimeout(() => {
    //         binding.value();
    //       }, 300);
    //     });
    //   },
    // }
  },
  methods: {
    clickCount(aa) {
        console.log(1,aa);
    },
  },
};
</script>

<style scoped>
</style>