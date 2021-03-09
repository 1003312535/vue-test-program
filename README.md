<template>
  <div class="index">
    <div class="body">
      <el-row>
        <el-col :span="6">
          <el-card>
            <div slot="header">隐藏滚动条</div>
            <div>#asideNav .el-menu::-webkit-scrollbar { display: none; }</div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header">router路由重复点击问题:</div>
            <div>
              const originalPush = VueRouter.prototype.push
              VueRouter.prototype.push = function push(location) { return
              originalPush.call(this, location).catch(err => err) } }
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header">ocr识别身份证</div>
            <div></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header">获取到文件展示图片</div>
            <div>this.imageUrl = URL.createObjectURL(file.raw);</div>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-card>
            <div slot="header">给table 除了标题的某列添加样式</div>
            <div>
              class-name="cccc" /deep/ .cccc:not([class*="is-leaf"]){
              border-left: 1px solid #E5E5E5; }
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header">router路由重复点击问题:</div>
            <div>
              const originalPush = VueRouter.prototype.push
              VueRouter.prototype.push = function push(location) { return
              originalPush.call(this, location).catch(err => err) } }
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header">swiper autoplay 无效</div>
            <div>
              import { Swiper, SwiperSlide, directive } from
              "vue-awesome-swiper"; import "swiper/swiper-bundle.css"; import
              Swiper2, { Navigation, Pagination, Autoplay } from "swiper";
              Swiper2.use([Navigation, Pagination, Autoplay]);
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <div slot="header">table表格导入导出</div>
            <div></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>








<style>
</style>










<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      id="out-table"
      :border="true"
      :header-cell-style="setHeaderStyle"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" >
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--给按钮绑定事件-->
    <button @click="exportExcel">点击导出</button>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
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
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    setHeaderStyle({ row, column, rowIndex, columnIndex }) {
      console.log(columnIndex, "rowIndex------");
      // if (columnIndex == 1 && rowIndex == 0) {
      //   return { display: "none" };
      // }
    },
    //定义导出Excel表格事件
    exportExcel() {
      /* 从表生成工作簿对象 */
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      console.log(wb, "wb----------------");
      /* 获取二进制字符串作为输出 */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      console.log(wbout, "wbout----------");
      return;
      try {
        FileSaver.saveAs(
          //Blob 对象表示一个不可变、原始数据的类文件对象。
          //Blob 表示的不一定是JavaScript原生格式的数据。
          //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
          //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
          new Blob([wbout], { type: "application/octet-stream" }),
          //设置导出文件名称
          "sheetjs.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
  },
};
</script>







<template>
  <div>
    <my-table 
    :data="[{label1: 'ren',prop1: '一行二列',prop2: '一行四列',prop3: '二行二列'},{label1: 'ren',prop1: 'index33',prop2: 'ning3'},{label1: 'ren',prop1: 'index33',prop2: 'ning3',prop3: 'xiao',prop4: 'lalal  '}]" 
    title="列表" 
    :border="true"
    >
     <template slot-scope="aa">
        <table-item 
        label1="一行一列" 
        prop1="prop1" 
        label2="一行三列" 
        prop2="prop1"
        :item1="aa.item1"
        ></table-item>
        <table-item 
        label1="二行一列" 
        prop1="prop3"
        label2="二行三列"
        prop2="prop4"
        :item1="aa.item1"
        ></table-item>
        <table-item 
        label1="三行一列" 
        prop1="prop3"
        :bbb="true"
        :item1="aa.item1"
        ></table-item>
        <table-item 
        label1="四行一列" 
        prop1="prop3"
        :bbb="true"
        :item1="aa.item1"
        ></table-item>
        <table-item 
        label1="一行一列" 
        prop1="prop1" 
        label2="一行三列" 
        prop2="prop1"
        :item1="aa.item1"
        ></table-item>
     </template>
    </my-table><my-table 
    :data="[{label1: 'ren',prop1: '一行二列',prop2: '一行四列',prop3: '二行二列'}]" 
    title="添加成员信息" 
    :border="true"
    >
     <template slot-scope="aa">
        <table-item 
        label1="一行一列" 
        prop1="prop1" 
        label2="一行三列" 
        prop2="prop1"
        :item1="aa.item1"
        >
        <template slot="label1"></template>
        <template slot="prop1">
          <input type="text" placeholder="hhhhhhh-">
        </template>
        <template slot="label2"></template>
        <template slot="prop2">
          <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
        </template>
        </table-item>
     </template>
    </my-table>
    
  </div>
</template>

<script>
import myTable from "@/components/table/table";
import tableItem from "@/components/table/children/table-item";
export default {
  components: { myTable, tableItem },
};
</script>

<style scoped>
</style>



<template>
  <div>
    <el-table
      :data="rewardData"
      border
      :span-method="rewardSpanMethod"
      :header-cell-style="rewardHeaderStyle"
      stripe
    >
      <el-table-column label="种类" header-align="center">
        <el-table-column
          label="hideHeader1"
          prop="hide1"
        ></el-table-column>
        <el-table-column
          label="hideHeader2"
          prop="hide2"
        ></el-table-column>
      </el-table-column>
      <el-table-column
        prop="name"
        width="190px"
        label="奖励名称"
        align="center"
        header-align="center"
      ></el-table-column>
      <el-table-column
        prop="grandMoney"
        label="一等奖"
        align="center"
        header-align="center"
      ></el-table-column>
      <el-table-column
        prop="patentGoldMoney"
        label="二等奖"
        align="center"
        header-align="center"
      ></el-table-column>
      <el-table-column
        width="140px"
        label="备注"
        align="center"
        header-align="center"
        prop="govermentRemark"
      ></el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rewardData: [
        {
          hide1: "短篇小说",
          hide2: "长篇小说",
          name: "西游记",
          grandMoney: 100,
          patentGoldMoney: 80,
          govermentRemark:
            "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈全是我的哈哈哈哈",
        },
        
        {
          name: "红楼梦",
          grandMoney: 100,
          patentGoldMoney: 80,
        },
        {
          name: "水浒传",
          grandMoney: 100,
          patentGoldMoney: 80,
        },
        {
          name: "三国演义",
          grandMoney: 100,
          patentGoldMoney: 80,
        },
        {
          name: "如果世上没有猫",
          grandMoney: 100,
          patentGoldMoney: 80,
        },
        {
          name: "第七天",
          grandMoney: 100,
          patentGoldMoney: 80,
        },
      ],
    };
  },
  methods: {
    rewardSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex == 0 || columnIndex == 1 || columnIndex == 5 || columnIndex == 6) {
        if (rowIndex == 0) {
          return [6, 1];
        } else {
          return [0, 0];
        }
      }
    },
    rewardHeaderStyle({ rowIndex, columnIndex }) {
      // if (rowIndex == 1) {
      //   if (columnIndex == 0 || columnIndex == 1) {
      //     return { display: "none" };
      //   }
      // }
    },
  },
};
</script>

<style>
</style>