<template>
  <div class="index">
    <h1>我是首页</h1>
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div class="body">
        router路由重复点击问题:<br />
        <el-row>
          <el-col :span="6">
            <el-card>
              <div slot="header">隐藏滚动条</div>
              <div>
            #asideNav .el-menu::-webkit-scrollbar {
                display: none;
            }
          </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>