<template>
  <div class="addMenu">
    <el-row>
      <el-col :span="8">
        <el-form ref="form" :model="menuOptions.form" label-width="110px" :rules="menuOptions.rules">
          <el-form-item label="菜单等级配置" prop="region">
            <el-select
              v-model="menuOptions.form.region"
              placeholder="请选择菜单等级"
              clearable
              style="width: 100%"
            >
              <el-option label="一级菜单" value="1"></el-option>
              <el-option label="二级菜单" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜单名称" prop="menuName">
            <el-input
              placeholder="请输入菜单名称"
              v-model="menuOptions.form.menuName"
              clearable=""
              maxlength="10"
              show-word-limit
            >
            </el-input>
          </el-form-item>
          <el-form-item label="菜单地址">
            <el-input placeholder="格式：/System/Menu" v-model="menuOptions.form.address" clearable></el-input>
          </el-form-item>
          <el-form-item label="图标类型">
            <el-switch
              v-model="menuOptions.form.iconType"
              :active-value="1"
              :inactive-value="0"
              :disabled="true"
            ></el-switch>
          </el-form-item>
          <template v-if="menuOptions.form.iconType == 1">
            <el-form-item label="icon图标" >
              <el-input placeholder="格式：iconshouye" v-model="menuOptions.form.iconURL" clearable></el-input>
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="unicode图标">
              <el-input placeholder="格式：&unnicodeag;" v-model="menuOptions.form.uniURL" clearable></el-input>
            </el-form-item>
          </template>
          <el-form-item>
            <el-button type="primary" @click="createClickBtn('form')">创建</el-button>
            <el-button type="warning" @click="cancelClickBtn">取消</el-button>
            <el-button type="warning" @click="resetClickBtn('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOptions: {
        form: {
          region: null,
          iconType: 1,
        },
        rules: {
          region: [this.$rul.requiredSelect()],
          menuName: [this.$rul.requiredSelect()],
        },
      },
    };
  },
  created() {
    this.$api.getmenuList().then(res => {
      console.log(res)
    })
  },
  methods: {
    //重置表单
    resetClickBtn(formName) {
      this.$refs[formName].resetFields();
    },
    //确认创建
    createClickBtn(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //取消创建 返回上一层
    cancelClickBtn() {
      this.$msg.configMessage("确定取消操作吗？", () => {
        this.$router.go(-1);
      });
    },
  },
};
</script>

<style scoped>
</style>