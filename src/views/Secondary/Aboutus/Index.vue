<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="aboutus">
      <div class="support01 container-fluid">
        <div class="container suppor">
          <h1 class="one">59担保网</h1>
          <div style="  margin-top: 75px;">
            <span>|</span>
            <span :class="{actives1:$route.path=='/aboutus'}">
              <router-link to="/aboutus">公司简介</router-link>
            </span>
            <span>|</span>
            <span :class="{actives1:$route.path=='/aboutus/joinus'}">
              <router-link to="/aboutus/joinus">加入我们</router-link>
            </span>
            <span>|</span>
            <span :class="{actives1:$route.path=='/aboutus/loking'}">
              <router-link to="/aboutus/loking">诚聘英才</router-link>
            </span>
            <span>|</span>
            <span>公司资质</span>
            <span>|</span>
            <span :class="{actives1:$route.path=='/aboutus/business'}">
              <router-link to="/aboutus/business">商务合作</router-link>
            </span>
            <span>|</span>
          </div>
        </div>
      </div>
      <router-view></router-view>
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
.aboutus {
  width: 100%;
  padding: 140px 0 0px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .support01 {
    height: 300px;
    background: url("~@/assets/imge/bg_guanyuwomen.png") no-repeat;
    background-size: 100% 100%;
    .suppor {
      padding-top: 63px;
      box-sizing: border-box;
      .one {
        font-size: 60px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
      }
      span {
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        margin-left: 53px;
        a {
          color: #ffffff;
        }
      }
      .actives1 {
        a {
          color: #2798ce;
        }
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
}
</style>