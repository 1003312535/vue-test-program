<template>
  <el-aside>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="red"
      :collapse="isCollapse"
      :router="true"
      :unique-opened="true"
      @select="selectEvent"
      :default-active="currentIndexPath"
    >
      <!-- 首页 -->
      <el-menu-item index="/Index" class="el-submenu__title">
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 工具管理 -->
      <el-submenu index="/tool">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>工具管理</span>
        </template>
        <el-menu-item index="/tool/markDown">
          <template slot="title">
            <span>markDown</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/tool/swiper">
          <template slot="title">
            <span>swiper</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/tool/ImageCompression">
          <template slot="title">
            <span>ImageCompression</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <!-- 系统管理 -->
      <el-submenu index="/System">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/System/Menu">
          <template slot="title">
            <span>菜单管理</span>
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
        <el-menu-item index="/tree/lineTree">
          <span slot="title">lineTree</span>
        </el-menu-item>
        <el-menu-item index="/tree/TreeSelect">
          <span slot="title">treeSelect树结构测试</span>
        </el-menu-item>
      </el-submenu>
      <!-- 上传文件管理 -->
      <el-submenu index="/upload">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>上传文件管理</span>
        </template>
        <el-menu-item index="/upload/binTable">
          <span slot="title">合并的表格</span>
        </el-menu-item>
        <el-menu-item index="/upload/importTable">
          <span slot="title">表格导入</span> 
        </el-menu-item>
        <el-menu-item index="/upload/exportTable">
          <span slot="title">表格导出</span>
        </el-menu-item>
        <el-menu-item index="/upload/loadownTable">
          <span slot="title">input loadown-table测试</span>
        </el-menu-item>
        <el-menu-item index="/upload/inputTable">
          <span slot="title">可编辑的表格</span>
        </el-menu-item>
      </el-submenu>
      <!-- 函数式插件 -->
      <el-submenu index="/FunComponent">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>函数式插件</span>
        </template>
        <el-menu-item index="/FunComponent/allFun">
          <span slot="title">按钮调用组件</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/Throttle">
        <span slot="title">指令：防抖(debounce)和节流(throttle)测试</span>
      </el-menu-item>
      <el-menu-item index="/input">
        <span slot="title">保留整数和小数点后几位</span>
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
        <span slot="title">FunComponent函数式组件</span>
      </el-menu-item>
    </el-menu>
    <div
      class="Collapse"
      @click="changeState"
      :style="{ width: isCollapse ? '64px' : '200px' }"
    >
      |||
    </div>
  </el-aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import {CHANGINDEXPATH,CHANGASIDENAVCOLLAPSESTATUS} from '@/store/constant'
export default {
  computed: {
    ...mapState([
      'currentIndexPath',
      'isCollapse'
    ]),
  },
  methods: {
    ...mapMutations([CHANGINDEXPATH,CHANGASIDENAVCOLLAPSESTATUS]),
    changeState() {//导航栏的折叠和收缩
      this[CHANGASIDENAVCOLLAPSESTATUS](!this.isCollapse)
    },
    selectEvent(index, indexPath) {//选中 导航时触发
      // console.log(index, indexPath, "选择的下标和下标路径");
      this[CHANGINDEXPATH](indexPath.pop())
    },
  },
};
</script>

<style scoped>

</style>