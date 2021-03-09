<template v-if="condition">
  <tr class="row" >
    <td class="group group1"  :colspan= "bbb? 3: 0">
      <div class="item">
        <div class="label1"  :style="{width: lablewidth}"><slot name="label1">{{label1}}</slot></div>
        <div class="content1"><slot name="prop1">{{item1[prop1]}}</slot></div>
      </div>
    </td>
    <td class="group group2" v-if="!bbb">
      <div class="item">
        <div class="label1" style="border-right: 1px solid black" :style="{width: lablewidth}"><slot name="label2">{{label2}}</slot></div>
        <div class="content1">
          <slot name="prop2">{{item1[prop2]}}</slot>
          </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    label1: {type: String, default: ''},
    prop1: {type: String, default: ''},
    label2: {type: String, default: ''},
    prop2: {type: String, default: ''},
    item1: {type: Object, default() {return {}}},
    bbb: {type: Boolean, defalult: false},
    lablewidth: {type:String, default: '180px'}
  },
  mounted() {
    console.log(this.label1, this.prop1, this.item1,this.item1.prop1)
    
  }
};
</script>

<style scoped >
.group > div {
  display: flex;
}
.group > .item  div:nth-child(2) {
  flex: 1;
} 
.group > .item .label1 {
  border-right: 1px solid black;
  padding: 0
}
.item:hover {
  background-color: #F5F7FA;
}
.row {
  padding: 6px 0;
  /* height: 60px; */
  line-height: 60px;
}
.row > td {
  box-sizing: border-box;
  width: 50%;
}
</style>