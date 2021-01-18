/*<my-select
    v-model="changeForm.productname" //双向绑定的数据 (必传)
    :arrData="cpNameOptions" //值 (下拉列表数据)(内部会自动筛选) (非必传)
    :defalutValue="{label: 'name',value: 'name'}" //默认绑定的value 和lable (非必传)
    @change="changeEvent" //选中发生改变时触发的事件 (参数：选中的值)
    :options="[{name: '产品名称', value: 'name'},{name: '规格', value: 'standard'},{name: '包装单位', value: 'unitname'}]"//表头name名称 和body 展示的数据value属性 (必传)
    :getData="querynameSearch  //异步请求：从服务器上拉下来的数据函数，该函数返回promise对象 （arrData属性 和 getData 必填一个）
            如：querynameSearch(queryString) {
                    // console.log(queryString,"模糊姓名查询-------------");
                    let companyid = sessionStorage.getItem("companyid");
                    let params = {
                        key: queryString,
                    };
                    return this.$api.friendincompanylist(params, companyid)
                }
    @click="参数为对象item" //点击选中的对象
    setstyle="span 的类名" 如： :setstyle="{'min-width': '160px'}" //单元格的样式
    ></my-select>
*/
<template>
<!-- <el-form-item label="产品名称:" prop="selectValue" :rules="{required: true,
                      message: '基本名称不能为空1',
                      trigger: 'change'}"> -->
  <el-select
    v-bind="$attrs"
    :value="selectValue"
    @input="inputEvent"
    style="width: 180px"
    clearable
    filterable
    remote
    :remote-method="remoteMethod"
    @visible-change="focusEvent1"
    @change="handleSelect"
  >
    <!-- @change="handleSelect" -->
    <el-option class="asdasd" :disabled="true" value="" label="">
      <div>
        <span :style="setstyle">序号</span>
        <span :style="setstyle" v-for="(item, index) in options" :key="item.name+index+Math.random()">{{ item.name }}</span>
      </div>
    </el-option>

    <el-option
      v-show="filterArr.length != 0"
      v-for="(item, index) in filterArr || this.arrData"
      :key="item.id+ Math.random()"
      class="asdasd"
      :label="item[defalutValue.label]"
      :value="item[defalutValue.value]"
      
    >
    <div @click="clickOption(item)">
      <span :style="setstyle">{{ index + 1 }}</span>
      <span :style="setstyle" v-for="(item1,index1) in options" :key="index1 + item[item1.value]+ Math.random()">{{ item[item1.value] }}</span>
    </div>
    </el-option>
    <el-option
      v-show="filterArr.length == 0"
      value=""
      label=""
      style="text-align: center; border-top: 1px solid black; margin: 0 6px"
      :disabled="true"
    >
      <div>
        <span :style="setstyle">您收索暂无数据</span>
      </div>
    </el-option>
  </el-select>
  <!-- </el-form-item> -->
</template>

<script>
export default {
  mounted() {
    this.filterArr = JSON.parse(JSON.stringify(this.arrData));
    this.selectValue = this.value? JSON.parse(JSON.stringify(this.value)): null;
  },
  data() {
    return {
      selectValue: "", //选中的值
      filterArr: [], //过滤后的数组
    };
  },
  watch: {
      value: {
          handler(newvalue,oldvalue) {//监听 父级绑定的 v-model 变化
                  this.selectValue = this.value
          },
          deep: true
      }
    // filterArr: {
    //   handler(oldvalue, newvalue) {
    //     console.log(oldvalue,newvalue,111)
    //   },
    //   deep: true
    // }
  },
  props: {
    value: {
        default: null
    },
    setstyle:{
        type: Object,
        default() {
            return {}
        }
    },
    defalutValue: {
      //默认展示数据的value 和 label值
      type: Object,
      default() {
        return {
          value: "id",
          label: "name",
        };
      },
    },
    arrData: {
      //查询到的数组
      type: Array,
      default() {
        return [];
      },
    },
    options: {
      type: Array,
      request: true,
    },
    getData: {
        type: Function,
        default: null
    }
  },
  methods: {
    //点击下拉框事件clickOption
    clickOption(item) {
        // console.log(item,'点击下拉框事件clickOption')
        this.$emit('click',item)
    },
    //$emit('input', $event) 
    inputEvent(value) {
    //   console.log(value, "inputEvent-----------");
      this.selectValue = value;//value 为选中的值
      this.$emit("input", value);
    },
    // handleSelect 当选中状态改变时触发
    handleSelect($event) {
        // console.log('Select事件触发--',$event)
      this.$emit('change',$event)//$event 为选中的值
    },
    //下拉框显示隐藏时触发
    async focusEvent1(flag) {
      // console.log(flag, "下拉框显示隐藏时触发--");
      if (flag) {
        if(this.getData) {//当请求数据函数存在时触发
          let {result} = await this.getData('')
        //   console.log(result, 'result=-------')
          this.filterArr = result
          return;
        }
        this.filterArr = this.arrData; //重置过滤后的数组
      }
    },
    //模糊查询方法
    async remoteMethod(query) {
    //   console.log( query,"query-----",);
      if(this.getData) {//当请求数据函数存在时触发
          let {result} = await this.getData(query)
        //   console.log(result, 'result=-------')
          this.filterArr = result
          return;
      }
      if (query != "") {
        //如果输入不为空
        this.filterArr = this.arrData.filter((item) => {
          return (
            item[this.defalutValue.label]
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else {
        //如果输入为空
        this.filterArr = this.arrData;
      }
    },
  },
};
</script>

<style >
.asdasd {
  white-space: nowrap;
  width: unset;
  border-right: 1px solid black;
  border-top: 1px solid black;
  padding: 0;
  margin: 0 6px;
}
/* .asdasd:first-child{
  border-right: 1px solid black;
} */
.asdasd:nth-last-child(2){
  border-bottom: 1px solid black;
}
.asdasd div {
    width: 100%;
    display: flex;
}
.asdasd div span {
  min-width: 120px;
  padding-left: 10px;
  overflow-x:hidden;
  text-overflow: ellipsis;
  /* border-right: 1px solid black; */
  border-left: 1px solid black;
  border-collapse: separate;
}
.asdasd:last-of-type {
  border-bottom: 1px solid black;
  width: 60px;
}
.asdasd div:first-of-type span {
  width: 60px;
}
</style>