
<template>
  <div>
    <el-input
      v-model="value"
      oninput="if(isNaN(value)) {value = value.slice(0,value.length-1) } if(value.indexOf('.')>0){value=value.slice(0,value.indexOf('.')+3)}"
    ></el-input>
    <input
      type="text"
      onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
      onchange="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
}
</script>

<style scoped>
</style>