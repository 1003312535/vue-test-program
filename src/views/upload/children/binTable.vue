<template>
  <div>
    <el-table  :data="data" :cell-class-name="addstyle" :header-cell-style="getHeaderStyle"  >
      <el-table-column>
        <el-table-column prop="unionName" label="工会名称" align="center"> </el-table-column>
      </el-table-column>
      <el-table-column>
        <el-table-column prop="committeeName" label="委员会名称" align="center">
        </el-table-column>
      </el-table-column>
      <el-table-column width="700px" >
        <el-table-column prop="position" label="职务" align="center">
          <template slot-scope="scope">
            <p
              v-for="(item, index) in scope.row.members"
              class="setline"
              :key="index"
            >
              {{ item.position }}
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" style="padding: 0 !important" align="center">
          <template slot-scope="scope">
            <p
              v-for="(item, index) in scope.row.members"
              class="setline"
              :key="index"
            >
              {{ item.name }}
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="call" label="手机号" align="center">
          <template slot-scope="scope">
            <p
              v-for="(item, index) in scope.row.members"
              class="setline"
              :key="index"
            >
              {{ item.call }}
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="gender" label="性别" align="center">
          <template slot-scope="scope">
            <p
              v-for="(item, index) in scope.row.members"
              class="setline"
              :key="index"
            >
              {{ item.gender }}
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="professional" label="专或兼职" align="center" >
          <template slot-scope="scope">
            <p
              v-for="(item, index) in scope.row.members"
              class="setline"
              :key="index"
            > 
              {{ item.professional }}
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="任职时间" align="center">
          <template slot-scope="scope">
            <p
              v-for="(item, index) in scope.row.members"
              class="setline"
              :key="index"
            >
              {{ item.time }}
            </p>
          </template>
        </el-table-column>
        <!-- </el-table> -->
        <!-- </template> -->
        <!-- <template slot="header"> </template> -->
      </el-table-column>
      <el-table-column>
        <el-table-column prop="createTime" label="建会日期" align="center">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { data } from "@/db/data.js";
export default {
  data() {
    return {
      data,
    };
  },
  methods: {
    getHeaderStyle({ rowIndex, columnIndex }) {
      return {
        backgroundColor: 'red',
        borderRight: 'none',
        color: 'white'
      }
    },
    addstyle({ rowIndex, columnIndex }) {
      console.log(columnIndex, "columnIndex-----");
      if (
        columnIndex == 2 ||
        columnIndex == 3 ||
        columnIndex == 4 ||
        columnIndex == 5 ||
        columnIndex == 6 ||
        columnIndex == 7
      ) {
        return "bbb";
      }
    },
  },
};
</script>

<style lang="less">
.bbb .cell {
  padding: 0 !important;
}
.content {
  height: calc(100% - 50px);
  position: absolute;
  width: 100%;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.setline {
  box-sizing: border-box;
  line-height: 22px;
  padding: 12px 10px;
  border-bottom: 1px solid #ebeef5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
}
.setline:first-of-type {
  padding-top: 0;
}
.setline:last-of-type {
  padding-bottom: 0;
  border-bottom: none;
}
.el-table thead tr:first-of-type {
  //隐藏一级表头
  display: none;
}
</style>