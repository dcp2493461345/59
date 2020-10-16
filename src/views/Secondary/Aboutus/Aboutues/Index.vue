<template>
  <div>
    <div class="about01 container-fluid">
      <div class="container aboutus1">
        <p>随着互联网资产的交易日益增多，很多时候需要一个可靠的第三方平台来进行担保交易，以保障交易的顺利进行，在这种强需求的大环境下，苏州智汇魔方网络科技有限公司成立了力求让担保交易更安全，更简单的担保网项目，立志服务好互联网广大从业人员保证好互联网买卖双方的利益。</p>
        <p>59danbao.cn专业提供域名、网站、自媒体账号（包括但不限于微信公众号、今日头条号、百度百家号、搜狐自媒体号等）、游戏账号、流量买卖、程序源码、建站美工等交易担保服务。59danbao.cn作为互联网资产担保平台，力求让线上交易更加安全高效，为买卖双方提供全方位的交易保护</p>
      </div>
    </div>
    <div class="container-fluid "
         style=" background: #f4f4f4;">
      <div class="container advertising">
        <div class="advert-one"></div>
        <div class="advert-two">我们的优势</div>
      </div>
    </div>
    <div class="support02 container-fluid">
      <div class="container support021">
        <div class="sup1">
          <img src="@/assets/imge/pic_chaozhishouxufei.png"
               alt="">
          <p class="one">超值手续费</p>
          <p class="two">手续费最低可达2%</p>
        </div>
        <div class="sup1">
          <img src="@/assets/imge/pic_chaozhishouxufei.png"
               alt="">
          <p class="one">超值手续费</p>
          <p class="two">手续费最低可达2%</p>
        </div>
        <div class="sup1">
          <img src="@/assets/imge/pic_chaozhishouxufei.png"
               alt="">
          <p class="one">超值手续费</p>
          <p class="two">手续费最低可达2%</p>
        </div>
        <div class="sup1">
          <img src="@/assets/imge/pic_chaozhishouxufei.png"
               alt="">
          <p class="one">超值手续费</p>
          <p class="two">手续费最低可达2%</p>
        </div>
        <div class="sup1">
          <img src="@/assets/imge/pic_chaozhishouxufei.png"
               alt="">
          <p class="one">超值手续费</p>
          <p class="two">手续费最低可达2%</p>
        </div>
        <div class="sup1">
          <img src="@/assets/imge/pic_chaozhishouxufei.png"
               alt="">
          <p class="one">超值手续费</p>
          <p class="two">手续费最低可达2%</p>
        </div>
      </div>
    </div>
    <div class="container-fluid"
         style=" background: #f4f4f4;">
      <div class="container advertising">
        <div class="advert-one"></div>
        <div class="advert-two">常见问题</div>
      </div>
    </div>
    <div class="container-fluid support03">
      <div class="container sup-01">
        <div class="one">
        </div>
        <div class="one">
        </div>
        <div class="one">
        </div>
        <div class="one">
        </div>
        <div class="one">
        </div>
        <div class="one">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about01 {
  .aboutus1 {
    p {
      font-size: 20px;
      font-family: Microsoft YaHei;
      color: #333333;
      line-height: 35px;
      margin-top: 32px;
    }
  }
}
.support03 {
  height: 690px;
  background: #f4f4f4;
  .sup-01 {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
    .one {
      width: 406px;
      height: 240px;
      // background: url("")
      background: red;
      margin-bottom: 32px;
    }
  }
}
.advertising {
  margin-top: 40px;
  padding-bottom: 50px;
  display: flex;
  .advert-one {
    width: 10px;
    height: 50px;
    background: rgba(76, 86, 207, 1);
  }
  .advert-two {
    font-size: 40px;
    line-height: 50px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(59, 59, 59, 1);
    margin-left: 22px;
  }
}
.support02 {
  background: #ffffff;
  .support021 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sup1 {
      width: 426px;
      height: 356px;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        margin-top: 49px;
      }
      .one {
        font-size: 30px;
        font-family: Microsoft YaHei;
        color: #333333;
        margin-top: 29px;
      }
      .two {
        font-size: 20px;
        font-family: Microsoft YaHei;
        color: #999999;
        line-height: 30px;
        margin-top: 33px;
      }
    }
  }
}
</style>