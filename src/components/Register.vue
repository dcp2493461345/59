<template>
  <div>
    <Header></Header>
    <!-- 页脚 -->
    <div class="conterent container-fluid">
      <div class="bannerent container">
        <el-form ref="form"
                 label-width="80px">
          <el-form-item label="用户名：">
            <el-input></el-input>
            <span class="part">4-12位，中文、字母、数字组合，以中文或字母开头</span>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input></el-input>
            <span class="part">6-16位英文（区分大小写）、数字的组合</span>
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input></el-input>
            <span class="part">请输入邮箱地址</span>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input></el-input>
            <span class="part">请填写11位有效的手机号码</span>
          </el-form-item>
          <el-form-item label="验证码：">
            <el-input></el-input>
            <span class="part"></span>
          </el-form-item>
          <el-form-item label="验证码：">
            <el-input></el-input>
            <span class="part1">点击获取</span>
          </el-form-item>
          <el-form-item>
            <p>
              <span>已有账号?</span>
              <span class="part2">请登录></span>
            </p>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <Floot></Floot>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Floot from '@/components/Floot.vue'
export default {
  components: {
    Header,
    Floot
  },

}
</script>
<style lang="scss" scoped>
.conterent {
  padding: 160px 0 30px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .bannerent {
    width: 1080px;
    height: 530px;
    background: #ffffff;
    box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
    border-radius: 10px;
    padding: 60px 40px 50px;
    .el-form-item {
      margin-left: 150px;
      .el-input {
        ::v-deep.el-input__inner {
          width: 300px;
        }
      }
      .part {
        position: absolute;
        left: 320px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: #999999;
      }
      .part1 {
        position: absolute;
        left: 320px;
        display: inline-block;
        width: 80px;
        height: 40px;
        background: url("~@/assets/imge/btn_dianjihuoqu.png");
        background-size: 100% 100%;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: #ffffff;
        text-align: center;
      }
      .part2 {
        border-bottom: 1px solid #0196f6;
        color: #0196f6;
        margin-left: 10px;
      }
      .el-button {
        width: 300px;
      }
    }
  }
}
</style>