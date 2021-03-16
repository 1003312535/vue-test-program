<template>
  <div>
    <el-row>
      <!-- input 联想表格 -->
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
  </div>
</template>

<script>
import MySelect from '@/components/select/my-select.vue'
export default {
  components: {
    MySelect,
  },
  data() {
    return {
      selectValue: '',
      testData: [
        {
          id: 72,
          companyid: 7,
          type: '特特效药',
          name: '格格',
          standard: '21',
          productcode: '1234354',
          mnemoniccode: '32143',
          manufacturer: '撒现场',
          model: '12',
          approvalnumber: '124543',
          dosage: '12',
          unitname: '包',
          saleprice: 12.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2021-01-12 14:32:54',
          modifyUserId: null,
          modifyUserName: null,
          modifyTime: null,
          typeid: 67,
        },
        {
          id: 70,
          companyid: 7,
          type: '特特效药',
          name: '暗时',
          standard: '12',
          productcode: '12',
          mnemoniccode: '13254',
          manufacturer: '按市场',
          model: '12',
          approvalnumber: '122356454',
          dosage: '一天一次，一次一片',
          unitname: '包',
          saleprice: 12.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2021-01-12 14:24:44',
          modifyUserId: 15,
          modifyUserName: 'qqq',
          modifyTime: '2021-01-13 10:20:31',
          typeid: 67,
        },
        {
          id: 50,
          companyid: 7,
          type: '221',
          name: '喜之郎',
          standard: '大',
          productcode: '123',
          mnemoniccode: '123',
          manufacturer: '123',
          model: '123',
          approvalnumber: '123',
          dosage: '11',
          unitname: '瓶',
          saleprice: 10.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2021-01-12 13:44:32',
          modifyUserId: 15,
          modifyUserName: 'qqq',
          modifyTime: '2021-01-12 14:08:56',
          typeid: 8,
        },
        {
          id: 36,
          companyid: 7,
          type: '特效药',
          name: '问大师',
          standard: '123',
          productcode: '213',
          mnemoniccode: '123',
          manufacturer: '暗示着v',
          model: '123',
          approvalnumber: '1233456',
          dosage: '12',
          unitname: '12',
          saleprice: 12.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2021-01-12 11:19:02',
          modifyUserId: 15,
          modifyUserName: 'qqq',
          modifyTime: '2021-01-12 14:08:54',
          typeid: 66,
        },
        {
          id: 30,
          companyid: 7,
          type: '药品',
          name: '阿萨大',
          standard: '1/2',
          productcode: '123',
          mnemoniccode: 'sazxcx',
          manufacturer: '阿萨大',
          model: '1',
          approvalnumber: '123',
          dosage: '123',
          unitname: '包',
          saleprice: 123.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2021-01-12 11:11:57',
          modifyUserId: 15,
          modifyUserName: 'qqq',
          modifyTime: '2021-01-12 14:08:53',
          typeid: 65,
        },
        {
          id: 10,
          companyid: 7,
          type: 'aaa',
          name: '猫鼬合计',
          standard: '瓶',
          productcode: '121213',
          mnemoniccode: 'wqsad',
          manufacturer: '河南',
          model: '11',
          approvalnumber: '2124124',
          dosage: '一次一瓶',
          unitname: '瓶',
          saleprice: 12.22,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2020-12-29 10:09:22',
          modifyUserId: 15,
          modifyUserName: 'qqq',
          modifyTime: '2021-01-12 14:08:51',
          typeid: 51,
        },
        {
          id: 7,
          companyid: 7,
          type: '222',
          name: '1wew1',
          standard: 'e2e2e',
          productcode: '22',
          mnemoniccode: '2e',
          manufacturer: '2ee2e',
          model: '2ee2e',
          approvalnumber: 'e2e2e',
          dosage: 'e22',
          unitname: 'e2e2',
          saleprice: 22.0,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2020-11-24 14:08:06',
          modifyUserId: 15,
          modifyUserName: 'qqq',
          modifyTime: '2021-01-12 14:08:50',
          typeid: 21,
        },
        {
          id: 5,
          companyid: 7,
          type: '221',
          name: '无敌药剂',
          standard: '21',
          productcode: '1232',
          mnemoniccode: 'e12',
          manufacturer: '北京市',
          model: 'e2e',
          approvalnumber: '11w',
          dosage: '21e',
          unitname: 'e21e',
          saleprice: 11.22,
          state: 1,
          isdelete: 0,
          createUserId: 15,
          createUserName: 'qqq',
          createTime: '2020-11-24 14:05:45',
          modifyUserId: 15,
          modifyUserName: 'qqq',
          modifyTime: '2021-01-12 14:08:48',
          typeid: 23,
        },
      ],
    }
  },
}
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