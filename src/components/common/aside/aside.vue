<template>
  <el-aside class="Menu">
    <el-scrollbar style="height:100%;width:100%">
      <el-menu
        class="el-menu-vertical-demo"
        active-text-color="red"
        :collapse="isCollapse"
        :router="true"
        :unique-opened="true"
        @select="selectEvent"
        :default-active="currentIndexPath"
      >
        <template v-for="(item) in tableData">
          <template v-if="item.menuURL == '/index'">
            <el-menu-item :index="item.menuURL" class="el-submenu__title">
              <i class="el-icon-document"></i>
              <span slot="title">{{item.menuName}}</span>
            </el-menu-item>
          </template>
          <template v-else>
            <el-submenu :index="item.menuURL">
              <template slot="title">
                <i :class="item.iconURL"></i>
                <span>{{item.menuName}}</span>
              </template>
              <template v-if="item.children&&item.children.length>0">
                <el-menu-item
                  :index="subItem.menuURL"
                  v-for="(subItem,subIndex) in item.children"
                  :key="subItem.id"
                >
                  <span slot="title">{{subItem.menuName}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
    <div class="Collapse" @click="changeState" :style="{ width: isCollapse ? '64px' : '100%' }">|||</div>
  </el-aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { CHANGINDEXPATH, CHANGASIDENAVCOLLAPSESTATUS } from '@/store/constant'
export default {
  computed: {
    ...mapState(['currentIndexPath', 'isCollapse']),
  },
  data() {
    return {
      tableData: [],
    }
  },
  async mounted() {
    try {
      let { result } = await this.getMenuTreeList()
      this.tableData = result
      console.log(this.tableData, 'tableData-------')
    } catch (err) {
      throw err
    }
  },
  methods: {
    ...mapMutations([CHANGINDEXPATH, CHANGASIDENAVCOLLAPSESTATUS]),
    //获取导航Tree列表
    getMenuTreeList() {
      return this.$api.getMenuTreeList()
    },
    changeState() {
      //导航栏的折叠和收缩
      this[CHANGASIDENAVCOLLAPSESTATUS](!this.isCollapse)
    },
    selectEvent(index, indexPath) {
      //选中 导航时触发
      // console.log(index, indexPath, "选择的下标和下标路径");
      this[CHANGINDEXPATH](indexPath.pop())
    },
  },
}
</script>

<style scoped>
</style>