<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container style="height: calc(100vh - 120px)">
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            active-text-color="red"
            @open="handleOpen"
            :router="true"
            :unique-opened="true"
            @close="handleClose"
            @select="selectEvent"
          > 
          <!-- 首页 -->
            <el-menu-item index="/Index" class="el-submenu__title">
              <i class="el-icon-document"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- 系统管理 -->
            <el-submenu index="/System">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/System/MenuList">
                <template slot="title">
                  <span>el-tree组件测试</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <!-- 树结构 -->
            <el-submenu index="/tree">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>el-tree组件测试</span>
              </template>
              <el-menu-item index="/tree/successTree">
              <span slot="title">successTree树结构测试</span>
            </el-menu-item>
            </el-submenu>
            <!-- 上传文件管理 -->
            <el-submenu index="/upload">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>上传文件管理</span>
              </template>
              <el-menu-item index="/upload/importTable">
              <span slot="title">表格导入导出</span>
            </el-menu-item>
            </el-submenu>
            <el-menu-item index="/TreeSelect">
              <span slot="title">treeSelect树结构测试</span>
            </el-menu-item>
            <el-menu-item index="/Throttle">
              <span slot="title">指令：防抖(debounce)和节流(throttle)测试</span>
            </el-menu-item>
            
            <el-menu-item index="/Form">
              <template slot="title">
                <span>form树结构测试</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/AutoPlaceholder">
              <span slot="title">autoplaceholder树结构测试</span>
            </el-menu-item>
            <el-menu-item index="/MessageBox">
              <span slot="title">messagebox 测试</span>
            </el-menu-item>
            <el-menu-item index="/FunComponent">
              <span slot="title">FunComponent函数式组件 测试</span>
            </el-menu-item>
            <el-menu-item index="/loadownTable">
              <span slot="title">input loadown-table测试</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 右区域快 -->
        <el-container>
          <el-header style="height: unset; background-color: #fff">
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="(item, index) in routeList"
                :key="index"
                :to="index != 0 ? { path: item.path } : {}"
                >{{ item.name }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </el-header>
          <el-main>
            <el-card>
              <router-view></router-view>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleOpen(key, keyPath) {//手动展开导航时触发
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) { //手动关闭导航时触发
      console.log(key, keyPath);
    },
    selectEvent(index, indexPath) {//选中 导航时触发
      console.log(index, indexPath, "选择的下标和下标路径");
      console.log(this.$route,'this.$route-----');
      console.log(this.$router,'this.$router------');
    },
  },
  data() {
    return {};
  },
  computed: {
    routeList() {
      let routeList = this.$route.matched || []; //判断是否 存在路由匹配列表
      return routeList;
    },
    menuList() {
      let arr = this.$router.options
      return arr
    }
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



/* 左侧边导航 */
.el-aside {
  overflow-x: hidden;
  background-color: #ffffff;
  box-sizing: border-box;
}
/* 清除滚动条 */
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-menu-item {
  box-sizing: border-box;
  background-color: #f0f2f5;
  margin: 0px 0 10px 15px;
  border-radius: 30px 0 0 30px;
  padding-left: 20px !important;
  margin-left: 40px;
  padding-right: 0 !important;
}
.el-menu-item,
.el-submenu__title {
  /*设置多级导航样式*/
  height: 45px !important;
  line-height: 45px !important;
}

/*设置一级导航样式 首页也定义了这个类名*/
.el-submenu__title {
  padding: 0 0 0 10px !important;
  margin: 12px;
  border-radius: 30px;
  background-color: #f3f6f5;
}
/* 设置一级导航的右边图片的样式*/
.el-submenu__icon-arrow {
  display: none;
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


/* 面包屑 */
.el-breadcrumb {
  /* width: 100%; */
  padding: 17px 0 17px 20px;
  background-color: #fff;
  font-size: 16px;
}
</style>
