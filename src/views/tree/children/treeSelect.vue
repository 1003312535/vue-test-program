<template>
  <div id="HelloWorld">
    <el-row>
      <el-col :span="6">
        <el-card>
          <div slot="header">
            <div class="dec">vue-treeSelect校验问题：</div>
            <div class="dec">vue-treeSelect高度问题：</div>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            size="mini"
            :inline="true"
          >
            <el-form-item label="活动名称" prop="region">
              <treeselect
                v-model="ruleForm.region"
                :options="options"
                @input="inputChange"
                style="width: 180px"
              />
            </el-form-item>
            <hr />
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即创建</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  // register the component
  components: { Treeselect },
  methods: {
    //inputChange
    inputChange() {
      this.$refs["ruleForm"].validateField("region");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  data() {
    return {
      // define the default value

      // define options
      options: [
        {
          id: "a",
          label: "a",
          children: [
            {
              id: "aa",
              label: "aa",
            },
            {
              id: "ab",
              label: "ab",
            },
          ],
        },
        {
          id: "b",
          label: "b",
        },
        {
          id: "c",
          label: "c",
        },
      ],
      ruleForm: {
        value: null,
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "input" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
};
</script>

<style scoped>
/* .el-form-item {
  margin-bottom: 20px;
} */
/* 设置最外边的高度 */
/* .vue-treeselect {
  height: 28px;
} */
/* 设置输入框的高度 */
/* /deep/ .vue-treeselect__control {
  height: 28px !important;
} */
/* 设置placeholder 占位符的行高 和字体大小 */
/* /deep/ .vue-treeselect__placeholder,
.vue-treeselect__single-value {
  line-height: unset;
  font-size: 13px;
} */
/* .vue-treeselect__placeholder {
  line-height: 28px;
  font-size: 14px;
}
.vue-treeselect input {
  font-size: 16px;
} */
</style>