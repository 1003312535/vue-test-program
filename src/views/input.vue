// 测试 input 数字 和数字保留小数
<template>
  <div>
      <el-input v-model="value" oninput="if(isNaN(value)) {value = value.slice(0,value.length-1) } if(value.indexOf('.')>0){value=value.slice(0,value.indexOf('.')+3)}"></el-input>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style scoped>

</style>