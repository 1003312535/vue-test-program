<template>
  <div>
    <table class="table-wrap" :border="border ? 1 : 0" cellspacing="0">
      <tr class="table-header" v-if="title">
        <td class="table-title" colspan="4" :style="{}">{{ title }}</td>
      </tr>
      <!-- 判断是否存在数据 -->
      <template v-if="isData">
        <!-- 判断数据长度是否大于一 -->
        <template v-if="data.length > 1">
          <!-- 循环渲染数据 -->
          <template v-for="(item, index) in data">
            <slot :item1="item" :idx="index"></slot> 
            <!-- 追加数据与数据之间的空行，判断最后一条数据后的空行不显示 -->
            <tr class="table-header" v-if="data.length - 1 != index" :key="index">
              <td class="table-title" colspan="4">{{othertext || '&nbsp;'}}</td>
            </tr>
          </template>
        </template>
        <!-- 判断只有一条数据 -->
        <template v-else>
          <slot :item1="data[0]"></slot>
        </template>
      </template>
      <!-- 不存在数据就默认显示 数据为空 -->
      <template v-else>
        <tr class="table-header" v-if="title">
          <td class="table-title" colspan="4">{{ emptytext }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import tableItem from "./children/table-item";
export default {
  components: { tableItem },
  props: {
    title: { type: String, default: "" }, //表格标题
    data: {type: Array,default() {return [];}}, //表格数据
    border: { type: Boolean, default: true },
    emptytext: { type: String, default: "暂无数据" },
    othertext: {type: String, default: '1'}
  },
  computed: {
    isData() {
      return this.data.length == 0 ? false : true;
    },
  },
};
</script>

<style scoped>
.table-wrap {
  width: 100%;
}
/* tr:not([class*="table-header"]):hover{
  background-color: #aaa;
} */
.table-title {
  line-height: 60px;
  background-color: #fff;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
}
</style>