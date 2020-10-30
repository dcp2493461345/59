<template>
  <div>
    <Header></Header>
    <div class="container-fluid bannghj">
      <div class="bannerss container">
        <div class="parg">
          <div class="parg_01">
            <p>上午好，用户123</p>
            <p>ID：123654789</p>
            <img class="datubiao"
                 src="@/assets/imge/pic_huiyuan.png"
                 alt="">
            <br>
            <img class="xiaotubiao"
                 src="@/assets/imge/ic_huiyuan.png"
                 alt="">
            <span class="miaosu">Lv1普通会员</span>
          </div>
          <div class="parg_02">
            <ul>
              <li @click="dianiji"
                  :class="{active:flag== 1}">
                <router-link to="/personal">账号中心</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 9}">
                <router-link to="/personal/order">我的订单</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 2}">
                <router-link to="/personal/guarantee">我的担保</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 8}">
                <router-link to="/personal/online">在线充值</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 3}">
                <router-link to="/personal/recharge">充值记录</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 4}">
                <router-link to="/personal/withdrawal">余额提现</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 5}">
                <router-link to="/personal/record">提现记录</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 6}">
                <router-link to="/personal/billing">账务明细</router-link>
              </li>
              <li @click="dianiji"
                  :class="{active:flag== 7}">
                <router-link to="/personal/message">消息中心</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="parg1">
          <router-view></router-view>
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
    this.dianiji()
    this.$bus.$on("updataes", () => {
      this.flag = 7
    })

  },
  data () {
    return {
      flag: 1
    }
  },
  methods: {

    dianiji () {
      setTimeout(() => {
        if (this.$route.path === '/personal') {
          this.flag = 1
        }
        if (this.$route.path === '/personal/guarantee' || this.$route.path === '/personal/guarantee/acccepted' || this.$route.path === '/personal/guarantee/notaccept' || this.$route.path === '/personal/guarantee/hrejected') {
          this.flag = 2
        }
        if (this.$route.path === '/personal/recharge' || this.$route.path === '/personal/recharge/store') {
          this.flag = 3
        }
        if (this.$route.path === '/personal/withdrawal') {
          this.flag = 4
        }
        if (this.$route.path === '/personal/record' || this.$route.path === '/personal/record/helpwith') {
          this.flag = 5
        }
        if (this.$route.path === '/personal/billing') {
          this.flag = 6
        }
        if (this.$route.path === '/personal/message' || this.$route.path === '/personal/message/inform') {
          this.flag = 7
        }
        if (this.$route.path === '/personal/online' || this.$route.path === '/personal/online/opayment') {
          this.flag = 8
        }
        if (this.$route.path === '/personal/order') {
          this.flag = 9
        }
      }, 100);
    }
  }
}
</script>

<style lang="scss" scoped>
.bannghj {
  padding: 160px 0 30px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .bannerss {
    height: 800px;
    width: 1280px;
    // background: #ffffff;
    // box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
    // border-radius: 10px;
    // padding: 60px 40px 50px;
    display: flex;
    justify-content: space-between;
    .parg {
      width: 260px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .parg_01 {
        width: 100%;
        height: 240px;
        background: linear-gradient(0deg, #ffe3ae, rgba(255, 227, 174, 0));
        border-radius: 10px;
        text-align: center;
        padding-top: 26px;
        box-sizing: border-box;
        p {
          text-align: center;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: #666666;
        }
        .datubiao {
          margin-top: 16px;
          margin-bottom: 16px;
        }
        .miaosu {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: #343434;
        }
      }
      .parg_02 {
        width: 100%;
        height: 530px;
        background: #ffffff;
        text-align: center;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px 0;
        ul {
          .active {
            width: 260px;
            line-height: 58px;
            box-sizing: border-box;
            background: #f7faff;
            border-left: 4px solid #0296f6;
            color: #0296f6;
            cursor: pointer;
            a {
              color: #0296f6;
            }
          }
          li {
            width: 260px;
            line-height: 58px;
            background: #ffffff;
            box-sizing: border-box;
            border-left: 4px solid #ffffff;
            color: #666666;
            cursor: pointer;
            a {
              display: block;
              width: 100%;
              height: 100%;
            }
            a:hover {
              color: #0296f6;
            }
          }
          li:hover {
            color: #0296f6;
          }
        }
      }
    }
    .parg1 {
      width: 990px;
      height: 100%;
      background: #ffffff;
      border-radius: 10px;
    }
  }
}
</style>