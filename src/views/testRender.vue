<template>
  <div>
      {{message}}
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    default: '---我是默认内容---'
  }
}
</script>

<style scoped>

</style>