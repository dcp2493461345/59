<template>
  <div class="passwordes">
    <el-form ref="form"
             v-show="show"
             label-width="100px">
      <el-form-item label="ID："
                    class="kuang">
        <el-input v-model="user.user_id"
                  disabled></el-input>
      </el-form-item>
      <el-form-item label="手机号："
                    class="kuang">
        <el-input v-model="user.mobile"
                  disabled></el-input>
        <span class="part">更换</span>
      </el-form-item>
      <el-form-item label="邮箱："
                    class="kuang">
        <el-input v-model="user.email"
                  disabled></el-input>
        <span class="part"
              @click="Replace">更换</span>
      </el-form-item>
      <el-form-item label="用户名 ：">
        <el-input v-model="newusername"></el-input>
      </el-form-item>
      <el-form-item label="联系QQ ：">
        <el-input v-model="qq"
                  oninput="value=value.replace(/[^\d]/g,'')"
                  maxlength="11"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="sumbitbtn"
                   type="primary">保存</el-button>
      </el-form-item>
    </el-form>
    <!-- 邮箱 -->
    <el-form ref="forms"
             v-show="!show"
             label-width="100px">
      <el-form-item label="旧邮箱："
                    class="kuang">
        <el-input v-model="user.email"
                  disabled></el-input>
      </el-form-item>
      <el-form-item label="新邮箱 ：">
        <el-input v-model="newemail"></el-input>
        <span class="yanzheng">
          <span v-show="show1">请输入新邮箱</span>
          <span v-show="show2">邮箱格式错误</span>
          <span v-show="show3">该邮箱已经被注册</span>
        </span>
      </el-form-item>
      <el-form-item label="验证码 ：">
        <el-input v-model="emailveryfi"></el-input>
        <span class="yanzheng">
          <span v-show="show4">验证码错误</span>
        </span>
        <span class="part9"
              @click="acquire"
              v-show="times">点击获取</span>
        <span class="part10"
              v-show="!times">{{count}}秒后重试</span>
      </el-form-item>
      <el-form-item>
        <el-button @click="sumbitbtn1"
                   type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import local from "@/utils/local";
import { Changeusername, SendEmailCodeView, Changeemail } from "@/api/account.js"
export default {
  data () {
    return {
      qq: "",
      user: {},
      newusername: '',
      show: true,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      newemail: '',
      emailveryfi: '',
      times: true,
      count: '',
      timer: null,
    }
  },
  created () {
    let username = local.get('username')
    this.user = username
    this.newusername = this.user.username
    if (local.get('QQ')) {
      this.qq = local.get('QQ')
    }
  },
  methods: {
    async sumbitbtn () {
      let qqname = local.get("QQ")
      if (!this.qq && !qqname && this.newusername === this.user.username) {
        this.$message({
          message: "您未做任何修改",
          type: 'warning'
        });
      } else if (this.qq && qqname === this.qq && this.newusername === this.user.username) {
        this.$message({
          message: "您未做任何修改",
          type: 'warning'
        });
      }
      else {
        if (this.newusername === this.user.username) {
          const res = await Changeusername({
            user_id: this.user.user_id,
            new_qq: this.qq
          })
          if (res.code === 200) {
            local.set("QQ", this.qq)
            this.$message({
              message: "修改成功",
              type: 'success'
            });
          }
        } else {
          const res = await Changeusername({
            user_id: this.user.user_id,
            new_qq: this.qq,
            new_name: this.newusername
          })
          if (res.code === 200) {
            this.$message({
              message: "修改成功",
              type: 'success'
            });
            this.user.username = this.newusername
            local.set("username", this.user)
            local.set("QQ", this.qq)
          } else {
            this.$message({
              message: res.message,
              type: 'warning'
            });
          }
        }
      }
    },
    //更换邮箱
    Replace () {
      this.show = false
    },
    //点击获取验证码
    async acquire () {
      if (!this.newemail) {
        this.show1 = true
        setTimeout(() => {
          this.show1 = false
        }, 3000)
      } else {
        console.log(123);
        const res = await SendEmailCodeView({
          new_email: this.newemail,
          old_email: this.user.email
        })
        // console.log(data);
        if (res.code === 200) {
          this.$message({
            message: `验证码已发送到邮箱${this.newemail}`,
            type: 'success'
          });
          this.show1 = false
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.times = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.times = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000)
          }
        } else {
          if (res.message === "参数email有误") {
            this.show2 = true
            setTimeout(() => {
              this.show2 = false
            }, 3000)
          }
          if (res.message === "该邮箱已经被注册") {
            this.show3 = true
            setTimeout(() => {
              this.show3 = false
            }, 3000)
          }
        }

      }
    },
    //确认提交修改邮箱
    async sumbitbtn1 () {
      const data = await Changeemail({
        id: this.user.user_id,
        new_email: this.newemail,
        email: this.user.email,
        email_code: this.emailveryfi
      })
      console.log(data);
      if (data.code === 200) {
          this.show4=false
        this.$message({
          message: `邮箱修改成功`,
          type: 'success'
        });
        this.user.email = this.newemail
        local.set("username", this.user)
        this.show = true
      } else {
        this.show4=true;
        setTimeout(()=>{
          this.show4=false
        },3000)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.passwordes {
  padding-top: 90px;
  box-sizing: border-box;
  .el-form-item {
    margin-left: 150px;
    .el-input {
      ::v-deep.el-input__inner {
        width: 300px;
        background: #ffffff;
        cursor: default;
        color: #656565;
      }
    }
    .part {
      position: absolute;
      left: 320px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #119cf3;
      cursor: pointer;
    }
    .part9 {
      position: absolute;
      left: 320px;
      display: inline-block;
      width: 100px;
      line-height: 40px;
      background: url('~@/assets/imge/btn_dianjihuoqu.png');
      background-size: 100% 100%;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #ffffff;
      text-align: center;
      cursor: pointer;
    }
    .part10 {
      position: absolute;
      left: 320px;
      display: inline-block;
      width: 100px;
      line-height: 40px;
      background: url('~@/assets/imge/btn_dianjihuoqu.png');
      background-size: 100% 100%;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #ffffff;
      text-align: center;
      cursor: not-allowed;
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
  .kuang {
    .el-input {
      ::v-deep.el-input__inner {
        width: 300px;
        background: #ffffff;
        cursor: default;
        color: #656565;
        border: none;
      }
    }
  }
  .yanzheng {
    display: inline-block;
    width: 200px;
    height: 20px;
    color: red;
    font-size: 14px;
    position: absolute;
    top: 31px;
    left: 0px;
  }
}
</style>