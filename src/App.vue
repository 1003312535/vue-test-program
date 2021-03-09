<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container style="height: calc(100vh - 120px)">
        <default-aside></default-aside>
        <!-- 右区域快 -->
        <el-container>
          <el-header style="height: unset; background-color: #fff">
            <defaultBreadcrumb></defaultBreadcrumb>
          </el-header>
          <el-main>
            <el-card>
              <!-- center -->
              <router-view></router-view>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
      <!-- footer -->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import defaultAside from "components/common/aside/aside";//左边菜单栏
import defaultBreadcrumb from "components/common/breadcrumb/breadcrumb"; //右边 面包屑

export default {
  name: "App",
  components: {
    defaultAside,
    defaultBreadcrumb,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100vh;
}

/* 容器布局 */
.el-container {
  height: 100%;
}
.el-header {
  background-color: black;
}
.el-footer {
  background-color: black;
}

/* main中心 */
#main-container {
  padding: 0;
}
.el-main {
  padding: 0;
  background-color: #f0f2f5;
  overflow: auto;
}
.el-card {
  margin: 20px;
}
</style>
