<template>
  <div class="withdra">
    <div class="rule">
      <span class="one">温馨提示: 提现金额超过2000元，联系交易经纪人处理</span>
      <span class="two">详细规则 </span>
    </div>
    <p class="dqye">
      <span class="dqye01">当前余额 ：</span>
      <span class="dqye02">0.00</span>
    </p>
    <p class="txje">
      <span class="txje01">提现金额 ：</span>
      <el-input class="txje02"
                placeholder="请输入金额"></el-input>
    </p>
    <p class="txjed">
      <span class="txjed01">提现到 ：</span>
      <el-input class="txjed02"
                placeholder="请输入金额"></el-input>
    </p>
    <p class="btnn">
      <span>提现</span>
    </p>
    <div class="borderes"></div>
    <p class="zhushi"
       style="margin-top:24px;">注：</p>
    <p class="zhushi">添加完收款账号请联系59经纪人处理提现，以免影响到账时间！</p>
    <div class="borderes1"></div>
    <p class="zhushi01">遇到问题请随时联系我们：</p>
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

}
</script>

<style lang="scss" scoped>
.withdra {
  padding: 50px 60px 0 60px;
  box-sizing: border-box;
  .rule {
    box-sizing: border-box;
    padding: 0 20px 0 20px;
    width: 100%;
    height: 40px;
    background: #fffdf6;
    border: 1px solid #ffedc6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .one {
      font-size: 16px;
      font-family: Microsoft YaHei;
      color: #9a9a9a;
    }
    .two {
      font-size: 16px;
      font-family: Microsoft YaHei;
      color: #0296f6;
    }
  }
  .dqye {
    margin-top: 60px;
    .dqye01 {
      font-size: 20px;
      font-family: Microsoft YaHei;
      color: #343434;
      margin-left: 90px;
    }
    .dqye02 {
      font-size: 28px;
      font-family: Microsoft YaHei;
      color: #ff3636;
      margin-left: 50px;
    }
  }
  .txje {
    margin-top: 50px;
    .txje01 {
      font-size: 20px;
      font-family: Microsoft YaHei;
      color: #343434;
      margin-left: 90px;
    }
    .txje02 {
      margin-left: 50px;
    }
  }
  .txjed {
    margin-top: 35px;
    .txjed01 {
      font-size: 20px;
      font-family: Microsoft YaHei;
      color: #343434;
      margin-left: 110px;
    }
    .txjed02 {
      margin-left: 50px;
    }
  }
  .btnn {
    margin-top: 27px;
    span {
      display: block;
      width: 430px;
      line-height: 70px;
      background: linear-gradient(0deg, #ff8c45, #ff684a);
      box-shadow: 0px 0px 20px 0px rgba(255, 72, 121, 0.35);
      border-radius: 10px;
      cursor: pointer;
      text-align: center;
      font-size: 20px;
      font-family: Microsoft YaHei;
      color: #ffffff;
      margin-left: 247px;
    }
  }
  ::v-deep.el-input {
    width: 430px;
    height: 50px;
    .el-input__inner {
      width: 430px;
      height: 50px;
      border-radius: 10px;
    }
  }
  .borderes {
    margin-top: 55px;
    width: 100%;
    height: 1px;
    background: #f4f4f4;
  }
  .zhushi {
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #666666;
    line-height: 30px;
  }
  .borderes1 {
    margin-top: 20px;
    width: 100%;
    height: 1px;
    background: #f4f4f4;
  }
  .one01 {
    height: 100px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .onecent1 {
      width: 400px;
      height: 60px;
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
      height: 60px;
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
  .zhushi01 {
    margin-top: 20px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #666666;
    line-height: 30px;
  }
}
</style>