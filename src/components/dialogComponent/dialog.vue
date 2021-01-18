<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      show() {
          this.dialogVisible = true
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
};
</script>

<style scoped>
     .el-dialog__wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /deep/ .el-dialog{
        width: 400px;
        margin: 0 !important;
    }
    /deep/ .el-dialog .el-dialog__header{
        padding: 0;
    }
    /deep/ .el-dialog__body{
        padding: unset;
    }
    /deep/ .el-dialog__body,el-dialog__footer{
        padding: unset;
    }
</style>