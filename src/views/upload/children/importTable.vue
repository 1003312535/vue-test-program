<template>
  <div class="exportTable">
    <el-upload
      action
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :http-request="requestActive"
      :disabled="uploadStatus"
    >
      <el-button size="small" type="success" :disabled="uploadStatus"
        >点击上传</el-button
      >
    </el-upload>
    <el-table :data="listTable" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import xlsx from "xlsx"; //引入xlsx
import { Loading } from 'element-ui';
import { delay } from '@/utils/util.js'
export default {
  data() {
    return {
      uploadStatus: false,
      listTable: [],
    };
  },
  methods: {
    //上传前校验
    beforeUpload(file) {
      console.log(file, "上传的文件------");
      //判断文件类型
      const extName = file.name.replace(/.*\./gi, "");
      const xlsList = ["xlsx", "xls"];
      const isxls = xlsList.includes(extName);

      //判断文件大小
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isxls) {
        this.$message.error("上传xlsx/xls格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isxls && isLt2M;
    },
    uploadSuccess(uploadFile) {
      //上传成功
    },
    //发送请求数据处理
    async requestActive(params) {
      console.log(params, "要处理的数据-----");
      const file = params.file; //获取上传的文件
      let loadingInstance1 = Loading.service({ fullscreen: true }); //element ui 中的函数式组件
      await delay(1000)
      //读取文件 转换成二进制数据
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      console.log(111)
      //文件转换完成后执行
      fileReader.onload = (ev) => {
        console.log(ev, "事件对象");
        const data = ev.target.result;//转换后的结果

        //转换成工作表
        const workbook = xlsx.read(data, {
          type: "binary",
        });
        console.log(workbook, "workBook将二进制数据转换成工作表-----");

        //循环读取每个页卡
        for (let sheet in workbook.Sheets) {

          //格式化处理每个也卡中的数据
          const sheetArray = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
          console.log(sheetArray, "格式化处理每个也卡中的数据-------");
          //若当前sheet没有数据，则continue
          if (sheetArray.length == 0) {
            continue;
          }
          console.log(sheetArray);

          for (let item in sheetArray) {
            let rowTable = {};
            //这里的rowTable的属性名注意要与上面表格的prop一致
            //sheetArray的属性名与上传的表格的列名一致
            rowTable.name = sheetArray[item].姓名;
            rowTable.date = sheetArray[item].日期;
            rowTable.address = sheetArray[item].地址;
            this.listTable.push(rowTable); //退送到list 中
          }
        }
      };
      loadingInstance1.close() //关闭函数式组件
      this.$message({
        message: '上传成功！',
        type: 'success'
      })
    },
  },
};
</script>

<style>
</style>