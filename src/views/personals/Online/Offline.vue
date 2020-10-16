<template>
  <div class="offline">
    <img class="line_img"
         src="@/assets/imge/chongzhilc.jpg"
         alt="">
    <p class="p_title">备注：</p>
    <p class="p_conter"
       style="margin-top:25px;">1. 为保障资金安全，充值金额在5000元以上的，建议采用银行汇款；</p>
    <p class="p_conter"> 2. 本站交易价格均为未含税价格，如果需要开具发票，请另行交纳税点；</p>
    <p class="p_conter">3. 担保网账户不允许从事无真实交易背景的虚假交易、信用卡套现或洗钱等禁止的交易行为，否则充值款项将不能提现。</p>
    <div class="transfer">
      银行汇款
    </div>
    <div class="branks">
      <div class="brank01">
        <img src="@/assets/imge/pic_zhaoshangyinhang.png"
             alt="">
      </div>
      <div class="brank02">
        <p class="brank_01">公司名称：苏州智汇魔方网络科技有限公司</p>
        <p class="brank_01">开户银行：招商银行股份有限公司苏州独墅湖支行</p>
        <p class="brank_01">银行账号：5929 **** 8810 701</p>
        <p class="brank_02">汇款后5分钟内系统会自动入账，如未到账请联系担保网经纪人。</p>
        <p class="brank_01">将以上账号，免费发送到手机：15711673739 <span class="brank_03">发送短信</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.offline {
  margin-top: 60px;
  .line_img {
    width: 890px;
    height: 80px;
    margin: 0 auto;
  }
  .p_title {
    margin-top: 20px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #343434;
  }
  .p_conter {
    font-size: 18px;
    font-family: Microsoft YaHei;
    color: #666666;
    line-height: 30px;
  }
  .transfer {
    margin-top: 30px;
    width: 100%;
    line-height: 60px;
    background: #f4f4f4;
    text-align: center;
    font-size: 28px;
    font-family: Microsoft YaHei;
    color: #666666;
  }
  .branks {
    margin-top: 30px;
    width: 100%;
    height: 220px;
    background: #ffffff;
    border: 1px solid #f4f4f4;
    border-radius: 10px;
    display: flex;
    .brank01 {
      width: 290px;
      height: 100%;
      border-right: 1px solid #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .brank02 {
      width: 600px;
      height: 100%;
      padding: 25px 0 0 50px;
      box-sizing: border-box;
      .brank_01 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #343434;
        line-height: 30px;
        .brank_03 {
          line-height: 30px;
          width: 120px;
          display: inline-block;
          background: #ff9000;
          text-align: center;
          color: #ffffff;
          border-radius: 5px;
          cursor: pointer;
          margin-left: 10px;
        }
      }
      .brank_02 {
        font-size: 16px;
        font-weight: 300;
        color: #cccccc;
        line-height: 40px;
      }
    }
  }
}
</style>