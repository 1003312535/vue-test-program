<template>
  <div>
    <el-row>
      <el-tree
        class="tree-line"
        icon-class="el-icon-circle-plus-outline"
        :indent="0"
        :data="data"
        :props="treeProps"
        show-checkbox
      ></el-tree>
    </el-row>
    <el-row>
      <!-- <Button>111</Button> -->
    </el-row>
  </div>
</template>

<script>
// import Button from 'components/common/button';
// import 'components/common/button/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
export default {
  data() {
    return {
      data: treeData.result,
      treeProps: {
        children: "children",
        label: "resName",
      },
    };
  },
  components: {
    // Button
  }
};
</script>

// 以下为scss，记得去掉scoped，或者使用/deep/
<style lang="less">
.tree-line {
  .el-tree-node {
    position: relative;
    padding-left: 16px; // 缩进量
  }
  .el-tree-node__children {
    padding-left: 16px; // 缩进量
  }

  // 竖线
  .el-tree-node::before {
    content: "";
    height: 100%;
    width: 1px;
    position: absolute;
    left: -3px;
    top: -26px;
    border-width: 1px;
    border-left: 1px dashed #52627c;
  }
  // 当前层最后一个节点的竖线高度固定
  .el-tree-node:last-child::before {
    height: 38px; // 可以自己调节到合适数值
  }

  // 横线
  .el-tree-node::after {
    content: "";
    width: 24px;
    height: 20px;
    position: absolute;
    left: -3px;
    top: 12px;
    border-width: 1px;
    border-top: 1px dashed #52627c;
  }

  // 去掉最顶层的虚线，放最下面样式才不会被上面的覆盖了
  & > .el-tree-node::after {
    border-top: none;
  }
  & > .el-tree-node::before {
    border-left: none;
  }

  // 展开关闭的icon
  .el-tree-node__expand-icon {
    font-size: 16px;
    // 叶子节点（无子节点）
    &.is-leaf {
      color: transparent;
      // display: none; // 也可以去掉
    }
  }
}
</style>