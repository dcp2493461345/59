<template>
  <div class="passwordes">
    <el-form ref="form"
             label-width="80px">
      <el-form-item label="旧密码：">
        <el-input v-model="password"></el-input>
        <span class="yanzheng">
          <span v-show="show">请输入旧密码</span>
          <span v-show="show5">旧密码不正确</span>
        </span>
      </el-form-item>
      <el-form-item label="新密码：">
        <el-input v-model="newpassword"></el-input>
        <span class="yanzheng">
          <span v-show="show1">请输入新密码</span>
          <span v-show="show4">新密码不能与旧密码一致</span>
          <span v-show="show6">密码格式为6-16位英文（区分大小写）、数字的组合</span>
        </span>
      </el-form-item>
      <el-form-item label="再确认：">
        <el-input v-model="newpasswordes"></el-input>
        <span class="yanzheng">
          <span v-show="show2">请再次输入新密码</span>
          <span v-show="show3">密码不一致</span>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="btnbaocun">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import local from "@/utils/local";
import { Changepd } from "@/api/account.js"

export default {
  data () {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      password: '',
      newpassword: '',
      newpasswordes: '',
      user: {},
    }
  },
  created () {
    let username = local.get('username')
    this.user = username
  },
  methods: {
    async btnbaocun () {
      if (!this.password) {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 3000)
      } else if (!this.newpassword) {
        this.show = false;
        this.show1 = true;
        setTimeout(() => {
          this.show1 = false;
        }, 3000)
      } else if (!this.newpasswordes) {
        this.show = false;
        this.show1 = false;
        this.show2 = true;
        setTimeout(() => {
          this.show2 = false;
        }, 3000)
      } else if (this.newpassword === this.password) {
        this.show = false;
        this.show1 = false;
        this.show2 = false;
        this.show4 = true;
        setTimeout(() => {
          this.show4 = false;
        }, 3000)
      }
      else if (this.newpassword != this.newpasswordes) {
        this.show = false;
        this.show1 = false;
        this.show2 = false;
        this.show3 = true;
        setTimeout(() => {
          this.show3 = false;
        }, 3000)
      } else {
        const data = await Changepd({
          username: this.user.username,
          old_password: this.password,
          new_password: this.newpassword,
          new_password2: this.newpasswordes,
        })
        console.log(data);
        if (data.code === 400) {
          if (data.message === "旧密码错误") {
            this.show = false;
            this.show1 = false;
            this.show2 = false;
            this.show3 = false;
            this.show4 = false;
            this.show5 = true;
            setTimeout(() => {
              this.show5 = false;
            }, 3000)
          }
          if (data.message === "新密码格式错误") {
            this.show = false;
            this.show1 = false;
            this.show2 = false;
            this.show3 = false;
            this.show4 = false;
            this.show5 = false;
            this.show6 = true;
            setTimeout(() => {
              this.show6 = false;
            }, 4000)
          }
        } else {
          this.show = false;
          this.show1 = false;
          this.show2 = false;
          this.show3 = false;
          this.show4 = false;
          this.show5 = false;
          this.show6 = false;
          this.$message({
            message: "修改成功",
            type: 'success'
          });
          this.password = ""
          this.newpassword = ""
          this.newpasswordes = ""
          window.localStorage.clear()
          window.sessionStorage.clear()
          this.$routre.push("/login")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.passwordes {
  padding-top: 90px;
  box-sizing: border-box;
  .el-form-item {
    margin-left: 150px;
    margin-bottom: 30px !important;
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
      background: url('~@/assets/imge/btn_dianjihuoqu.png');
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
.yanzheng {
  display: inline-block;
  width: 500px;
  height: 20px;
  color: red;
  font-size: 14px;
  position: absolute;
  top: 35px;
  left: 0px;
}
</style>