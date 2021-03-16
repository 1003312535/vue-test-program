<template>
  <div class="importTable">
    <!-- <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :before-upload="beforeAvatarUpload"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload> -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe="true"
      size="mini"
      :row-class-name="rowFunClass"
      :row-style="rowFunStyle"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-button type="primary" style="margin-top: 20px" @click="handleDownload"
      >导出</el-button
    >
  </div>
</template>

<script>
export default {
  name: "importTable",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    //
    rowFunStyle({ row, rowIndex }) {
      if (rowIndex != 0) {
        return { border: "5px solid black" };
      }
    },
    //给表格行添加类名名
    rowFunClass({ row, rowIndex }) {
      console.log(row, rowIndex, "row--------");
      if (rowIndex != 0) {
        return "bodyRow";
      }
    },
    //导出表格
    handleDownload() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/vendor/Export2Excel");
        const tHeader = ["日期", "姓名", "地址"]; //表头
        const filterVal = ["date", "name", "address"]; //表体数据
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        console.log(data, " data------");
        export_json_to_excel(tHeader, data, "列表excel");
      });
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
    //文件上传前校验
    beforeAvatarUpload(file) {
      console.log(file, "file----文件上传前校验");

      // 校验文件后缀名
      let fileTypes = ["xlsx", "xls"];
      let aa = file.name.replace(/.+\./gi, ""); //文件后缀名
      if (!fileTypes.includes(aa)) {
        //文件类型不正确
        this.$message({
          message: "上传文件类型不正确，请选择xlsx/xls格式文件",
          type: "warning",
        });
        return;
      }

      //校验文件大小
      const isLt2M = file.size / 1024 / 1024 < 2; //文件是否小于2m
      if (!isLt2M) {
        this.$message({
          message: "上传头像图片大小不能超过 2MB!",
          type: "warning",
        });
        return;
      }
      console.log();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      console.log(this.fileList, "data 中的数据----");
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style scoped>
/deep/ .bodyRow {
  border-right: 10px solid black;
}
</style>