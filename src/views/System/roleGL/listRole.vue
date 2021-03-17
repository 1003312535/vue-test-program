<template>
  <div class="listRole">
    <el-button type="success" @click="addMenu">添加菜单</el-button>
    <el-table :data="tableData" row-key="id" :indent="20" :tree-props="{ children: 'children'}">
      <el-table-column prop="menuName" label="菜单名称"></el-table-column>
      <el-table-column prop="menuURL" label="菜单地址"></el-table-column>
      <el-table-column prop="iconType" label="icon图标">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.iconURL">
            <i :class="scope.row.iconURL"></i>
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="iconType" label="icon图标">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.menuStatus"
            :active-value="1"
            :inactive-value="0"
            :disabled="true"
          ></el-switch>
          {{scope.row.menuStatus == 1? '启用':'未启用'}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handleShowItem(scope.row,scope.$index)">查看</el-button>
          <el-button type="text" @click="handleEidtItem(scope.row,scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    //handleShowItem()
    handleShowItem(row, index) {
      console.log(row, index)
    },
    //handleEidtItem
    handleEidtItem(row, index) {
      this.$router.push(`/System/Menu/editMenu/${row.id}`)
    },
    //添加菜单
    addMenu() {
      this.$router.push('/System/Menu/addMenu')
    },
    //获取导航Tree列表
    getMenuTreeList() {
      return this.$api.getMenuTreeList()
    },
  },
  async mounted() {
    try {
      let { result } = await this.getMenuTreeList()
      this.tableData = result
    } catch (err) {
      throw err
    }
  },
  data() {
    return {
      tableData: [],
    }
  },
}
</script>

<style scoped>
</style>