<template>
  <div>
    <Header></Header>
    <div class="content container-fluid">
      <div class="container contentes">
        <img class="imgessp"
             src="@/assets/imge/bg_chahua.png"
             alt="">
        <div class="login">
          <p style=" margin-left: 80px;display:block;width:200px;">HI~</p>
          <p style=" margin-left: 80px;display:block;width:200px;">请登录</p>
          <span class="heng"></span>
          <input type="text"
                 class="ancount"
                 placeholder="uid/邮箱/手机号"
                 v-model="account">
          <span class="yanzheng">
            <span v-show="show">请输入登录账号</span>
          </span>
          <input type="password"
                 class="password"
                 v-model="password"
                 placeholder="密码">
          <span class="yanzheng1">
            <span v-show="show1">请输入登录密码</span>
          </span>
          <span class="input_one"></span>
          <span class="input_two"></span>
          <span class="forget">忘记密码？</span>
          <div class="login-btn">
            <img class="tubiao"
                 src="@/assets/imge/pic_lijidenglu.png"
                 alt="">
            <span class="btndenglu"
                  @click="login">立即登录</span>
          </div>
          <div class="zhuceacount">
            <span class="acount_one">没有账号？</span>
            <span class="acount_two">立即注册></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <Floot></Floot>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import local from "@/utils/local";
import Header from "@/components/Header.vue"
import Floot from '@/components/Floot.vue'
import { Login } from "@/api/account.js"
export default {
  components: {
    Header,
    Floot
  },
  data () {
    return {
      account: '',
      password: '',
      show: false,
      show1: false,
    }
  },
  methods: {
    async login () {
      if (!this.account) {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 3000)
      } else if (!this.password) {
        this.show1 = true
        setTimeout(() => {
          this.show1 = false
        }, 3000)
      } else {
        const data = await Login({
          username: this.account,
          password: this.password
        })
        console.log(data);
        if (data.code === 400) {
          this.$message({
            message: data.message,
            type: 'warning'
          });
        } else {
          this.$message({
            message: data.message,
            type: 'success'
          });
          // Cookies.set("sessionid", data.session)
          // setCookie(sessionid, data.session)
          local.set('username', data.data)
          // local.set('token', data.data.token)
          window.sessionStorage.setItem('tokeness', JSON.stringify(data.data.token))
          this.$router.push("/")
          // console.log(document.cookie, "1111111111111");
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.content {
  height: 620px;
  padding: 120px 0 0 0;
  background: rgba(244, 244, 244, 1);
  .contentes {
    position: relative;
    .imgessp {
      height: 620px;
      width: 800px;
      position: absolute;
      right: 0px;
    }
    .login {
      width: 142px;
      height: 100px;
      font-size: 34px;
      font-family: Microsoft YaHei;
      color: rgba(1, 150, 246, 1);
      position: absolute;
      top: 40px;
      .heng {
        display: block;
        width: 36px;
        height: 8px;
        background: rgba(1, 150, 246, 1);
        border-radius: 4px;
        margin-top: 15px;
        margin-left: 80px;
      }
      input {
        width: 370px;
        height: 40px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(227, 227, 227, 1);
        box-shadow: 0px 0px 20px 0px rgba(229, 229, 229, 0.35);
        border-radius: 10px;
        padding: 0 0 0 20px;
        box-sizing: border-box;
        text-indent: 10px;
        outline: none;
        font-size: 14px;
        margin-left: 80px;
      }
      .input_one {
        display: block;
        width: 1px;
        height: 17px;
        background: rgba(227, 227, 227, 1);
        border-radius: 1px;
        position: absolute;
        top: 152px;
        left: 100px;
      }
      .input_two {
        display: block;
        width: 1px;
        height: 17px;
        background: rgba(227, 227, 227, 1);
        border-radius: 1px;
        position: absolute;
        top: 232px;
        left: 100px;
      }
      .ancount {
        margin-top: 50px;
      }
      .yanzheng {
        display: inline-block;
        width: 200px;
        height: 20px;
        color: red;
        font-size: 16px;
        position: absolute;
        top: 188px;
        left: 110px;
      }
      .yanzheng1 {
        display: inline-block;
        width: 200px;
        height: 20px;
        color: red;
        font-size: 16px;
        position: absolute;
        top: 270px;
        left: 110px;
      }
      .password {
        margin-top: 40px;
      }
      .forget {
        width: 70px;
        display: block;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: red;
        position: absolute;
        top: 270px;
        left: 384px;
      }
      .login-btn {
        width: 170px;
        height: 70px;
        background: url('~@/assets/imge/btn_lijidenglu.png');
        background-size: 100% 100%;
        position: relative;
        margin-top: 30px;
        margin-left: 80px;
        .tubiao {
          width: 22px;
          height: 13px;
          position: absolute;
          left: 28px;
          top: 30px;
        }
        .btndenglu {
          display: block;
          position: absolute;
          left: 60px;
          top: 27px;
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
      }
      .zhuceacount {
        font-size: 18px;
        margin-left: 80px;
        width: 250px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        margin-top: 20px;
        .acount_one {
          color: #333333;
        }
        .acount_two {
          color: #0196f6;
          cursor: pointer;
          display: inline-block;
          border-bottom: 1px solid #0196f6;
        }
      }
    }
  }
}
</style>