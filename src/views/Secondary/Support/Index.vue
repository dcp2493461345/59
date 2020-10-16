<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="support">
      <div class="support01 container-fluid">
        <div class="container suppor">
          <div class="one"></div>
          <div class="two">帮助中心</div>
          <div class="three">帮助您解决问题 您身边的贴心助手</div>
        </div>
      </div>
      <div class="container-fluid "
           style=" background: #f4f4f4;">
        <div class="container advertising">
          <div class="advert-one"></div>
          <div class="advert-two">快捷自助服务</div>
        </div>
      </div>
      <div class="support02 container-fluid">
        <div class="container support021">
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
          </div>
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
          </div>
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
          </div>
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
          </div>
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
          </div>
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
          </div>
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
          </div>
          <div class="sup1">
            <div class="sup1_1">
              <img src="@/assets/imge/pic_zijinchongzhi.png"
                   alt="">
            </div>
            <div class="sup1_2">
              <p class="one">资金充值</p>
              <p class="two">支持网银 线下充值支持网银 线下充值支持网银 线下充值</p>
            </div>
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
            <img src="@/assets/imge/ic_jiaoyiliucheng.png"
                 alt="">
            <p>交易流程</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/ic_jiaoyiliucheng.png"
                 alt="">
            <p>交易流程</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/ic_jiaoyiliucheng.png"
                 alt="">
            <p>交易流程</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/ic_jiaoyiliucheng.png"
                 alt="">
            <p>交易流程</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/ic_jiaoyiliucheng.png"
                 alt="">
            <p>交易流程</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/ic_jiaoyiliucheng.png"
                 alt="">
            <p>交易流程</p>
          </div>
        </div>
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
  created () {

  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.support {
  width: 100%;
  padding: 140px 0 0px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .support01 {
    height: 300px;
    background: url("~@/assets/imge/bg_bangzhuzhongxin.png") no-repeat;
    background-size: 100% 100%;
    .suppor {
      padding-top: 63px;
      box-sizing: border-box;
      .one {
        width: 74px;
        height: 6px;
        background: #ffffff;
      }
      .two {
        font-size: 48px;
        font-family: Microsoft YaHei;
        color: #ffffff;
        margin-top: 24px;
      }
      .three {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        margin-top: 35px;

        color: #ffffff;
      }
    }
  }
  .advertising {
    margin-top: 40px;
    padding-bottom: 30px;
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
    height: 320px;
    background: #ffffff;
    .support021 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .sup1 {
        width: 310px;
        height: 70px;
        margin-top: 60px;
        display: flex;
        .sup1_1 {
          width: 70px;
          height: 70px;
        }
        .sup1_2 {
          margin-left: 20px;
          .one {
            font-size: 24px;
            line-height: 32px;
            font-family: Microsoft YaHei;
            color: #333333;
          }
          .two {
            width: 223px;
            line-height: 20px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            color: #999999;
          }
        }
      }
    }
  }
  .support03 {
    height: 350px;
    background: #f4f4f4;
    .sup-01 {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .one {
        width: 190px;
        height: 190px;
        background: #ffffff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 62px;
          height: 59px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>