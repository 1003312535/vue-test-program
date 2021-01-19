<template>
  <div class="index">
      <div class="body">
        <el-row>
          <el-col :span="6">
            <el-card>
              <div slot="header">隐藏滚动条</div>
              <div>
                #asideNav .el-menu::-webkit-scrollbar { display: none; }
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div slot="header">router路由重复点击问题:</div>
              <div>
                const originalPush = VueRouter.prototype.push
                VueRouter.prototype.push = function push(location) { return
                originalPush.call(this, location).catch(err => err) } }
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div slot="header">ocr识别身份证</div>
              <div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div slot="header">获取到文件展示图片</div>
              <div>
                this.imageUrl = URL.createObjectURL(file.raw);
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-card>
              <div slot="header">隐藏滚动条</div>
              <div>
                #asideNav .el-menu::-webkit-scrollbar { display: none; }
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div slot="header">router路由重复点击问题:</div>
              <div>
                const originalPush = VueRouter.prototype.push
                VueRouter.prototype.push = function push(location) { return
                originalPush.call(this, location).catch(err => err) } }
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div slot="header">ocr识别身份证</div>
              <div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div slot="header">table表格导入导出</div>
              <div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>