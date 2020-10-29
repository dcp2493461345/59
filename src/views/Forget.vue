<template>
  <div>
    <Header></Header>
    <div class="conterent container-fluid">
      <div class="bannerent container">
        <el-form ref="form"
                 :model="form"
                 label-width="100px">
          <el-form-item label="验证方式：">
            <el-select v-model="form.way"
                       placeholder="请选择验证方式">
              <el-option label="手机号验证"
                         value="1"></el-option>
              <!-- <el-option label="邮箱验证"
                         value="2"></el-option> -->
            </el-select>
            <span class="yanzheng">
              <span v-show="show">请选择验证方式</span>
            </span>
          </el-form-item>
          <el-form-item label="账号：">
            <el-input v-model="form.username"></el-input>
            <span class="part">请填写有效账号</span>
            <span class="yanzheng">
              <span v-show="show7">请输入正确的账号</span>
              <span v-show="show1">请输入账号</span>
            </span>
          </el-form-item>

          <el-form-item label="图形验证码：">
            <el-input v-model="form.image_code"></el-input>
            <span class="part"></span>
            <span class="part5"
                  @click="Getimgcaptcha">看不清，换一张！</span>
            <div class="imges64">
              <img :src="this.previewImgObj"
                   alt="">
            </div>
            <span class="yanzheng">
              <span v-show="show4">请输入图形验证码</span>
              <span v-show="show10">图形验证码错误</span>
            </span>
          </el-form-item>
          <el-form-item label="验证码：">
            <el-input v-model="form.sms_code"></el-input>
            <span class="part1"
                  @click="acquire"
                  v-show="times">点击获取</span>
            <span class="part10"
                  v-show="!times">{{count}}秒后重试</span>
            <span class="yanzheng">
              <span v-show="show5">请输入短信验证码</span>
            </span>
          </el-form-item>
          <el-form-item label="新密码：">
            <el-input v-model="form.password"></el-input>
            <span class="yanzheng">
              <span v-show="show3">密码格式错误</span>
            </span>
          </el-form-item>
          <el-form-item>
            <el-button @click="sumbit"
                       type="primary">提交</el-button>
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
import { Forgetpassword, Getgraphiccaptcha, Sendsms, Register, Sendemail } from '@/api/account.js'
export default {
  components: {
    Header,
    Floot
  },
  data () {
    return {
      form: {
        way: '',//验证方式
        username: '',//账号
        email: '',//邮箱
        mobile: '',//手机号
        sms_code: '',//短信验证码
        image_code: '',//图形验证码
        image_text: '',//图形验证码标识
        password: ''
      },
      previewImgObj: '',
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      times: true,
      count: '',
      timer: null,
    }
  },
  created () {
    this.Getimgcaptcha()
  },
  methods: {
    //获取图形验证码
    async Getimgcaptcha () {
      const data = await Getgraphiccaptcha({})
      this.previewImgObj = 'data:image/png;base64,' + data.data.img_base64
      this.form.image_text = data.data.image_text
    },
    async sumbit () {
      console.log(this.form);
      if (!this.form.way) {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 3000)
      } else if (!this.form.username) {
        this.show = false
        this.show1 = true
        setTimeout(() => {
          this.show1 = false
        }, 3000)
      } else if (!this.form.image_code) {
        this.show1 = false
        this.show = false
        this.show4 = true
        setTimeout(() => {
          this.show4 = false
        }, 3000)
      } else if (!this.form.sms_code) {
        this.show1 = false
        this.show = false
        this.show4 = false
        this.show5 = true
        setTimeout(() => {
          this.show5 = false
        }, 3000)
      } else if (!this.form.password) {
        this.show1 = false
        this.show = false
        this.show4 = false
        this.show5 = false
        this.show3 = true
        setTimeout(() => {
          this.show3 = false
        }, 3000)
      } else {
        const data = await Forgetpassword({
          way: this.form.way,
          mobile: this.form.username,
          code: this.form.sms_code,
          new_password: this.form.password,
        })
        console.log(data);
        if (data.code == 400) {
          if (data.message == "密码格式错误") {
            this.show3 = true
            setTimeout(() => {
              this.show3 = false
            }, 3000)
          }
        } else if (data.code == 200) {
          this.$message({
            message: "密码找回成功",
            type: "success"
          })
          this.$router.push("/login")
        }
      }

    },
    async acquire () {
      if (!this.form.way) {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 3000)
      } else if (!this.form.username) {
        this.show = false
        this.show1 = true
        setTimeout(() => {
          this.show1 = false
        }, 3000)
      } else if (!this.form.image_code) {
        this.show1 = false
        this.show = false
        this.show4 = true
        setTimeout(() => {
          this.show4 = false
        }, 3000)
      } else if (this.form.way == 1) {
        const data = await Sendsms({
          image_code: this.form.image_code,
          image_text: this.form.image_text,
          mobile: this.form.username
        })
        if (data.code === 200) {
          this.$message({
            message: `验证码短信已发送到${this.form.username}`,
            type: 'success'
          });
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
        } else if (data.code == 400) {
          if (data.message == "验证码错误") {
            this.show1 = false
            this.show4 = false
            this.show10 = true
            setTimeout(() => {
              this.show10 = false
            }, 3000)
          }
        }
      }
      // if (!phones.test(this.form.mobile)) {
      //   this.show9 = true
      //   setTimeout(() => {
      //     this.show9 = false
      //   }, 3000)
      // } else if (!this.form.image_code) {
      //   this.show4 = true
      //   setTimeout(() => {
      //     this.show4 = false
      //   }, 3000)
      // } else {
      //   const data = await Sendsms({
      //     image_code: this.form.image_code,
      //     image_text: this.form.image_text,
      //     mobile: this.form.mobile
      //   })
      //   console.log(data);
      //   if (data.code === 200) {
      //     this.$message({
      //       message: `验证码短信已发送到${this.form.mobile}`,
      //       type: 'success'
      //     });
      //     const TIME_COUNT = 60;
      //     if (!this.timer) {
      //       this.count = TIME_COUNT;
      //       this.times = false;
      //       this.timer = setInterval(() => {
      //         if (this.count > 0 && this.count <= TIME_COUNT) {
      //           this.count--;
      //         } else {
      //           this.times = true;
      //           clearInterval(this.timer);
      //           this.timer = null;
      //         }
      //       }, 1000)
      //     }
      //   } else if (data.code === 400) {
      //     this.$message({
      //       message: data.message,
      //       type: 'warning'
      //     });
      //   }

      // }
      // }

    },
    toroutr () {
      this.$router.push("/login")
    }
  }

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
      margin-bottom: 0px;
      ::v-deep.el-form-item__content {
        line-height: 30px !important;
      }
      .el-input {
        ::v-deep.el-input__inner {
          width: 300px;
        }
      }
      .el-select {
        width: 300px;
        display: block;
      }
      .part {
        position: absolute;
        left: 320px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: #999999;
      }
      .imges64 {
        width: 100px;
        height: 41px;
        position: absolute;
        right: 410px;
        top: 0px;
        img {
          width: 130px;
          height: 41px;
        }
      }
      .part5 {
        position: absolute;
        left: 455px;
        top: 15px;
        display: inline-block;
        height: 20px;
        color: #0196f6;
        cursor: pointer;
      }
      .part1 {
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
      .part2 {
        border-bottom: 1px solid #0196f6;
        color: #0196f6;
        margin-left: 10px;
        cursor: pointer;
      }
      .el-button {
        width: 300px;
        margin-top: 20px;
      }
      .yanzheng {
        display: inline-block;
        height: 20px;
        width: 200px;
        color: red;
      }
    }
  }
}
</style>