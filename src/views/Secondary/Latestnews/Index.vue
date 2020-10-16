<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="latesnew">
      <div class="new01">
        <div class="container advertising">
          <div class="advert-one"></div>
          <div class="advert-two">最新资讯</div>
        </div>
      </div>
      <div class="container-fluid new02">
        <div class="container new_1">
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
        </div>
        <div class="container new_2"></div>
        <div class="container new_1">
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
        </div>
      </div>
      <div class="new01">
        <div class="container advertising">
          <div class="advert-one"></div>
          <div class="advert-two">专题活动</div>
        </div>
      </div>
      <div class="container-fluid new02">
        <div class="container new_1">
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
        </div>
        <div class="container new_2"></div>
        <div class="container new_1">
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
          <div class="one">
            <img src="@/assets/imge/banner_zixun1.png"
                 alt="">
            <p>59担保网,让虚拟资产交易更安心</p>
          </div>
        </div>
      </div>
      <div class="new03 container-fluid">

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
.latesnew {
  padding: 140px 0 0px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .new01 {
    height: 90px;
    .advertising {
      margin-top: 30px;
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
  }
  .new02 {
    height: 760px;
    background: #ffffff;
    .new_1 {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      box-sizing: border-box;
      .one {
        width: 406px;
        height: 340px;
        p {
          margin-top: 10px;
          text-align: center;
          font-family: Microsoft YaHei;
          color: #666666;
        }
      }
    }
    .new_2 {
      width: 1330px;
      height: 1px;
      background: #f4f4f4;
    }
  }
  .new03 {
    height: 120px;
    background: #f4f4f4;
  }
}
</style>