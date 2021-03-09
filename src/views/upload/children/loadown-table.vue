
<template>
  <div class="wrap">
    <!-- <othee>
      <template slot="title">我啊啊啊</template>
      <otheeRow>
        <cell label="姓名"> 王某某 </cell>
        <cell label="身份证号"> 134123197603022345 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="性别" :request="true"> 女 </cell>
        <cell label="手机号"> 18222123123 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="民族"> 汉 </cell>
        <cell label="政治面貌"> 党员 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="学历"> 本科 </cell>
        <cell label="学位"> 学士学位 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="工作党委"> 北京某某技术有限公司 </cell>
        <cell label="职务"> 项目经理 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="户口所在地"> 北京市西城区西绒线胡同甲133号 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="现居住地"> 北京市西城区西绒线胡同甲133号 </cell>
      </otheeRow>
    </othee> -->
    <!-- 工会信息详情 -->
    <othee>
      <othee-row-title>企业基本信息</othee-row-title>
      <otheeRow>
        <cell label="企业名称"> 北京某某公司 </cell>
        <cell label="上级企业"> 航空工业集团总部 </cell>
      </otheeRow>
      <othee-row-title>工会基本信息</othee-row-title>
      <otheeRow>
        <cell label="单位工会名称"> 某某工会 </cell>
        <cell label="建会日期"> 2019-12-23 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="上级工会名称"> 一级工会AAA </cell>
        <cell label="工会类型"> 工会委员会 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="职工数"> 3000 人 </cell>
        <cell label="会员数">
          2980 人（已导入 <span style="color: blue">2900</span> 人）
        </cell>
      </otheeRow>
      <otheeRow>
        <cell label="女职工数"> 1967 人 </cell>
        <cell label="女职工会员数"> 1960 人 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="企业名称"> 北京某某公司 </cell>
        <cell label="上级企业"> 航空工业集团总部 </cell>
      </otheeRow>
    </othee>

    <div style="margin-top: 20px"></div>

    <!-- 工会委员会干部详细信息 -->
    <othee>
      <othee-row-title>工会基本信息</othee-row-title>
      <otheeRow>
        <cell label="单位名称"> 北京某某信息技术有限公司 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="单位工会名称"> 某某工会 </cell>
        <cell label="建会日期"> 2020-07-28 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="上级工会名称"> 一级工会AAA </cell>
        <cell label="工会类型"> 工会委员会 </cell>
      </otheeRow>
      <othee-row-title>工会干部</othee-row-title>
      <otheeRow>
        <cell label="工会职务"> 工会主席 </cell>
        <cell label="姓名"> 李某某 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="手机号"> 18723232323 </cell>
        <cell label="性别"> 男 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="专兼职"> 专职 </cell>
        <cell label="开始任职时间"> 2020-01-03 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="行政职务"> 行政部经理 </cell>
        <cell label="学历"> 本科（学士学位） </cell>
      </otheeRow>
      <otheeRow>
        <cell label="出生年月"> 1985-04-02 </cell>
        <cell label="工会委员得票数"> 3908 票 </cell>
      </otheeRow>
      <othee-row-title :blank="true"></othee-row-title>
      <otheeRow>
        <cell label="工会职务"> 工会主席 </cell>
        <cell label="姓名"> 李某某 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="手机号"> 18723232323 </cell>
        <cell label="性别"> 男 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="专兼职"> 专职 </cell>
        <cell label="开始任职时间"> 2020-01-03 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="行政职务"> 行政部经理 </cell>
        <cell label="学历"> 本科（学士学位） </cell>
      </otheeRow>
      <otheeRow>
        <cell label="出生年月"> 1985-04-02 </cell>
        <cell label="工会委员得票数"> 3908 票 </cell>
      </otheeRow>
    </othee>

    <div style="margin-top: 20px"></div>

    <!-- 工会员工详细信息 -->
    <othee title="会员基本信息">
      <otheeRow>
        <cell label="姓名"> 王某某 </cell>
        <cell label="性别"> 女 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="手机号"> 18723232323 </cell>
        <cell label="身份证号"> 134123197603022345 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="民族"> 汉 </cell>
        <cell label="政治面貌"> 党员 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="学历"> 本科 </cell>
        <cell label="学位"> 学士学位 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="户口所在地"> 北京市西城区西绒线胡同甲133号 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="现居住地"> 北京市西城区西绒线胡同甲133号 </cell>
      </otheeRow>
      <othee-row>&nbsp;</othee-row>
      <othee-row-title>工作经历</othee-row-title>
      <othee-row>
        <cell label="起止时间" :col="true" style="width: 200px"></cell>
        <cell label="就职公司" :col="true" style="width: 500px"></cell>
        <cell label="职务" :col="true"></cell>
      </othee-row>
      <othee-row>
        <cell style="width: 200px">2012-02至2018-02</cell>
        <cell style="width: 500px">北京AAA技术有限公司</cell>
        <cell>项目经理</cell>
      </othee-row>
      <othee-row>
        <cell style="width: 200px">2019-02至今</cell>
        <cell style="width: 500px">北京CCC技术有限公司</cell>
        <cell>项目经理</cell>
      </othee-row>
      <othee-row>&nbsp;</othee-row>
      <othee-row-title>家庭主要成员</othee-row-title>
      <othee-row>
        <cell label="成员姓名" :col="true"></cell>
        <cell label="人员关系" :col="true"></cell>
        <cell label="联系方式" :col="true"></cell>
      </othee-row>
      <othee-row>
        <cell>李某某</cell>
        <cell>夫妻</cell>
        <cell>13413131313</cell>
      </othee-row>

      <othee-row>&nbsp;</othee-row>
      <othee-row-title>人员状态</othee-row-title>
      <otheeRow>
        <cell label="行政职务"> 行政部经理 </cell>
        <cell label="学历"> 本科（学士学位） </cell>
      </otheeRow>
      <otheeRow>
        <cell label="在职状态"> 在职 </cell>
        <cell label="是否农民工"> 否 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="是否困难职工"> 否 </cell>
        <cell label="申请时间"> </cell>
      </otheeRow>
      <otheeRow>
        <cell label="是否劳动模范"> 是 </cell>
        <cell label="评选时间"> 2020-03-09 </cell>
      </otheeRow>
      <othee-row-title>会员卡</othee-row-title>

      <otheeRow>
        <cell label="开户银行"> 招商银行 </cell>
        <cell label="银行卡号"> 6234 0908 2345 3456 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="第一次开卡时间"> 2010-10-20 </cell>
      </otheeRow>

      <othee-row-title>其他</othee-row-title>
      <otheeRow>
        <cell label="单位是否足额缴纳工会经费"> 是 </cell>
      </otheeRow>
      <otheeRow>
        <cell label="采集信息时间"> 2020-01-01 </cell>
      </otheeRow>
      <othee-row>&nbsp;</othee-row>
      <othee-row>&nbsp;</othee-row>
      <othee-row>&nbsp;</othee-row>
      <othee-row>&nbsp;</othee-row>
      <othee-row>&nbsp;</othee-row>
      <othee-row>&nbsp;</othee-row>
      <othee-row>&nbsp;</othee-row>
      <othee-row-title>修改记录</othee-row-title>
      <othee-row>
        <cell
          label="操作时间"
          :col="true"
          style="width: 160px"
          :lablepadding="20"
        ></cell>
        <cell
          label="操作人"
          :col="true"
          style="width: 160px"
          :lablepadding="20"
        ></cell>
        <cell label="操作事项" :col="true"></cell>
      </othee-row>
      <othee-row>
        <cell style="width: 160px"
          ><div style="padding: 20px">2020-01-01 20:12:23</div></cell
        >
        <cell style="width: 160px"
          ><div style="padding: 20px">谭某某</div></cell
        >
        <cell>将【获得奖项】中的【--】改成了【劳动模范】</cell>
      </othee-row>
    </othee>

    <div style="margin-top: 20px"></div>

    <!-- 编辑 企业基本信息 -->
    <el-form ref="form" :model="form">
      <othee>
        <othee-row-title>
          <div style="font-size: 28px">企业基本信息</div>
        </othee-row-title>
        <otheeRow>
          <cell label="企业名称"> 北京某某公司 </cell>
          <cell label="上级企业"> 航空工业集团总部 </cell>
        </otheeRow>
        <othee-row-title>
          <div style="font-size: 28px">工会基本信息</div>
        </othee-row-title>
        <otheeRow>
          <cell label="单位工会名称" :request="true">
            <el-form-item>
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </cell>
          <cell label="建会日期" :request="true">
            <el-form-item prop="name">
              <el-input
                v-model="form.name"
                suffix-icon="el-icon-date"
              ></el-input>
            </el-form-item>
          </cell>
        </otheeRow>

        <otheeRow>
          <cell label="上级工会名称" :request="true">
            <el-form-item>
              <el-select v-model="form.region" placeholder="选择上级工会名称">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </cell>
        </otheeRow>
        <otheeRow>
          <cell label="工会类型" :request="true"> 
            <el-form-item>
              <el-checkbox-group v-model="form.name">
                <el-checkbox label="总工会" name="type">总工会</el-checkbox>
                <el-checkbox label="基层单位工会" name="type">基层单位工会</el-checkbox>
                <el-checkbox label="联合工会委员会" name="type">联合工会委员会</el-checkbox>
                <el-checkbox label="工会联合会" name="type">工会联合会</el-checkbox>
                <el-checkbox label="其他" name="type">其他</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </cell>
        </otheeRow>
        <otheeRow>
          <cell label="职工数"  :request="true"> 
            <el-row>
              <el-col :span="22">
                <el-form-item>
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2"><div class="lineHeight">人</div></el-col>
            </el-row>
          </cell>
          <cell label="会员数" :request="true">
            <el-row>
              <el-col :span="22">
                <el-form-item>
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2"><div class="lineHeight">人</div></el-col>
            </el-row>
          </cell>
        </otheeRow>
        <otheeRow>
          <cell label="女职工数"> 1967 人 </cell>
          <cell label="女职工会员数"> 1960 人 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="企业名称"> 北京某某公司 </cell>
          <cell label="上级企业"> 航空工业集团总部 </cell>
        </otheeRow>
      </othee>
    </el-form>

    <!-- 文档测试 -->

    <el-form ref="ruleForm" :model="form" :rules="rules">
      <othee title="aaa">
        <template slot="title">我啊啊啊</template>
        <otheeRow>
          <cell label="姓名">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </cell>
          <cell label="身份证号">
            <el-form-item prop="name">
              <el-input
                v-model="form.delivery"
                placeholder="请输入身份证号"
              ></el-input>
            </el-form-item>
          </cell>
        </otheeRow>
        <otheeRow>
          <cell label="性别" :request="true">
            <el-form-item>
              <el-select v-model="form.region" placeholder="请输入性别">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </cell>
          <cell label="手机号"> 18222123123 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="民族"> 汉 </cell>
          <cell label="政治面貌"> 党员 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="学历">
            <el-form-item>
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="form.date2"
                  style="width: 100%"
                ></el-time-picker>
              </el-col>
            </el-form-item>
          </cell>
          <cell label="学位"> 学士学位 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="工作党委"> 北京某某技术有限公司 </cell>
          <cell label="职务"> 项目经理 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="户口所在地"> 北京市西城区西绒线胡同甲133号 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="现居住地"> 北京市西城区西绒线胡同甲133号 </cell>
        </otheeRow>
        <otheeRow-title>工作经历</otheeRow-title>
        <otheeRow>
          <cell label="现居住地" :col="true" style="width: 200px"></cell>
          <cell label="现居住地" :col="true" style="width: 500px"></cell>
          <cell label="现居住地" :col="true"></cell>
        </otheeRow>
        <otheeRow>
          <cell style="width: 200px">1</cell>
          <cell style="width: 500px">2</cell>
          <cell>3</cell>
        </otheeRow>
        <otheeRow>
          <cell style="width: 200px">1</cell>
          <cell style="width: 500px">2</cell>
          <cell>3</cell>
        </otheeRow>

        <!-- 家庭成员 -->
        <otheeRow-title>工作经历</otheeRow-title>
        <otheeRow>
          <cell label="成员姓名" :col="true"></cell>
          <cell label="人员关系" :col="true"></cell>
          <cell label="联系方式" :col="true"></cell>
        </otheeRow>
        <otheeRow>
          <cell>李某某</cell>
          <cell>夫妻</cell>
          <cell>13413131313</cell>
        </otheeRow>

        <!-- 人员状态 -->
        <otheeRow-title>人员状态</otheeRow-title>
        <otheeRow>
          <cell label="在职状态" :request="true"> 在职</cell>
          <cell label="是否农民工"> 否 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="是否困难职工" :request="true"> 否 </cell>
          <cell label="申请时间"> </cell>
        </otheeRow>
        <otheeRow>
          <cell label="是否劳动模范">是</cell>
          <cell label="评选时间">2020-03-09</cell>
        </otheeRow>

        <!-- 人员状态 -->
        <otheeRow-title>人员状态</otheeRow-title>
        <otheeRow>
          <cell label="在职状态" :request="true">
            <el-form-item>
              <el-select v-model="form.region" placeholder="请输入性别">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </cell>
          <cell label="是否农民工">
            <el-form-item>
              <el-select v-model="form.region" placeholder="请输入性别">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select>
            </el-form-item>
          </cell>
        </otheeRow>
        <otheeRow>
          <cell label="是否困难职工" :request="true"
            ><el-form-item>
              <el-select v-model="form.region" placeholder="请输入性别">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select> </el-form-item
          ></cell>
          <cell label="申请时间">
            <el-form-item prop="name">
              <el-input
                v-model="form.name"
                placeholder="请输入姓名"
                suffix-icon="el-icon-date"
              ></el-input>
            </el-form-item>
          </cell>
        </otheeRow>
        <otheeRow>
          <cell label="是否劳动模范"
            ><el-form-item>
              <el-select v-model="form.region" placeholder="请输入性别">
                <el-option label="男" :value="1"></el-option>
                <el-option label="女" :value="0"></el-option>
              </el-select> </el-form-item
          ></cell>
          <cell label="评选时间"
            ><el-form-item prop="name">
              <el-input
                v-model="form.name"
                placeholder="请输入姓名"
                suffix-icon="el-icon-date"
              ></el-input> </el-form-item
          ></cell>
        </otheeRow>
        <otheeRow-title :blank="true"
          ><el-button @click="handleClick1">主要成员</el-button></otheeRow-title
        >

        <!-- 会员卡 -->
        <otheeRow-title>会员卡</otheeRow-title>
        <otheeRow>
          <cell label="开户银行"> 招商银行</cell>
          <cell label="银行卡号"> 6234 0908 2345 3456 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="第一次开卡时间"> 2010-10-20 </cell>
        </otheeRow>

        <!-- 其他 -->
        <otheeRow-title :blank="true"></otheeRow-title>
        <otheeRow>
          <cell
            label="单位是否足额
缴纳工会经费"
          >
            是</cell
          >
        </otheeRow>
        <otheeRow>
          <cell label="采集信息时间"> 2020-01-01 </cell>
        </otheeRow>
        <otheeRow>
          <cell label="户口所在地">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item>
                  <el-select v-model="form.region" placeholder="请输入性别">
                    <el-option label="男" :value="1"></el-option>
                    <el-option label="女" :value="0"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-select v-model="form.region" placeholder="请输入性别">
                    <el-option label="男" :value="1"></el-option>
                    <el-option label="女" :value="0"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-select v-model="form.region" placeholder="请输入性别">
                    <el-option label="男" :value="1"></el-option>
                    <el-option label="女" :value="0"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item prop="name">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入姓名"
                    suffix-icon="el-icon-date"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </cell>
        </otheeRow>
        <otheeRow-title>工作经历</otheeRow-title>
        <otheeRow>
          <cell label="起止时间" :col="true" style="width: 500px"></cell>
          <cell label="就职公司" :col="true" style="width: 400px"></cell>
          <cell label="职务" :col="true"></cell>
        </otheeRow>
        <otheeRow>
          <cell style="width: 500px">
            <el-form-item>
              <el-row :gutter="10">
                <el-col :span="6">
                  <el-date-picker
                    class="notop"
                    type="year"
                    prefix-icon=""
                    placeholder="选择年"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
                <el-col :span="5">
                  <el-date-picker
                    type="month"
                    class="notop"
                    format="MM"
                    placeholder="选择月"
                    v-model="form.date2"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
                <el-col :span="2"><div class="lineHeight">至</div></el-col>
                <el-col :span="6">
                  <el-date-picker
                    type="year"
                    class="notop"
                    placeholder="选择年"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
                <el-col :span="5">
                  <el-time-picker
                    placeholder="选择月"
                    class="notop"
                    format="MM"
                    v-model="form.date2"
                    style="width: 100%"
                  ></el-time-picker>
                </el-col>
              </el-row>
            </el-form-item>
          </cell>
          <cell style="width: 400px">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </cell>
          <cell>
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </cell>
        </otheeRow>
        <otheeRow>&nbsp;</otheeRow>
        <otheeRow>
          <cell justify="space-between">
            <div>已导入会员 <span style="color: red"> 2900</span> 人</div>
            <div><el-button type="info">查看已导入会员</el-button></div>
          </cell>
        </otheeRow>

        <otheeRow-title :blank="true"
          ><el-button @click="handleClick">主要成员</el-button></otheeRow-title
        >
      </othee>

      <el-button type="primary" @click="onSubmit('ruleForm')"
        >立即创建</el-button
      >
      <el-button>取消</el-button>
    </el-form>
  </div>
</template>

<script>
import Othee from "../../../components/othee/othee.vue";
import otheeRow from "components/othee/otheeRow";
import Cell from "../../../components/othee/cell.vue";
import otheeRowTitle from "../../../components/othee/otheeRowTitle.vue";

export default {
  components: { Othee, otheeRow, Cell, otheeRowTitle },
  data() {
    return {
      form: {
        name: "",
        region: null,
        date1: "",
        date2: "",
        delivery: null,
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      workData: [
        {
          startYear: null,
          starMonth: null,
          endYear: null,
          endMonth: null,
          company: null,
          post: null,
        },
      ],
      numberData: [
        {
          status: null,
          isFarmer: null,
          isHead: null,
          createTime: null,
          isMaster: null,
          endTime: null,
        },
      ],
    };
  },
  methods: {
    handleClick1() {
      let data = {
        status: null,
        isFarmer: null,
        isHead: null,
        createTime: null,
        isMaster: null,
        endTime: null,
      };
      this.numberData.push(data);
    },
    handleClick() {
      let data = {
        startYear: null,
        starMonth: null,
        endYear: null,
        endMonth: null,
        company: null,
        post: null,
      };
      this.workData.push(data);
    },
    onSubmit(formName) {
      console.log("submit!");
      console.log(this.form, "this.form--------");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
</style>

