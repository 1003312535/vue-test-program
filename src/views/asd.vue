<template>
  <div>
    <el-autocomplete
      v-model="keywords.name"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    >
      <template v-slot="{ item }">
        <!-- <span>{{ item.name }}</span> -->
        
      </template>
    </el-autocomplete>
    <!-- <el-table
          tooltip-effect="dark"
          style="width: 100%"
          size="mini"
          empty-text="阿松大"
        >
          <el-table-column prop="item.id" :label="item.id"> </el-table-column>
          <el-table-column prop="item.name" :label="item.name"> </el-table-column>
        </el-table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: {
        name: '',
        value: ''
      },
      list: [
        {
          name: "张三",
          id: "1",
          value: "张三",
        },
        {
          name: "李四",
          id: "2",
          value: "李四",
        },
        {
          name: "张三",
          id: "4",
          value: "张三",
        },
        {
          name: "李四",
          id: "3",
          value: "李四",
        },
      ],
    };
  },

  methods: {
    querySearchAsync(queryString, cb) {
      let result = this.list.filter((item) => {
        if (item.name.indexOf(queryString) > -1) {
          return true;
        }
      });

      cb(result);
    },

    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style scoped>
</style>