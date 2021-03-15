<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-card>
          <div slot="header">隐藏二三级别复选框<br>  如果三级别是最底层 就不隐藏</div>
          <elTree2
            :data="treedata"
            :props="treeProps"
            :show-checkbox="true"
            :check-strictly="true"
          >
          </elTree2>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import elTree2 from "@/components/tree/src/tree.vue";
import treeData from "@/data/treeData";
export default {
  components: {
    elTree2,
  },
  data() {
    return {
      treedata: [],
      treeProps: {
        children: "children",
        label: "resName",
      },
    };
  },
  created() {
    let treedata = treeData.result;
    console.log(treedata, "treedata-------");
    treedata.forEach((item, index) => {
      if (Array.isArray(item.children) && item.children.length > 0) {
        console.log(1111);
        item.children.forEach((item1) => {
          item1.showCheckbox = false;
          item1.children.forEach((item2) => {
            if (Array.isArray(item2.children) && item2.children.length > 0) {
              item2.showCheckbox = false;
            }
          });
        });
      }
    });
    this.treedata = treedata;
    console.log(this.treedata, "修改后的数据");
  },
};
</script>

<style scoped>
</style>
