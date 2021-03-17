<template>
  <div class="addRole">
    <el-row>
      <el-col :span="8">
        <el-form
          ref="form"
          :model="menuOptions.form"
          label-width="110px"
          :rules="menuOptions.rules"
        >
          <el-form-item label="上级菜单" prop="pId">
            <treeselect
              :searchable="false"
              v-model="menuOptions.form.pId"
              :options="menuDropDownList"
              :normalizer="customKeyName"
              placeholder="请选择上级菜单"
              @select="handlerSelect"
              clearable
            />
          </el-form-item>
          <el-form-item label="菜单名称" prop="menuName">
            <el-input
              placeholder="请输入菜单名称"
              v-model="menuOptions.form.menuName"
              clearable
              maxlength="10"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单地址" prop="menuURL">
            <el-input placeholder="格式：/System/Menu" v-model="menuOptions.form.menuURL" clearable></el-input>
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
            <el-form-item label="icon图标" prop="iconURL">
              <el-input placeholder="格式：iconshouye" v-model="menuOptions.form.iconURL" clearable></el-input>
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="unicode图标">
              <el-input
                placeholder="格式：&unnicodeag;"
                v-model="menuOptions.form.unicodURL"
                clearable
              ></el-input>
            </el-form-item>
          </template>
          <el-form-item label="是否启用" prop="menuStatus">
            <el-switch v-model="menuOptions.form.menuStatus" :active-value="1" :inactive-value="0"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="createClickBtn('form')">{{menuOptions.successBtn}}</el-button>
            <el-button type="warning" @click="cancelClickBtn">取消</el-button>
            <el-button type="warning" @click="resetClickBtn('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  components: { Treeselect },
  data() {
    return {
      menuOptions: {
        form: {
          pId: null,
          menuName: null,
          menuURL: null,
          iconType: 1,
          iconURL: null,
          unicodURL: null,
          menuStatus: 1,
        },
        successBtn: '创建',
        rules: {
          pId: [this.$rul.requiredSelect()],
          menuName: [this.$rul.requiredSelect()],
          menuURL: [this.$rul.requiredSelect()],
        },
      },
      formCopy: null, //表单备份
      menuDropDownList: [
        {
          id: '0',
          menuName: '顶级菜单',
          children: [],
        },
      ],
      customKeyName(node) {
        // 自定义treeSelect的键名
        return {
          id: node.id,
          label: node.menuName,
          children: node.children,
        }
      },
    }
  },
  created() {
    this.getMenuDropDownList()
    this.getMenuDetail()
  },
  methods: {
    //initData
    initData() {},
    //请求编辑导航详情
    async getMenuDetail() {
      const id = this.$route.params.id
      console.log(id)
      if (!id) return
      let { result } = await this.$api.getMenuDetail({ id })
      console.log(result, 'result-----------')
      this.menuOptions.form = result[0]
      this.menuOptions.successBtn = '修改'
      this.formCopy = JSON.stringify(result[0])
    },
    //点击选中后重新校验规则
    handlerSelect(node, instanceId) {
      console.log(this.menuOptions.form, this.$refs['form'])
      this.$nextTick(() => {
        this.$refs['form'].validateField('pId')
      })
    },
    //获取 menu 下拉框列表
    async getMenuDropDownList() {
      try {
        let res = await this.$api.getMenuDropDownList()
        console.log(res, 'res-----')
        if (res.err_code == 200) {
          this.menuDropDownList[0].children.push(...res.result)
          // this.menuDropDownList.push(...res.result)
        }

        // if(res.err_code =)
      } catch (err) {}
    },
    //重置表单
    resetClickBtn(formName) {
      if (this.$route.params.id) {
        this.menuOptions.form = JSON.parse(this.formCopy)
      } else {
        this.$nextTick(() => {
          this.$refs[formName].resetFields()
        })
      }
    },
    //确认创建
    createClickBtn(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let result
          if (this.$route.params.id) {
            result = await this.$api.saveMenu(this.menuOptions.form)
          } else {
            result = await this.$api.saveMenu(this.menuOptions.form)
          }
          try {
            if (result.err_code == 200) {
              console.log(result, 'tian jia cheng gong !')
            }
          } catch (err) {}
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //取消创建 返回上一层
    cancelClickBtn() {
      this.$msg.configMessage('确定取消操作吗？', () => {
        this.$router.go(-1)
      })
    },
  },
}
</script>

<style scoped>
</style>