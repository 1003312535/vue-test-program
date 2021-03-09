<template>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in routeList"
        :key="index"
        :to="index != 0 ? { path: item.path } : {}"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  
</template>

<script>
export default {
  computed: {
    routeList() {
      let routeList = this.$route.matched || []; //判断是否 存在路由匹配列表
      return routeList.filter((item) => {
        //过滤调 子级路径为 / 的 path 子项
        return item.name;
      });
    },
  },
};
</script>

<style scoped>
/* 面包屑 */
.el-breadcrumb {
  /* width: 100%; */
  padding: 17px 0 17px 20px;
  background-color: #fff;
  font-size: 16px;
}
</style>