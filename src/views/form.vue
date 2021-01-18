<template>
  <div class="form">
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <!-- 表单 -->
            <el-form
              ref="form"
              :model="form"
              :rules="rules"
              label-width="80px"
              label-position="top"
              size="mini"
            >
              <el-row>
                <el-col :span="12">
                  <el-form-item label="活动名称" prop="baseInfo.username">
                    <el-input
                      v-model="form.baseInfo.username"
                      style="width: 200px"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="活动密码" prop="baseInfo.pasword">
                    <el-input
                      v-model="form.baseInfo.pasword"
                      style="width: 200px"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <div v-for="(item, index) in form.producte" :key="index">
                <el-divider content-position="left"></el-divider>
                <el-row>
                  <el-form-item
                    label="基本名称"
                    :prop="`producte[${index}].name`"
                    :rules="{
                      required: true,
                      message: '基本名称不能为空',
                      trigger: 'blur',
                    }"
                  >
                    <el-input
                      v-model="item.name"
                      style="width: 200px"
                    ></el-input>
                  </el-form-item>
                </el-row>
                <div v-for="(item1, index1) in item.rules" :key="index1">
                  <el-row>
                    <el-col :span="5">
                      <el-form-item
                        label="规格"
                        :prop="`producte[${index}].rules[${index1}].ruleName`"
                        :rules="{
                          required: true,
                          message: '域名不能为空',
                          trigger: 'blur',
                        }"
                      >
                        <el-input
                          v-model="item1.ruleName"
                          style="width: 100px"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-col :span="10">
                        <el-form-item
                          label="价格"
                          :prop="`producte[${index}].rules[${index1}].isFixed`"
                          :rules="{
                            required: true,
                            message: '价格不能为空',
                            trigger: 'change',
                          }"
                        >
                          <el-select
                            v-model="item1.isFixed"
                            placeholder="请选择"
                            @change="changeSelect"
                            clearable
                          >
                            <el-option
                              v-for="item2 in options"
                              :key="item2.value"
                              :label="item2.label"
                              :value="item2.value"
                            >
                            </el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="10">
                        <el-form-item
                          :prop="`producte[${index}].rules[${index1}].price`"
                          :rules="item1.isFixed == 1? {
                            required: true,
                            message: '价格不能为空',
                            trigger: 'blur',
                          }: {}"
                        >
                          <div style="height: 38px"></div>
                          <el-input v-model="item1.price">
                            <template slot="append">↑</template>
                          </el-input>
                        </el-form-item></el-col
                      >
                    </el-col>
                    <el-col :span="4">
                      <el-form-item
                        :prop="`producte[${index}].rules[${index1}].other`"
                        :rules="{
                          required: true,
                          message: '其他不能为空',
                          trigger: 'blur',
                        }"
                      >
                        <div style="height: 38px"></div>
                        <el-input v-model="item1.other">
                          <template slot="append">↑</template>
                        </el-input>
                      </el-form-item></el-col
                    >
                    <el-col :span="5">
                      <div style="height: 38px"></div>
                      <el-button
                        type="warning"
                        size="mini"
                        @click="addRule(index, index1)"
                        v-if="index1 == 0"
                        >添加规则</el-button
                      >
                      <el-button
                        type="warning"
                        size="mini"
                        @click="deleteRule(index, index1)"
                        v-else
                        >删除规则</el-button
                      >
                    </el-col>
                  </el-row>
                </div>
                <el-row>
                  <el-button
                    size="mini"
                    @click="createTable(index)"
                    v-if="index == form.producte.length - 1"
                    >创建新表</el-button
                  >
                  <el-button size="mini" @click="deleteTable(index)" v-else
                    >删除表</el-button
                  >
                </el-row>
                <el-divider content-position="left"></el-divider>
              </div>
              <el-form-item>
                <el-button type="primary" @click="submitForm('form')"
                  >立即创建</el-button
                >
                <el-button @click="resetForm('form')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: 1,
          label: "固定",
        },
        {
          value: 0,
          label: "非固定",
        },
      ],
      value: "",
      form: {
        baseInfo: {
          username: "",
          pasword: "",
        },
        producte: [
          {
            name: "",
            rules: [
              {
                ruleName: null,
                isFixed: null,
                price: null,
                other: null,
              },
            ],
          },
        ],
      },
      rules: {
        "baseInfo.username": [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
        "baseInfo.pasword": [
          { required: true, message: "请选择活动区域", trigger: "blur" },
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
  methods: {
    //选中select改变 函数
    changeSelect(value) {
      console.log(value)
    },
    //删除规则
    deleteRule(index, index1) {
      this.form.producte[index].rules.splice(index1, 1);
    },
    //添加规则
    addRule(index, index1) {
      console.log(index, index1);
      let producteItem = {
        name: "",
        ruleName: null,
        isFixed: null,
        price: null,
        other: null,
      };
      this.form.producte[index]["rules"].push(producteItem);
    },

    //创建新表
    createTable(index) {
      let newTable = {
        name: "",
        rules: [
          {
            ruleName: null,
            isFixed: null,
            price: null,
            other: null,
          },
        ],
      };
      this.form.producte.push(newTable);
    },
    //删除信表
    deleteTable(index) {
      this.form.producte.splice(index, 1);
    },
    //提交表单验证
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
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
</style>