<template>
  <div class="inputTable">
    <el-table 
    :data="tableData" 
    class="tb-edit" 
    style="width: 100%" 
    @row-click="handleClick"
    :row-class-name="tableRowClassName"
    highlight-current-row 
    @row-dblclick="handleCurrentChange">
            <el-table-column label="日期" width="180">
                <template slot-scope="scope">
                    <el-input :class="{'active': scope.row.isEdit}" size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input>
                    <span :class="{active: !scope.row.isEdit}">{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template slot-scope="scope">
                    <el-input :class="{active: scope.row.isEdit}" size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    <span :class="{active: !scope.row.isEdit}">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址">
                <template slot-scope="scope">
                    <el-input :class="{active: scope.row.isEdit}" size="small" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> 
                    <span :class="{active: !scope.row.isEdit}">{{scope.row.address}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br>数据:{{tableData}}</div>
  </div>
</template>

<script>
export default {
  name: "inputTable",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          isEdit: false,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          isEdit: false,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          isEdit: false,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          isEdit: false,
        },
      ],
      isEdit: false,
      oldIndex:-1,
      currentIndex: -1
    };
  },
  methods: {
    //单击
    handleClick(row,column,event) {
      console.log(11)
      if(this.currentIndex >= 0 && this.currentIndex != row.index) {
        this.tableData[this.oldIndex].isEdit = false
        this.currentIndex = -1
      }
    },
    tableRowClassName({ row, rowIndex }) {
      //把每一行的索引放进row
      row.index = rowIndex;
    },
    handleCurrentChange(row, column, event) {
      console.log(row, column, event, event.currentTarget);
      if(this.oldIndex >= 0) {
        this.tableData[this.oldIndex].isEdit = false
      }
      this.oldIndex = row.index
      this.currentIndex = row.index
      this.tableData[this.currentIndex].isEdit = true
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
/* 默认所有input 是隐藏的 */
/* .tb-edit .el-input {
  display: none;
} */
.tb-edit .el-input + span {
  display: none;
}
.tb-edit .el-input {
  display: none;
}
/* 展示选中的行的 input */
/* 隐藏选中的行的 span */
/* .tb-edit .current-row .el-input {
  display: block;
}
.tb-edit .current-row .el-input + span {
  display: none;
} */
.tb-edit .el-input.active,
.tb-edit .el-input + span.active {
  display: block;
}
</style>