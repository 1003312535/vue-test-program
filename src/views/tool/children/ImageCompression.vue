<template>
  <div class="ImageCompression">
      <!-- 图片压缩 -->
      <input type="file" @change="handleChange">
  </div>
</template>

<script>
export default {
    methods: {
        handleChange(ev) {
            console.log(ev.target.files[0],'要上传的文件')
            const file = ev.target.files[0]
            const fileReader = new FileReader()
            // fileReader.readAsDataURL(file)
            // fileReader.readAsArrayBuffer(file)
            fileReader.readAsBinaryString(file)
             fileReader.onload = ()=>{
                console.log(fileReader.result,'result----')
            }
        }
    }
}
</script>

<style>

</style>