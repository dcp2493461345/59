<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="boking container-fluid">
      <div class="boking01 container">
        <div class="one ">平台经纪人</div>
        <div class="two ">
          <span class="two_01">真假经纪人</span>
          <span @click="password"
                class="two_02">立即验证</span>
        </div>
        <div class="three ">
          <span class="two_01">真假账号</span>
          <span @click="account"
                class="two_02">立即验证</span>
        </div>
      </div>
      <div class="boking02 container">
        <div class="adv2"
             v-for="(i,index) in 10"
             :key="index">
          <div class="one">
            <span class="adv10"></span>
            <div class="two">
              <p class="adv11">客服@小美</p>
              <span @click="dialogVisible">投诉</span>
              <span @click="dialogVisible1"
                    style="background:#FF7348 !important;margin-left:5px;">打赏</span>
            </div>
          </div>
          <div class="adv12"></div>
          <p class="adv13">QQ:3002255225 </p>
          <p class="adv13">手机:139****15698</p>
          <p class="adv13">电话:400-258-125</p>
          <p class="adv13">擅长:域名 企业QQ 网站交易 </p>
          <div class="adv14">
            <span class="sp1"><img src="@/assets/imge/ic_qqjiaotan.png" /><span style="margin-left:25px;">交谈</span></span>
            <span class="sp2"><img src="@/assets/imge/ic_weixinjiaotan.png" /><span style="margin-left:28px;">交谈</span></span>
          </div>
        </div>

      </div>
      <div></div>
    </div>
    <Floot></Floot>
    <!-- 投诉 -->
    <el-dialog class="operate"
               :visible.sync="isshow"
               width="30%">
      <div class="one">
        <span class="one_1"></span>
        <span class="one_2">经纪人@酥酥</span>
      </div>
      <el-form ref="form"
               :model="form"
               label-width="110px">

        <el-form-item label="投诉类型 ：">
          <el-select v-model="form.region"
                     placeholder="中介问题">
            <el-option label="账号问题"
                       value="shanghai"></el-option>
            <el-option label="服务问题"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投诉内容 ：">
          <el-input type="textarea"
                    v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="联系方式 ：">
          <el-input v-model="form.name"
                    placeholder="请输入你的QQ号">></el-input>
        </el-form-item>
        <el-form-item>
          <span class="btn"
                @click="onSubmit">提交</span>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 打赏 -->
    <el-dialog class="operate"
               :visible.sync="isshow1"
               width="30%">
      <div class="one">
        <span class="one_1"></span>
        <span class="one_2">经纪人@酥酥</span>
      </div>
      <el-form ref="form"
               :model="form"
               label-width="110px">
        <el-form-item class="thtone">
          <span class="ones"
                @click="btnnes"
                :class="{activeboking:flag==1}">1元</span>
          <span class="ones"
                @click="btnnes1"
                :class="{activeboking:flag==2}">2元</span>
          <span class="ones"
                @click="btnnes2"
                :class="{activeboking:flag==5}">5元</span>
          <span class="ones"
                @click="btnnes3"
                :class="{activeboking:flag==10}">10元</span>
          <input class="ones1"
                 type="text"
                 placeholder="填写金额">
        </el-form-item>
        <el-form-item label="投诉内容 ：">
          <el-input type="textarea"
                    v-model="form.desc"
                    placeholder="请填写留言内容"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="btn"
                @click="onSubmit">好，赏了</span>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 收款账户验证 -->
    <el-dialog class="operate1"
               :visible.sync="isshow2"
               width="30%">
      <div class="four">
        <span class="one_2">收款账号校验</span>
      </div>
      <el-form ref="form"
               :model="form"
               label-width="110px">
        <el-form-item>
          <span class="imges"></span>
          <el-input class="yanzheng"
                    v-model="form.name"
                    placeholder="请输入您需要验证的收款账号">></el-input>
        </el-form-item>
        <el-form-item>
          <span class="btn"
                @click="onSubmit">立即验证</span>
        </el-form-item>
      </el-form>
      <div class="one">
        592908128810701
        <span class="one01"></span>
      </div>
      <div class="two">
        您当前验证的账号:<span class="two01">592908128810701</span>为真,可交易转账！
      </div>
      <div class="three">
        温馨提示：查询结果为我方对应号码数据,但不排除非法人员伪造号码进行诈骗,如有疑问请联系我们官方电话<span class="two01">400-128-0616</span>
      </div>
    </el-dialog>
    <!-- 经纪人验证 -->
    <el-dialog class="operate1"
               :visible.sync="isshow3"
               width="30%">
      <div class="four">
        <span class="one_2">收款账号校验</span>
      </div>
      <el-form ref="form"
               :model="form"
               label-width="110px">
        <el-form-item>
          <span class="imges"></span>
          <el-input class="yanzheng"
                    v-model="form.name"
                    placeholder="请输入您需要验证经纪人的：手机号或QQ号">></el-input>
        </el-form-item>
        <el-form-item>
          <span class="btn"
                @click="onSubmit">立即验证</span>
        </el-form-item>
      </el-form>
      <div class="one">
        400-128-0616
        <span class="one01"></span>
      </div>
      <div class="two">
        您当前验证的账号:<span class="two01">400-128-0616</span>为真,可交易转账！
      </div>
      <div class="three">
        温馨提示：查询结果为我方对应号码数据,但不排除非法人员伪造号码进行诈骗,如有疑问请联系我们官方电话<span class="two01">400-128-0616</span>
      </div>
    </el-dialog>
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
  created () {

  },
  data () {
    return {
      isshow: false,
      isshow1: false,
      isshow2: false,
      isshow3: false,
      flag: 1,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {

    dialogVisible () {
      this.isshow = true
    },
    dialogVisible1 () {
      this.isshow1 = true
    },
    onSubmit () {
      console.log('submit!');
    },
    btnnes () {
      this.flag = 1
    },
    btnnes1 () {
      this.flag = 2
    },
    btnnes2 () {
      this.flag = 5
    },
    btnnes3 () {
      this.flag = 10
    },
    account () {
      this.isshow2 = true
    },
    password () {
      this.isshow3 = true
    }
  }
}
</script>

<style lang="scss" scoped>
.boking {
  padding: 160px 0 300px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .boking01 {
    display: flex;
    justify-content: space-between;
    .one {
      width: 600px;
      line-height: 160px;
      background: url("~@/assets/imge/pic_pingtaijingjiren.png") no-repeat;
      text-align: center;
      font-size: 40px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
    }
    .two {
      width: 310px;
      height: 160px;
      background: url("~@/assets/imge/pic_zhenjiajingjiren.png") no-repeat;
      padding-top: 30px;
      box-sizing: border-box;
      .two_01 {
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        margin-left: 123px;
      }
      .two_02 {
        margin-top: 18px;
        margin-left: 111px;
        display: block;
        width: 178px;
        line-height: 50px;
        border: 1px solid #ffffff;
        border-radius: 10px;
        font-size: 20px;
        font-family: Microsoft YaHei;
        color: #ffffff;
        text-align: center;
        cursor: pointer;
      }
    }
    .three {
      width: 310px;
      height: 160px;
      background: url("~@/assets/imge/pic_zhenjiazhanghao.png") no-repeat;
      padding-top: 30px;
      box-sizing: border-box;
      .two_01 {
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        margin-left: 123px;
      }
      .two_02 {
        margin-top: 18px;
        cursor: pointer;
        margin-left: 111px;
        display: block;
        width: 178px;
        line-height: 50px;
        border: 1px solid #ffffff;
        border-radius: 10px;
        font-size: 20px;
        font-family: Microsoft YaHei;
        color: #ffffff;
        text-align: center;
      }
    }
  }
  .boking02 {
    background: #f4f4f4;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    flex-wrap: wrap;
    .adv1 {
      width: 240px;
      height: 200px;
      background: #ffffff;
      box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
      padding: 10px 0 0 14px;
      box-sizing: border-box;
      .adv01 {
        font-size: 20px;
        font-family: Microsoft YaHei;
        color: #32afe9;
        line-height: 40px;
      }
      .adv02 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #999999;
        line-height: 30px;
      }
      span {
        display: block;
        width: 200px;
        line-height: 40px;
        border: 1px solid #ffffff;
        background: linear-gradient(0deg, #ff8b45, #ff684a);
        border-radius: 10px;
        text-align: center;
        color: #ffffff;
        margin-top: 5px;
      }
    }
    .adv2 {
      width: 240px;
      height: 290px;
      background: #ffffff;
      box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
      margin-bottom: 30px;
      padding: 10px 10px 0 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .one {
        display: flex;
        justify-content: space-between;
        width: 190px;
        .adv10 {
          display: inline-block;
          width: 70px;
          height: 70px;
          background: #f4f4f4;
          border-radius: 50%;
        }
        .two {
          .adv11 {
            font-size: 16px;
            font-family: Microsoft YaHei;
            color: #666666;
            line-height: 30px;
            margin-top: 10px;
          }
          span {
            display: inline-block;
            width: 50px;
            line-height: 20px;
            background: #5992bb;
            border-radius: 10px;
            color: #fff;
            text-align: center;
            cursor: pointer;
          }
        }
      }

      .adv12 {
        width: 220px;
        height: 1px;
        background: #f4f4f4;
        margin-top: 20px;
      }
      .adv13 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #999999;
        line-height: 30px;
      }
      .adv14 {
        margin-top: 10px;
        .sp1 {
          display: inline-block;
          width: 100px;
          line-height: 40px;
          background: linear-gradient(0deg, #3c98f6, #2555dd);
          font-size: 16px;
          text-align: center;
          font-family: Microsoft YaHei;
          color: #ffffff;
          position: relative;
          img {
            position: absolute;
            left: 17px;
            top: 10px;
          }
        }
        .sp2 {
          display: inline-block;
          width: 100px;
          line-height: 40px;
          background: linear-gradient(0deg, #79b326, #02a864);
          text-align: center;
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #ffffff;
          position: relative;
          img {
            position: absolute;
            left: 17px;
            top: 10px;
          }
        }
      }
    }
  }
}
.operate {
  ::v-deep.el-dialog {
    min-width: 800px;
    height: 700px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-dialog__header {
      text-align: left;
      height: 0px !important;
      padding: 10px 19px 12px;
      // .el-dialog__close {
      //   display: none;
      // }
      .el-dialog__headerbtn {
        position: absolute;
        top: 15px;
        right: 20px;
        padding: 0;
        background: 0 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
      }
    }
    .el-dialog__body {
      padding: 0px 0px 0px 0px !important;
      .one {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        .one_1 {
          display: block;
          width: 90px;
          height: 90px;
          background: #f2f2f2;
          border-radius: 50%;
        }
        .one_2 {
          font-size: 18px;
          font-family: Microsoft YaHei;
          color: #666666;
          line-height: 30px;
          margin-bottom: 10px;
        }
      }
      .four {
        display: flex;
        align-items: center;
        justify-content: center;
        .one_2 {
          font-size: 18px;
          font-family: Microsoft YaHei;
          color: #666666;
          line-height: 30px;
          margin-bottom: 10px;
        }
      }
      .el-form {
        padding: 29px 0 0 88px;
        box-sizing: border-box;
        .el-input {
          width: 420px;
          height: 50px;
          .el-input__inner {
            width: 420px;
            height: 50px;
            font-size: 16px;
          }
        }
        .el-textarea {
          width: 420px;
          height: 160px;
          .el-textarea__inner {
            width: 420px;
            height: 160px !important;
            color: #333333;
            font-size: 18px;
            line-height: 30px;
          }
          .el-textarea__inner::-webkit-input-placeholder {
            font-size: 18px;
            font-family: Microsoft YaHei;
            color: #999999;
            line-height: 30px;
          }
        }
        .btn {
          display: inline-block;
          width: 430px;
          text-align: center;
          line-height: 70px;
          background: linear-gradient(0deg, #ff8b45, #ff684a);
          box-shadow: 0px 0px 20px 0px rgba(255, 72, 121, 0.35);
          border-radius: 10px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          color: #ffffff;
        }
        .el-form-item {
          margin-bottom: 40px !important;
          .el-form-item__label {
            font-size: 18px;
            font-family: Microsoft YaHei;
            color: #333333;
            line-height: 50px;
          }
        }
        .thtone {
          .el-form-item__content {
            padding-right: 90px;
            box-sizing: border-box;
            .ones {
              display: inline-block;
              width: 130px;
              height: 40px;
              border: 1px solid #ff8b45;
              text-align: center;
              border-radius: 10px;
              margin-right: 16px;
              margin-bottom: 20px;
              font-size: 20px;
              color: #ff7348;
              cursor: pointer;
            }
            .activeboking {
              background: linear-gradient(0deg, #ff8b45, #ff684a);
              color: #ffffff;
            }
            .ones1 {
              display: inline-block;
              width: 277px;
              height: 40px;
              border: 1px solid #ff8b45;
              border-radius: 10px;
              text-indent: 88px;
              font-size: 20px;
              font-family: Microsoft YaHei;
              color: #ff7348;
            }
            .ones1:focus {
              outline: none;
              border: 1px solid #ff8b45;
            }
            input::-webkit-input-placeholder {
              font-size: 20px;
              font-family: Microsoft YaHei;
              color: #ff7348;
              text-indent: 88px;
            }
          }
        }
      }
    }
  }
}
.operate1 {
  ::v-deep.el-dialog {
    min-width: 1000px;
    height: 930px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-dialog__header {
      text-align: left;
      height: 0px !important;
      padding: 10px 19px 12px;
      // .el-dialog__close {
      //   display: none;
      // }
      .el-dialog__headerbtn {
        position: absolute;
        top: 15px;
        right: 20px;
        padding: 0;
        background: 0 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
      }
    }
    .el-dialog__body {
      padding: 0px 0px 0px 0px !important;
      .one {
        text-align: center;
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
        margin-top: 40px;
        position: relative;
        .one01 {
          width: 81px;
          height: 82px;
          display: inline-block;
          background: url("~@/assets/imge/pic_zhen.png");
          position: absolute;
          top: -26px;
          right: 320px;
        }
      }
      .two {
        font-size: 20px;
        font-family: Microsoft YaHei;
        color: #666666;
        margin-top: 40px;
        text-align: center;
        .two01 {
          color: #2798ce;
        }
      }
      .three {
        width: 829px;
        font-size: 20px;
        font-family: Microsoft YaHei;
        color: #666666;
        margin-top: 40px;
        margin-left: 104px;
        line-height: 30px;
        .two01 {
          color: #2798ce;
        }
      }
      .four {
        display: flex;
        align-items: center;
        justify-content: center;
        .one_2 {
          margin-bottom: 70px;
          margin-top: 70px;
          font-size: 24px;
          font-family: Microsoft YaHei;
          color: #333333;
        }
      }
      .el-form {
        box-sizing: border-box;
        .btn {
          display: inline-block;
          width: 430px;
          text-align: center;
          line-height: 70px;
          background: linear-gradient(0deg, #ff8b45, #ff684a);
          box-shadow: 0px 0px 20px 0px rgba(255, 72, 121, 0.35);
          border-radius: 10px;
          font-size: 20px;
          font-family: Microsoft YaHei;
          color: #ffffff;
          margin-left: 190px;
          margin-top: 10px;
          cursor: pointer;
        }
        .imges {
          width: 32px;
          height: 30px;
          display: inline-block;
          background: url("~@/assets/imge/ic_shuru.png");
          position: absolute;
          top: 21px;
          left: 26px;
          z-index: 999999999;
        }
        .yanzheng {
          .el-input__inner {
            width: 800px;
            height: 70px;
            text-indent: 60px;
            font-size: 20px;
            font-family: Microsoft YaHei;
            color: #999999;
          }
          .el-input__inner::-webkit-input-placeholder {
            font-size: 20px;
            font-family: Microsoft YaHei;
            color: #999999;
            text-indent: 60px;
          }
        }
      }
    }
  }
}
</style>