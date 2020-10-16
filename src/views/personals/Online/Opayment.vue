<template>
  <div class="opaymens">
    <div class="pay_input">
      <span class="money01"> 充值金额(元)：</span>
      <el-input class="payinput"
                placeholder="50000">
      </el-input>
      <span class="tishiyu">提醒：充值金额仅用于担保交易，委托经纪等消费</span>
      <span class="money02">充值金额至少100元</span>
    </div>
    <p class="pay_title">第三方支付：</p>
    <div class="paymode">
      <div @click="xuanzhong"
           class="zfb01 "
           :class="{activess:flag==1}"><span></span></div>
      <div class="wx01"
           @click="xuanzhong2"
           :class="{activess:flag==2}"><span></span></div>
      <div class="zx01"
           @click="xuanzhong3"
           :class="{activess:flag==3}"><span></span></div>
    </div>
    <div class="chonz">
      <div class="chongzhi">
        确定充值
      </div>
    </div>
    <p class="p_footer">遇到问题请随时联系我们：</p>
    <div class="one01">
      <div class="onecent1">
        <img src="@/assets/imge/ic_qq (1).png"
             alt="">
        <p>QQ：369852485/569842685</p>
      </div>
      <div class="onecent2">
        <img src="@/assets/imge/ic_rexian.png"
             alt="">
        <p>电话：400-128-0616</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: 1
    }
  },
  created () {
  },
  methods: {
    xuanzhong () {
      this.flag = 1
    },
    xuanzhong2 () {
      this.flag = 2

    },
    xuanzhong3 () {
      this.flag = 3

    }
  }
}
</script>

<style lang="scss" scoped>
.opaymens {
  .pay_input {
    display: flex;
    align-items: center;
    margin-top: 33px;
    position: relative;
    .money01 {
      display: inline-block;
      font-size: 20px;
      font-family: Microsoft YaHei;
      color: #666666;
      line-height: 60px;
    }
    ::v-deep.payinput {
      width: 300px;
      .el-input__inner {
        width: 300px;
        font-size: 28px;
        font-family: Microsoft YaHei;
        color: #343434;
        height: 60px;
      }
    }
    .money02 {
      font-size: 16px;
      font-family: Microsoft YaHei;
      color: #0296f6;
      line-height: 60px;
      margin-left: 20px;
    }
    .tishiyu {
      position: absolute;
      font-size: 16px;
      font-family: Microsoft YaHei;
      color: #ff3636;
      top: 75px;
      left: 135px;
    }
  }
  .pay_title {
    margin-top: 60px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #666666;
    line-height: 60px;
  }
  .paymode {
    display: flex;
    justify-content: center;
    .zfb01 {
      width: 140px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #e3e3e3;
      background-image: url(https://www.59danbao.cn/pc/images/cz_yhk.png);
      background-position: 32px -361px;
      margin-right: 40px;
      cursor: pointer;
      position: relative;
    }
    .wx01 {
      width: 140px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #e3e3e3;
      background-image: url(https://www.59danbao.cn/pc/images/cz_yhk.png);
      margin-right: 40px;
      position: relative;
      cursor: pointer;
      background-position: 9px -460px;
    }
    .zx01 {
      width: 140px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #e3e3e3;
      background-image: url(https://www.59danbao.cn/pc/images/cz_yhk.png);
      position: relative;
      background-position: 9px -410px;
      cursor: pointer;
    }
    .activess {
      border: 1px solid #70aa01;
      span {
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        width: 17px;
        height: 15px;
        background: url(https://www.59danbao.cn/pc/images/icon.png) 0 -580px no-repeat;
      }
    }
  }
  .chonz {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .chongzhi {
      width: 270px;
      line-height: 80px;
      background: #ff9000;
      text-align: center;
      font-size: 24px;
      font-family: Microsoft YaHei;
      color: #ffffff;
      border-radius: 10px;
    }
  }
  .p_footer {
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #666666;
    line-height: 60px;
    margin-top: 60px;
  }
  .one01 {
    height: 100px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .onecent1 {
      width: 400px;
      height: 100px;
      background: #f4f4f4;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 20px;
      }
    }
    .onecent2 {
      width: 400px;
      height: 100px;
      background: #f4f4f4;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 20px;
      }
    }
  }
}
</style>