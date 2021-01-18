<template>
  <div>
    <el-row>
      <!-- input 联想表格 -->
      <el-col :span="6">
        <el-card>
          <div class="header">激活即列出输入建议</div>
          <el-autocomplete
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          >
          </el-autocomplete>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header">el-select下拉框和table(伪)结合样式</div>
          <my-select
            v-model="selectValue"
            :arrData="testData"
            :options="[
              { name: 'Id', value: 'id' },
              { name: '名称', value: 'name' },
            ]"
          ></my-select>
          <span>绑定的数据：{{ selectValue }}</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row v-if="false">
      <el-col :span="4">
        <el-form ref="form" :model="form">
          <el-form-item label="input联想表格">
            <el-input v-model="form.name" @input="inputEvent"></el-input>
            <el-table
              :data="restaurants"
              class=""
              :row-class-name="setRowClass"
            >
              <!--  v-if="currentArr.length > 0"   :data="currentArr"-->
              <el-table-column prop="value" label="姓名"></el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MySelect from "@/components/select/my-select.vue";
export default {
  components: {
    MySelect,
  },
  data() {
    return {
      form: {
        name: "",
      },
      selectValue: "",
      restaurants: [],
      currentArr: [],
      state1: "",
      state2: "",
      testData: [
        {
          id: 72,
          companyid: 7,
          type: "特特效药",
          name: "格格",
          standard: "21",
          productcode: "1234354",
          mnemoniccode: "32143",
          manufacturer: "撒现场",
          model: "12",
          approvalnumber: "124543",
          dosage: "12",
          unitname: "包",
          saleprice: 12.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2021-01-12 14:32:54",
          modifyUserId: null,
          modifyUserName: null,
          modifyTime: null,
          typeid: 67,
        },
        {
          id: 70,
          companyid: 7,
          type: "特特效药",
          name: "暗时",
          standard: "12",
          productcode: "12",
          mnemoniccode: "13254",
          manufacturer: "按市场",
          model: "12",
          approvalnumber: "122356454",
          dosage: "一天一次，一次一片",
          unitname: "包",
          saleprice: 12.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2021-01-12 14:24:44",
          modifyUserId: 15,
          modifyUserName: "qqq",
          modifyTime: "2021-01-13 10:20:31",
          typeid: 67,
        },
        {
          id: 50,
          companyid: 7,
          type: "221",
          name: "喜之郎",
          standard: "大",
          productcode: "123",
          mnemoniccode: "123",
          manufacturer: "123",
          model: "123",
          approvalnumber: "123",
          dosage: "11",
          unitname: "瓶",
          saleprice: 10.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2021-01-12 13:44:32",
          modifyUserId: 15,
          modifyUserName: "qqq",
          modifyTime: "2021-01-12 14:08:56",
          typeid: 8,
        },
        {
          id: 36,
          companyid: 7,
          type: "特效药",
          name: "问大师",
          standard: "123",
          productcode: "213",
          mnemoniccode: "123",
          manufacturer: "暗示着v",
          model: "123",
          approvalnumber: "1233456",
          dosage: "12",
          unitname: "12",
          saleprice: 12.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2021-01-12 11:19:02",
          modifyUserId: 15,
          modifyUserName: "qqq",
          modifyTime: "2021-01-12 14:08:54",
          typeid: 66,
        },
        {
          id: 30,
          companyid: 7,
          type: "药品",
          name: "阿萨大",
          standard: "1/2",
          productcode: "123",
          mnemoniccode: "sazxcx",
          manufacturer: "阿萨大",
          model: "1",
          approvalnumber: "123",
          dosage: "123",
          unitname: "包",
          saleprice: 123.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2021-01-12 11:11:57",
          modifyUserId: 15,
          modifyUserName: "qqq",
          modifyTime: "2021-01-12 14:08:53",
          typeid: 65,
        },
        {
          id: 10,
          companyid: 7,
          type: "aaa",
          name: "猫鼬合计",
          standard: "瓶",
          productcode: "121213",
          mnemoniccode: "wqsad",
          manufacturer: "河南",
          model: "11",
          approvalnumber: "2124124",
          dosage: "一次一瓶",
          unitname: "瓶",
          saleprice: 12.22,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2020-12-29 10:09:22",
          modifyUserId: 15,
          modifyUserName: "qqq",
          modifyTime: "2021-01-12 14:08:51",
          typeid: 51,
        },
        {
          id: 7,
          companyid: 7,
          type: "222",
          name: "1wew1",
          standard: "e2e2e",
          productcode: "22",
          mnemoniccode: "2e",
          manufacturer: "2ee2e",
          model: "2ee2e",
          approvalnumber: "e2e2e",
          dosage: "e22",
          unitname: "e2e2",
          saleprice: 22.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2020-11-24 14:08:06",
          modifyUserId: 15,
          modifyUserName: "qqq",
          modifyTime: "2021-01-12 14:08:50",
          typeid: 21,
        },
        {
          id: 5,
          companyid: 7,
          type: "221",
          name: "无敌药剂",
          standard: "21",
          productcode: "1232",
          mnemoniccode: "e12",
          manufacturer: "北京市",
          model: "e2e",
          approvalnumber: "11w",
          dosage: "21e",
          unitname: "e21e",
          saleprice: 11.22,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: "qqq",
          createTime: "2020-11-24 14:05:45",
          modifyUserId: 15,
          modifyUserName: "qqq",
          modifyTime: "2021-01-12 14:08:48",
          typeid: 23,
        },
      ],
    };
  },
  methods: {
    //给表格 行设置不同的类名
    setRowClass({ row, rowIndex }) {
      console.log(row, rowIndex, "------");
      return "aaa" + rowIndex;
    },
    //inputEvent
    inputEvent(value) {
      console.log(value);
      let filterArr = this.restaurants.filter((item) => {
        return item.value.toLowerCase().indexOf(value.toLowerCase()) === 0;
      });
      this.currentArr = filterArr;
      console.log(this.currentArr);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "三旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号",
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号",
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层",
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺",
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819",
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306",
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元",
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺",
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6",
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号",
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号",
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室",
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部",
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室",
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号",
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位",
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼",
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
        },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style scoped>
.asd {
  background-color: red;
}
.aaa2 {
  color: yellow;
  background-color: black;
}
</style>