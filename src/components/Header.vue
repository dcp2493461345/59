<template>
  <div class="Headers">
    <div class="container header">
      <div @click="returnhome">
        <img style="width:169px;height:59px;"
             src="@/assets/imge/logo.png"
             alt="">
      </div>
      <div class="searchess">
        <input type="text"
               style="color:#000000"
               v-model="contentpitc">
        <span @click="searches"
              class="search-btn">
          搜索
        </span>
      </div>
      <div class="top-nav-menu">
        <ul v-show="!show">
          <li>消息</li>
          <li @click="toroutr"
              class="showe">登录</li>
          <li @click="registers">注册</li>
        </ul>
        <ul v-show="show">
          <li class="tixingxiaoxi"
              @click="xiaoxitiaozhuan">消息
            <span class="yuandain">{{totales}}</span>
          </li>
          <li class="shuxian"></li>
          <li @click="personal"
              class="usernames">
            <p style="margin-top:-8px;">欢迎使用~</p>
            <p>{{username.username}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="navType-box container">
      <div>
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li :class="{active001:$route.path.indexOf('/consignment')>-1}">
            <router-link to="/consignment">网站寄售</router-link>
          </li>
          <li :class="{active001:$route.path.indexOf('/subpage')>-1}">
            <router-link to="/subpage">任务大厅</router-link>
          </li>
          <li :class="{active001:$route.path.indexOf('/newmedia')>-1}">
            <router-link to="/newmedia">新媒体</router-link>
          </li>
          <li :class="{active001:$route.path.indexOf('/trading')>-1}">
            <router-link to="/trading">APP交易</router-link>
          </li>
          <li :class="{active001:$route.path.indexOf('/domainname')>-1}">
            <router-link to="/domainname">域名交易</router-link>
          </li>
          <li :class="{active001:$route.path.indexOf('/onlinetrading')>-1}">
            <router-link to="/onlinetrading">网店交易</router-link>
          </li>
          <li :class="{active001:$route.path.indexOf('/latestnews')>-1 }">
            <router-link to="/latestnews">最新资讯</router-link>
          </li>
          <li :class="{active001:$route.path=='/support'}">
            <router-link to="/support">帮助中心</router-link>
          </li>
          <li :class="{active001:$route.path=='/aboutus'}">
            <router-link to="/aboutus">关于我们</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import local from "@/utils/local";
export default {
  data () {
    return {
      show: false,
      username: {},
      contentpitc: ''

    };
  },
  created () {
    if (local.get('username')) {
      this.username = local.get('username')

    }
    if (sessionStorage.getItem("tokeness")) {
      this.show = true
    }
  },
  computed: {
    totales () {
      return this.$store.state.total
    }
  },
  methods: {
    xiaoxitiaozhuan () {
      this.$router.push('/personal/message')
      this.$bus.$emit("updataes");
    },
    searches () {
      if (this.contentpitc == "网站寄售") {
        this.$router.push({ name: 'Consignment' })
      } else if (this.contentpitc == "新媒体") {
        this.$router.push({ name: 'Newmedia' })
      } else if (this.contentpitc == "APP交易") {
        this.$router.push({ name: 'Trading' })
      } else if (this.contentpitc == "任务大厅") {
        this.$router.push({ name: 'Subpage' })
      } else if (this.contentpitc == "域名交易") {
        this.$router.push({ name: 'Domainname' })
      } else if (this.contentpitc == "网店交易") {
        this.$router.push({ name: 'Onlinetrading' })
      } else {
        this.$router.push({ name: 'Consignment' })
      }
      this.contentpitc = ''
    },
    returnhome () {
      this.$router.push("/")
    },
    toroutr () {
      this.$router.push("/login")
    },
    registers () {
      this.$router.push("/register")
    },
    personal () {
      this.$router.push("/personal")

    },
  }
}
</script>

<style lang="scss" scoped>
.Headers {
  position: fixed;
  display: block;
  top: 0;
  height: 140px;
  padding-top: 28px;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
  z-index: 200;
  min-width: 1200px;
  border-bottom: 1px solid #fafafa;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.04);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 1680px;
    .searchess {
      width: 680px;
      position: relative;
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0 100px 0 16px;
        height: 40px;
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 16px;
        border: 1px solid rgba(23, 161, 255, 0.65);
      }
      .search-btn {
        width: 98px;
        height: 39px;
        background: #17a1ff;
        text-align: center;
        position: absolute;
        border-radius: 0 3px 3px 0;
        right: 0;
        top: 0;
        color: #fff;
        line-height: 39px;
      }
      input:focus,
      textarea:focus {
        outline: none;
        border: 1px solid rgba(23, 161, 255, 0.65); /*跟进textarea背景颜色来定*/
      }
    }
    .top-nav-menu {
      ul {
        display: flex;
        li {
          width: 80px;
          text-align: center;
          line-height: 40px;
          font-size: 14px;
        }
        .tixingxiaoxi {
          width: 80px;
          line-height: 40px;
          background: #e3e3e3;
          border-radius: 15px;
          margin-right: 20px;
          position: relative;
        }
        .shuxian {
          width: 4px;
          height: 40px;
          background: #eaeaea;
          margin-right: 10px;
        }
        .usernames {
          width: 100px;
          height: 40px;
          color: #333333;
          font-size: 14px;
          p {
            height: 18px;
          }
        }
        .showe {
          color: #ffffff;
          background: url('~@/assets/imge/btn_wode denglu.png');
          background-size: 100% 100%;
          line-height: 40px;
        }
      }
    }
  }
  .navType-box {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    div {
      width: 740px;
      ul {
        display: flex;
        li {
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
          font-size: 14px;
          margin-right: 15px;
          cursor: pointer;
          position: relative;
        }
        li:hover a {
          color: #ff7348;
        }
        li:hover::after {
          transform: translateX(-50%);
          height: 3px;
          border-radius: 2px;
          position: absolute;
          bottom: -14px;
          left: 50%;
          content: '';
          background-color: #ff7348;
          width: 32px;
        }
        .active001 {
          a {
            color: #ff7348;
          }
        }
        .active001::after {
          transform: translateX(-50%);
          height: 3px;
          border-radius: 2px;
          position: absolute;
          bottom: -14px;
          left: 50%;
          content: '';
          background-color: #ff7348;
          width: 32px;
        }
      }
    }
  }
}
.yuandain {
  display: block;
  width: 20px;
  text-align: center;
  line-height: 20px;
  background: #ff3636;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  top: 0px;
  color: #fff;
}
</style>