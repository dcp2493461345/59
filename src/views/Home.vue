<template>
  <div style="width:100%; min-width:1440px;">
    <div style="width:100%; background: #4c56cf;margin-bottom:30px;">
      <!-- 头部 -->
      <div class="home container">
        <div class="icon">
          <!-- <div class="icon_tu"
               @click="personal"
               style="cursor: pointer;">
            <img src="@/assets/imge/touxiang.jpg"
                 alt="">
          </div>
          <div class="icon-yh "
               @click="personal"
               style="cursor: pointer;">
            <p>欢迎使用</p>
            <p>{{username.username}}</p>
          </div> -->
        </div>
        <div class="nav-dao"
             v-if="!showes">
          <ul>
            <li class="nav-xiao" @click="xiaoxitiaozhuan">消息
              <span class="yuandain">{{totales}}</span>
            </li>
            <li class="shuxian"></li>
            <li class="usernames">
              <p>欢迎使用~</p>
              <p class="p_one2">用户名{{username.username}}
                <span class="xialakuan">
                  <ul class="xialashuju">
                    <li @click="personal">个人中心</li>
                    <li @click="personales">我的订单</li>
                    <li @click="logout">退出登录</li>
                  </ul>
                </span>
              </p>

            </li>
          </ul>
        </div>
        <div class="nav-dao1"
             v-if="showes">
          <ul>
            <li @click="toroutr"
                class="li-two">登录</li>
            <li @click="registers">注册</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 搜索 -->
    <div class="mai0 container">
      <div class="left-logo">
        <img src="@/assets/imge/logo.png"
             alt="">
      </div>
      <div>
        <div class="serch">
          <img class="imges"
               src="@/assets/imge/ic_sousuo.png"
               alt="">
          <div class="shu"></div>
          <input type="text"
                 v-model="contentpitc"
                 placeholder="输入关键词...">
          <div class="serch-one"
               @click="searches">搜索</div>
        </div>
        <div class="reserch">
          <span>热门搜索:</span>
          <span @click="pitches">网站寄售</span>
          <span @click="pitches1">域名交易</span>
          <span @click="pitches2">任务大厅</span>
          <span @click="pitches3">新媒体</span>
          <span @click="pitches4">APP交易</span>
        </div>
      </div>
      <div>
        <div class="right-logo"
             @click="secured">担保交易</div>
        <div class="reserch">
        </div>
      </div>
    </div>
    <div class="mai1 container">
      <div class="left">
        热门推荐
      </div>
      <div class="conter">
        <ul>
          <li style="margin-left: 66px;">
            <router-link to="/trading">APP交易</router-link>
          </li>
          <li style="margin-left: 66px;">
            <router-link to="/domainname">域名交易</router-link>
          </li>
          <li style="margin-left: 66px;">
            <router-link to="/onlinetrading">网店交易</router-link>
          </li>
          <li style="margin-left: 66px;cursor: pointer;">
            <router-link to="/newmedia">新媒体</router-link>
          </li>
          <li style="margin-left: 33px;">|</li>
          <li style="margin-left: 33px;color:#4C56CF;!important">
            <router-link to="/support">帮助中心</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 轮播图 热门推荐 -->
    <div class="banner">
      <div class="fuji container">
        <div class="banner-one">
          <div class="frame"
               v-for="(item,index) in shangping"
               :key="index">
            <p class="subtitlees">
              <span>{{item.name}}</span>
              <span>></span>
            </p>
            <ul>
              <li>
                <p class="subtitle">
                  <span v-for="(v,i) in item.data_list"
                        :key="i">{{v.name}}</span>
                </p>
                <dl class="sideNavone">
                  <dt>
                    <span class="first"></span>
                    <span class="two">全部</span>
                  </dt>
                  <dd>
                    <a href="#"
                       v-for="(v,i) in item.data_list"
                       :key="i"
                       @click="pitch(item,i)">{{v.name}}</a>

                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div class="banner-two">
          <!-- <img :src="dataList[currentIndex]">
          <div class="page"
               v-if="this.dataList.length > 1">
            <ul>
              <li @click="gotoPage(prevIndex)">&lt;</li>
              <li v-for="(item,index) in dataList"
                  @click="gotoPage(index)"
                  :class="{'current':currentIndex == index}"
                  :key="index"> </li>
              <li @click="gotoPage(nextIndex)">&gt;</li>
            </ul>
          </div> -->
          <div class="block">
            <el-carousel height="559px">
              <el-carousel-item v-for="(item,index) in dataList"
                                :key="index">
                <img :src="item"
                     alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="banner-three">
          <div class="contter">
            <div class="imgess1"
                 style="cursor: pointer;">
              内容丰富 操作简便
            </div>
            <div class="imgess2"
                 style="cursor: pointer;">
              品质如一 值得信赖
            </div>
            <div class="imgess3"
                 style="cursor: pointer;">
              全面升级 全新体验
            </div>
          </div>
        </div>
      </div>
      <div class="container protection">
        <div class="protectionone">
          <span>59权益 安心保障</span>
        </div>
      </div>
      <div class="container bannerbiao">
        <div>
          <img src="@/assets/imge/pic_danbao1.png"
               alt="">
          <p>
            59平台经纪人，买家，卖家三方组建一个QQ讨论组
          </p>
        </div>
        <div>
          <img src="@/assets/imge/pic_danbao2.png"
               alt="">
          <p>
            买卖双方就交易内容放款时间达成一致
          </p>
        </div>
        <div>
          <img src="@/assets/imge/pic_danbao3.png"
               alt="">
          <p>
            买卖将交易资金托管到59担保网，平台产生交易订单
          </p>
        </div>
        <div>
          <img src="@/assets/imge/pic_danbao4.png"
               alt="">
          <p>
            卖方提供和服务或者开始发货，买方确认收到服务或者产品
          </p>
        </div>
        <div>
          <img src="@/assets/imge/pic_danbao5.png"
               alt="">
          <p>
            59担保网将买方托管资金支付给卖方，交易完成
          </p>
        </div>
      </div>
      <div class="container advertising">
        <div class="advert-one"></div>
        <div class="advert-two">59优选广告</div>
      </div>
      <div class="container recruit">
        <div>
          <img src="@/assets/imge/pic_guanggao1.png"
               alt="">
          <div class="recruit_one">
            <p v-for="(item,index) in youxuanguangao"
               :key="index">
              <a :href="item.skip_url"
                 target="_blank">{{item.title}}</a>
            </p>
          </div>
        </div>
        <div>
          <img src="@/assets/imge/pic_guanggao2.png"
               alt="">
          <div class="recruit_one">
            <p v-for="(item,index) in youxuanguangao1"
               :key="index">
              <a :href="item.skip_url"
                 target="_blank">{{item.title}}</a>
            </p>
          </div>
        </div>
        <div>
          <img src="@/assets/imge/pic_guanggao3.png"
               alt="">
          <div class="recruit_one">
            <p v-for="(item,index) in youxuanguangao2"
               :key="index">
              <a :href="item.skip_url"
                 target="_blank">{{item.title}}</a>
            </p>
          </div>
        </div>
        <div>
          <img src="@/assets/imge/pic_guanggao4.png"
               alt="">
          <div class="recruit_one">
            <p v-for="(item,index) in youxuanguangao3"
               :key="index">
              <a :href="item.skip_url"
                 target="_blank">{{item.title}}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="container advertising">
        <div class="advert-one"></div>
        <div class="advert-two">我们可以担保什么</div>
      </div>
    </div>
    <!-- -->
    <div class="guarantee container-fluid">
      <div class="container guaranteeones">
        <div class="guarantee_one">
          <img src="@/assets/imge/pic_kedanbao1.png"
               alt="">
          <p class="guarantee_two">
            网站，域名，APP
          </p>
          <p class="guarantee_three">依托优质互联网创业圈资源，在网站、域名、app等互联网资产担保中交易额持续增长，让线上交易更安全靠谱，线上担保就上59danbao.cn</p>
          <span class="guarantee_four"
                @click="Immediately">
            立即前往
          </span>
        </div>
        <div class="guarantee_one">
          <img src="@/assets/imge/pic_kedanbao2.png"
               alt="">
          <p class="guarantee_two">
            自媒体账号
          </p>
          <p class="guarantee_three">自媒体账号包含各个平台的自媒体账号，比如微信公众号、今日头条、一点资讯 、搜狐、百度百家、网易、UC大鱼号等各种自媒体账号皆可</p>
          <span class="guarantee_four"
                @click="Immediately1">
            立即前往
          </span>
        </div>
        <div class="guarantee_one">
          <img src="@/assets/imge/pic_kedanbao3.png"
               alt="">
          <p class="guarantee_two">
            网店交易
          </p>
          <p class="guarantee_three">以专注“网店交易 用心服务”为核心价值，以“帮助电商成长”为使命！59danbao.cn网店交易竭诚为您服务，线上担保上59danbao.cn更靠谱</p>
          <span class="guarantee_four"
                @click="Immediately2">
            立即前往
          </span>
        </div>
        <div class="guarantee_one">
          <img src="@/assets/imge/pic_kedanbao4.png"
               alt="">
          <p class="guarantee_two">
            海量模板
          </p>
          <p class="guarantee_three">内置数百个网站数据源，全面覆盖多个行业，只需简单设置，就可快速准确获取数据</p>
          <span class="guarantee_four"
                @click="Immediately4">
            立即前往
          </span>
        </div>
        <div class="guarantee_one">
          <img src="@/assets/imge/pic_kedanbao5.png"
               alt="">
          <p class="guarantee_two">
            简单易用
          </p>
          <p class="guarantee_three">无需再学爬虫编程技术，简单三步就可以轻松抓取网页数据，支持多种格式一键导出，快速导入数据库</p>
          <span class="guarantee_four"
                @click="Immediately4">
            立即前往
          </span>
        </div>
        <div class="guarantee_one">
          <img src="@/assets/imge/pic_kedanbao6.png"
               alt="">
          <p class="guarantee_two">
            稳定高效
          </p>
          <p class="guarantee_three">分布式云集群服务器和多用户协作管理平台的支撑，可灵活调度任务，顺利爬取海量数据</p>
          <span class="guarantee_four"
                @click="Immediately4">
            立即前往
          </span>
        </div>
      </div>
    </div>
    <div class="deal container-fluid">
      <div class="container">
        <span class="deal01"
              @click="skip">
          现在开始交易
        </span>
      </div>
    </div>
    <!--委托  -->
    <div class="container-fluid delegate">
      <div class="container delegate01">
        <p class="delegate01_one">最新委托</p>
        <div class="delegate02">
          <div class="maine1">
            <div class="maine2">
              <p class="maine_1">网站委托</p>
              <p class="maine_2">WEBSITE DELEGATE</p>
            </div>
            <ul class="maine01">
              <li class="maine01_one"
                  v-for="(item,index) in wzwt.data"
                  :key="index">
                <span class="maine01_one-content01">
                  <a href="http://www.jd.com"
                     target="_blank"> {{item.text}}</a>
                </span>
                <span class="maine01_one-content02">{{item.time}}</span>
              </li>
            </ul>
          </div>
          <div class="maine1">
            <div class="maine2">
              <p class="maine_1">域名委托</p>
              <p class="maine_2">THE DOMAIN NAME</p>
            </div>
            <ul class="maine01">
              <li class="maine01_one"
                  v-for="(item,index) in ymwt.data"
                  :key="index">
                <span class="maine01_one-content01">
                  <a href="http://www.jd.com"
                     target="_blank"> {{item.text}}</a>
                </span>
                <span class="maine01_one-content02">{{item.time}}</span>
              </li>
            </ul>
          </div>
          <div class="maine1">
            <div class="maine2">
              <p class="maine_1">自媒体委托</p>
              <p class="maine_2">WE MEDIA COMMISSION</p>
            </div>
            <ul class="maine01">
              <li class="maine01_one"
                  v-for="(item,index) in zmtwt.data"
                  :key="index">
                <span class="maine01_one-content01">
                  <a href="http://www.jd.com"
                     target="_blank"> {{item.text}}</a>
                </span>
                <span class="maine01_one-content02">{{item.time}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid cooperative">
      <div class="container advertising">
        <div class="advert-one"></div>
        <div class="advert-two">合作客户</div>
      </div>
    </div>
    <!-- 右侧 侧边栏 -->
    <ul class="fixed-right">
      <li class="fixed-right-item">
        <a href="#"></a>
        <span class="icon icon1">
          <!-- <img src="@/assets/imge/ic_quanzhan vip.png"
               alt=""> -->
        </span>
        <span class="ziti">全站vip</span>
      </li>
      <li class="fixed-right-item">
        <router-link to="/boking">
          <span class="icon  icon2">
          </span>
          <span class="ziti">59经纪人</span>
        </router-link>
      </li>
      <li class="fixed-right-item">
        <a href="#"></a>
        <span class="icon icon3">
          <!-- <img src="@/assets/imge/ic_qiandao.png"
               alt=""> -->
        </span>
        <span class="ziti">每日 签到</span>
      </li>
      <li class="fixed-right-item">
        <a href="#"></a>
        <span class="icon icon4">
          <!-- <img src="@/assets/imge/ic_qq.png"
               alt=""> -->
        </span>
        <span class="ziti">QQ 联盟</span>
      </li>
      <li class="fixed-right-item">
        <a href="#"></a>
        <span class="icon icon5">
          <!-- <img src="@/assets/imge/ic_weixin.png"
               alt=""> -->
        </span>
        <span class="ziti">微信 礼包</span>
      </li>
      <li class="fixed-right-item">
        <a href="#"></a>
        <span class="icon icon6">
          <!-- <img src="@/assets/imge/ic_baoguang.png"
               alt=""> -->
        </span>
        <span class="ziti">曝光</span>
      </li>
      <li class="fixed-right-item">
        <a href="#"></a>
        <span class="icon icon7">
          <!-- <img src="@/assets/imge/ic_kefu.png"
               alt=""> -->
        </span>
        <span class="ziti">客服</span>
      </li>
      <li class="fixed-right-item"
          @click="toTop">
        <a href="#"></a>
        <span class="icon icon8">
          <!-- <img src="@/assets/imge/ic_top.png"
               alt=""> -->
        </span>
        <span class="ziti">TOP</span>
      </li>
    </ul>
    <!-- 页脚 -->
    <Floot></Floot>
    <!-- 顶部弹出的导航栏 -->
    <Navigation v-show="show"></Navigation>
    <el-dialog class="operates11"
               :visible.sync="isshow">
      <div class="one">
        <span class="one_2">发起担保交易</span>
      </div>
      <div class="conterentsd">
        <div class="left-from"
             style="width:657px;">
          <el-form ref="form"
                   :model="form"
                   label-width="144px">

            <el-form-item label="标题 ：">
              <el-input v-model="form.title"
                        placeholder="交易标题">></el-input>
              <span class="tishiy"
                    v-if="showts1"
                    style="color:red;">请输入标题</span>
            </el-form-item>
            <el-form-item label="交易内容 ：">
              <el-input type="textarea"
                        v-model="form.content"
                        placeholder="请简要说明交易的内容"></el-input>
              <span class="tishiy1"
                    v-if="showts2"
                    style="color:red;">请输入交易内容</span>
            </el-form-item>
            <el-form-item label="价格 ：">
              <el-input v-model="form.price"
                        placeholder="请输入您的交易价格"></el-input>
              <span class="tishiy"
                    v-if="showts3"
                    style="color:red;">请输入交易价格</span>
 <span class="tishiy"
                    v-if="showts11"
                    style="color:red;">价格格式错误</span>
            </el-form-item>
            <el-form-item label="买家联系方式 ：">
              <el-input v-model="form.buyer_contact"
                        placeholder="请输入买家的QQ或微信号">></el-input>
              <span class="tishiy"
                    v-if="showts4"
                    style="color:red;">请输入买家联系方式</span>
            </el-form-item>
            <el-form-item label="卖家联系方式 ：">
              <el-input v-model="form.seller_contact"
                        placeholder="请输入卖家的QQ或微信号"></el-input>
              <span class="tishiy"
                    v-if="showts5"
                    style="color:red;">请输入卖家联系方式</span>
              <span class="tishiy"
                    v-if="showts6"
                    style="color:red;">买家，卖家联系方式不能相同</span>
            </el-form-item>
            <el-form-item label="卖家联系方式 ："
                          class="thtone">
              <span class="ones"
                    @click="btnnes"
                    :class="{activeboking:flag==1}">我是卖家</span>
              <span class="ones"
                    @click="btnnes1"
                    :class="{activeboking:flag==2}">我是买家</span>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">
                <span style="color:#333">我已经阅读并同意</span>
                <span style="color:#0196F6">《59danbao.cn服务协议》</span>

              </el-checkbox>
            </el-form-item>
            <span class="tishiyu"
                  v-if="showts"
                  style="color:red;">请先阅读并同意服务协议</span>
            <el-form-item>
              <span class="btn"
                    @click="onSubmit">提交</span>
            </el-form-item>
          </el-form>
        </div>
        <div class="right-ewm">
          <!-- <div class="right_01">

          </div> -->
        </div>
      </div>

    </el-dialog>
  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
import local from "@/utils/local";
import { Getcategory, Getad, Secureddeal } from "@/api/account.js"

// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Floot from '@/components/Floot.vue'
export default {
  components: {
    Navigation,
    Floot
  },
  name: 'Home',
  data () {
    return {
      show: false,
      showes: true,
      // dataList: ["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg", "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg"],
      dataList: [],
      currentIndex: 0,   //默认显示图片
      timer: null,  //定时器
      isshow: false,
      flag: 1,
      checked: false,
      form: {
        title: '',//标题
        content: '',//内容
        price: '',//价格
        buyer_contact: '',//买家联系方式
        seller_contact: "",//卖家联系方式
      },
      username: {},
      shangping: [],
      youxuanguangao: [],//优选广告
      youxuanguangao1: [],//优选广告
      youxuanguangao2: [],//优选广告
      youxuanguangao3: [],//优选广告
      wzwt: {},//网址委托
      ymwt: {},//域名委托
      zmtwt: {},//自媒体委托
      showts: false,
      showts1: false,
      showts2: false,
      showts3: false,
      showts4: false,
      showts5: false,
      showts6: false,
      showts11:false,
      totol: 0,
      contentpitc: ''
    };
  },
  created () {
    this.runInv()
    if (local.get('username')) {
      this.username = local.get('username')
    }
    if (sessionStorage.getItem("tokeness")) {
      this.showes = false
    }
    this.Getcategory()
    this.Getad()
    console.log(this.$store.state.total, "11111111111");

  },
  computed: {
    //上一张
    prevIndex () {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex () {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
    totales () {
      return this.$store.state.total
    }
  },
  mounted () {
    // 监听页面滚动事件
    window.addEventListener("scroll", this.showSearch)
  },
  methods: {
    xiaoxitiaozhuan(){
      this.$router.push('/personal/message')
    },
    pitch (item, i) {
      if (item.name == "网站寄售") {
        this.$router.push({ name: 'Consignment', params: { num_id: i+1 } });
      }
      if (item.name == "新媒体") {
        this.$router.push({ name: 'Newmedia', params: { num_id:i+1 } });
      }
      if (item.name == "APP交易") {
        this.$router.push({ name: 'Trading', params: { num_id: i+1 } });
      }
      if (item.name == "任务大厅") {
        this.$router.push({ name: 'Subpage', params: { num_id: i+1 } });
      }
    },
    pitches () {
      this.contentpitc = "网站寄售"
    },
    pitches1 () {
      this.contentpitc = "域名交易"
    },
    pitches2 () {
      this.contentpitc = "任务大厅"
    },
    pitches3 () {
      this.contentpitc = "新媒体"
    },
    pitches4 () {
      this.contentpitc = "APP交易"
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
    //获取首页商品分类
    async Getcategory () {
      const data = await Getcategory({})
      data.data.pop()
      data.data.pop()
      this.shangping = data.data
    },
    //获取广告
    async Getad () {
      const data = await Getad({})
      console.log(data);
      // for(var i in data.data){
      //   console.log(i);
      // }
      console.log(data.data);

      var lunbo = data.data.lunbotu
      lunbo.data.forEach(v => {
        this.dataList.push(v.url)
      })
      this.youxuanguangao = data.data.yxgg1.data
      this.youxuanguangao1 = data.data.yxgg2.data
      this.youxuanguangao2 = data.data.yxgg3.data
      this.youxuanguangao3 = data.data.ysgg4.data
      data.data.wzwt.data.forEach(v => {
        v.time = this.formateDate(v.time)

      })
      data.data.ymwt.data.forEach(v => {
        v.time = this.formateDate(v.time)

      })
      data.data.zmtwt.data.forEach(v => {
        v.time = this.formateDate(v.time)

      })
      this.ymwt = data.data.ymwt
      this.zmtwt = data.data.zmtwt
      this.wzwt = data.data.wzwt
    },
    formateDate (datetime) {
      // let  = "2019-11-06T16:00:00.000Z"
      function addDateZero (num) {
        return (num < 10 ? "0" + num : num);
      }
      let d = new Date(datetime);
      let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate());
      return formatdatetime;
    },
    btnnes () {
      this.flag = 1
    },
    btnnes1 () {
      this.flag = 2
    },
    secured () {
      if (!local.get('username')) {
        this.$message({
          message: "请先登录",
          type: 'success'
        })
        setTimeout(() => {
          this.$router.push('/login')
        }, 1000)
      } else {
        this.isshow = true
      }
    },
    //担保发布
    async onSubmit () {
      var role
      if (this.flag == 1) {
        role = 2
      } else {
        role = 1
      }

      if (!this.form.title) {
        this.showts1 = true
        setTimeout(() => {
          this.showts1 = false
        }, 3000)
      } else if (!this.form.content) {
        this.showts2 = true
        setTimeout(() => {
          this.showts2 = false
        }, 3000)
      } else if (!this.form.price) {
        this.showts3 = true
        setTimeout(() => {
          this.showts3 = false
        }, 3000)
      } else if (!this.form.buyer_contact) {
        this.showts4 = true
        setTimeout(() => {
          this.showts4 = false
        }, 3000)
      } else if (!this.form.seller_contact) {
        this.showts5 = true
        setTimeout(() => {
          this.showts5 = false
        }, 3000)
      } else if (this.checked) {
        const data = await Secureddeal({
          username: local.get('username').username,
          title: this.form.title,
          content: this.form.content,
          price: this.form.price,
          buyer_contact: this.form.buyer_contact,
          seller_contact: this.form.seller_contact,
          role
        })
        console.log(data);
        if (data.code == 200) {
          this.isshow = false
          this.form = {}
          this.flag = 1
          this.checked = false
          this.$message({
            message: data.message,
            type: 'success'
          });
        } else if (data.code == 400 && data.message == "联系方式错误") {
          this.showts6 = true
          this.showts5 = false
          setTimeout(() => {
            this.showts6 = false
          }, 3000)
        }else if (data.code == 400 && data.message == "价格格式错误") {
          this.showts11 = true
          this.showts5 = false
          this.showts6 = false
          setTimeout(() => {
            this.showts11 = false
          }, 3000)
        }
      }
      else {
        this.showts = true
        setTimeout(() => {
          this.showts = false
        }, 3000)
      }

    },
    //定时器
    runInv () {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 2000)
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
    showSearch () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 300) {   // 当页面滚动到高度300px处，动态绑定class 来设置头部固定定位
        this.show = true;
      } else {
        this.show = false;
      }
    },
    gotoPage (index) {
      this.currentIndex = index;
    },
    //添加方法
    toTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;  //可以自己设置
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    //开始交易
    skip () {
      // if (!local.get('username')) {
      //   this.$message({
      //     message: "请先登录",
      //     type: 'success'
      //   })
      //   setTimeout(() => {
        
      //   }, 1000)
      // }
  this.$router.push('/consignment')
    },
    //立即前往 网址app
    Immediately () {
      this.$router.push("/consignment")
    },
    //立即前往 自媒体
    Immediately1 () {
      this.$router.push("/newmedia")
    },
    //立即前往 网店
    Immediately2 () {
      this.$router.push("/onlinetrading")
    },
    //立即前往 自媒体
    Immediately4 () {
      this.$router.push("/support")
    },
    //退出登录
    logout () {
      window.localStorage.clear()
      window.sessionStorage.clear()
      this.$router.push("/login")
    },
    personales () {
      this.$router.push("/personal/order")
    }
  }
}
</script>
<style lang="scss">
// ::-webkit-scrollbar {
//   display: none;
// }
.home {
  background: #4c56cf;
  width: 1830px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .icon {
    height: 50px;
    display: flex;
    align-items: center;

    .icon_tu {
      width: 40px;
      height: 40px;
      border-radius: 30px;
      background: #ffffff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 30px;
      }
    }
    .icon-yh {
      margin-left: 8px;
      p {
        line-height: 20px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .nav-dao1 {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      li {
        display: inline-block;
        width: 120px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
      .li-one {
        background: url('~@/assets/imge/btn_shouye denglu_sel.png');
        margin-right: 20px;
      }
      .li-two {
        background: url('~@/assets/imge/btn_shouye denglu.png');
      }
    }
  }
  .nav-dao {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      li {
        display: inline-block;
        cursor: pointer;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
      }
    }
    .nav-xiao {
      text-align: center;
      display: block;
      width: 120px;
      line-height: 60px;
      background: url('~@/assets/imge/pic_shouyexiaoxi box .png');
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #ffffff;
      position: relative;
    }
    .shuxian {
      width: 4px;
      height: 46px;
      background: #ffffff;
      margin-left: 22px;
      margin-right: 16px;
    }
    .usernames {
      p {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: #ffffff;
      }
      .p_one2 {
        position: relative;
        .xialakuan {
          display: none;
          width: 140px;
          height: 150px;
          position: absolute;
          top: 22px;
          left: 17px;
          background: #ffffff;
          .xialashuju {
            display: flex;
            flex-direction: column;
            li {
              width: 140px;
              height: 50px;
              background: #ffffff;
              border: 1px solid #e3e3e3;
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 300;
              color: #666666;
              line-height: 50px;
              text-align: center;
            }
            .active-li {
              width: 140px;
              height: 50px;
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 300;
              color: #ffffff;
              line-height: 50px;
              background: #ff7b47;
              border: 1px solid #ff7b47;
            }
            li:hover {
              width: 140px;
              height: 50px;
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 300;
              color: #ffffff;
              line-height: 50px;
              background: #ff7b47;
              border: 1px solid #ff7b47;
            }
          }
        }
      }
    }
    .usernames:hover .xialakuan {
      display: block;
    }
  }
}
.mai0 {
  width: 1330px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px !important;
  .left-logo {
    width: 260px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 224px;
      height: 92px;
    }
  }
  .serch {
    width: 764px;
    border: 1px solid #f3f3f3;
    background: #f9f9f9;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      height: 60px;
      width: 540px;
      border: 0px;
      outline: none;
      background: #f9f9f9;
      text-indent: 2px;
      font-size: 20px;
    }
    input::-webkit-input-placeholder {
      /* WebKit browsers */
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(153, 153, 153, 1);
    }
    .imges {
      margin-left: 25px;
      margin-right: 5px;
    }
    .shu {
      width: 1px;
      height: 24px;
      background: rgba(204, 204, 204, 1);
      border-radius: 1px;
    }
    .serch-one {
      height: 40px;
      width: 114px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
      background: url('~@/assets/imge/btn_sousuo.png');
      background-size: cover;
    }
  }
  .reserch {
    height: 20px;
    margin-top: 6px;
    color: #ccc;
    font-size: 20px;
    span {
      margin-left: 6px;
      cursor: pointer;
    }
  }
  .right-logo {
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    background: url('~@/assets/imge/btn_danbaojiaoyi.png');
    background-size: cover;
    height: 40px;
    width: 114px;
    line-height: 40px;
  }
}
.mai1 {
  width: 1330px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .left {
    width: 260px;
    line-height: 50px;
    border-top-right-radius: 20px;
    text-indent: 27px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    background: url('~@/assets/imge/pic_rementuijian.png');
  }
  .conter {
    ul {
      display: flex;
      li {
        display: inline-block;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgba(59, 59, 59, 1);
      }
    }
  }
}
.banner {
  background: rgba(244, 244, 244, 1);
  border-top: 1px solid rgba(222, 222, 222, 1);
  .fuji {
    display: flex;
    justify-content: space-between;
    .banner-one {
      width: 260px;
      height: 560px;
      position: relative;
      .frame {
        width: 260px;
        height: 140px;
        border-bottom: 1px solid #f4f4f4;
        padding: 25px 23px 18px 0px;
        box-sizing: border-box;
        background: #fff;
        overflow: hidden;

        .subtitlees {
          margin-left: 26px;
          width: 208px;
          height: 24px;
          display: flex;
          justify-content: space-between;
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(59, 59, 59, 1);
        }
        ul {
          margin-left: 8px;
          margin-top: 5px;
          display: flex;
          flex-wrap: wrap;
          li {
            .subtitle {
              span {
                display: inline-block;
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 300;
                color: rgba(153, 153, 153, 1);
                margin-left: 16px;
                margin-top: 18px !important;
                cursor: pointer;
              }
              span:hover {
                color: #ff7b47;
              }
            }
            .sideNavone {
              display: none;
              width: 771px;
              min-height: 559px;
              background: #363744;
              position: absolute;
              z-index: 9999;
              top: 0px;
              left: 260px;
              padding: 31px 69px 0px 66px;
              box-sizing: border-box;
              .sideNav {
                a {
                  margin-right: 36px;
                  color: #ffffff;
                }
              }
              dt {
                height: 26px;
                line-height: 26px;
                .first {
                  display: inline-block;
                  width: 6px;
                  height: 24px;
                  background: rgba(255, 123, 71, 1);
                }
                .two {
                  font-size: 24px;
                  font-family: Microsoft YaHei;
                  font-weight: 300;
                  color: rgba(255, 123, 71, 1);
                  margin-left: 15px;
                }
              }
              dd {
                margin-top: 39px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                a {
                  margin-right: 20px;
                  font-size: 18px;
                  font-family: Microsoft YaHei;
                  font-weight: 300;
                  color: rgba(255, 255, 255, 1);
                  line-height: 36px;
                }
                a:hover {
                  color: rgba(255, 123, 71, 1);
                }
              }
            }
          }
        }
      }
      .frame:hover {
        background: #363744;
        border-right: none;
        z-index: 10000;
        .subtitlees {
          color: rgba(255, 255, 255, 1);
        }
        .sideNavone {
          display: block;
        }
      }
    }
    .banner-two {
      width: 732px;
      height: 559px;
      display: flex;
      align-items: flex-end;
      position: relative;
      img {
        width: 732px;
        height: 559px;
      }
      .page {
        position: absolute;
        width: 732px;
        top: 590px;
        ul {
          display: flex;
          justify-content: center;
          li {
            width: 8px;
            height: 8px;
            background: rgba(73, 95, 212, 1);
            border-radius: 50%;
            margin-right: 8px;
            cursor: pointer;
          }
          .current {
            width: 78px;
            height: 8px;
            background: rgba(183, 187, 237, 1);
            border-radius: 4px;
          }
        }
      }
      .block {
        width: 732px;
        height: 559px;
      }
    }
    .banner-three {
      width: 260px;
      height: 560px;
      display: flex;
      align-items: flex-end;
      .contter {
        .imgess1 {
          width: 260px;
          height: 156px;
          margin-top: 30px;
          background: url('~@/assets/imge/banner1.png') no-repeat;
          background-size: 100%;
          padding: 53px 113px 59px 21px;
          box-sizing: border-box;
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(153, 153, 153, 1);
        }
        .imgess2 {
          width: 260px;
          height: 156px;
          margin-top: 30px;
          background: url('~@/assets/imge/banner2.png');
          background-size: 100%;
          padding: 53px 113px 59px 21px;
          box-sizing: border-box;
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(153, 153, 153, 1);
        }
        .imgess3 {
          width: 260px;
          height: 156px;
          margin-top: 30px;
          background: url('~@/assets/imge/banner3.png');
          background-size: 100%;
          padding: 53px 113px 59px 21px;
          box-sizing: border-box;
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .protection {
    margin-top: 70px;
    .protectionone {
      line-height: 80px;
      background: #e7e7f1;
      text-align: center;
      font-size: 30px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(59, 59, 59, 1);
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }
  }
  .bannerbiao {
    display: flex;
    div {
      width: 266px;
      height: 200px;
      border: 1px solid rgba(237, 237, 237, 1);
      background: #fff;
      text-align: center;
      padding: 0 20px;
      box-sizing: border-box;
      img {
        margin-top: 23px;
      }
      p {
        margin-top: 21px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .advertising {
    margin-top: 90px;
    padding-bottom: 90px;
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
  .recruit {
    display: flex;
    justify-content: space-between;
    div {
      width: 296px;
      height: 296px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      .recruit_one {
        width: 296px;
        height: 196px;
        padding: 23px 23px 0px 23px;
        box-sizing: border-box;
        p {
          width: 253px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
          a:hover {
            color: #17a1ff;
          }
        }
      }
    }
  }
}
.guarantee {
  .guaranteeones {
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    .guarantee_one {
      transition: 200ms;
      width: 441px;
      height: 356px;
      text-align: center;
      padding: 0px 30px;
      box-sizing: border-box;
      cursor: pointer;
      img {
        margin-top: 20px;
      }
      .guarantee_two {
        margin-top: 20px;
        font-size: 30px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(59, 59, 59, 1);
      }
      .guarantee_three {
        margin-top: 20px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: #888;
        line-height: 30px;
      }
      .guarantee_four {
        display: block;
        margin: 0 auto;
        width: 120px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        background: #f69402;
        border-radius: 20px;
        transition: 200ms;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -60px;
      }
      .guarantee_four:hover {
        background-color: #4cae4c;
      }
    }
    .guarantee_one:hover {
      box-shadow: 0 0 5px 1px #b0acac;
      transform: translateY(-5px);
    }
    .guarantee_one:hover .guarantee_four {
      opacity: 1;
      visibility: visible;
    }
  }
}
.deal {
  height: 200px;
  background: rgba(244, 244, 244, 1);
  div {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    .deal01 {
      width: 300px;
      border-radius: 10px;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #ff8b45;
      line-height: 60px;
      text-align: center;
      border: 1px solid #ff8b45;
    }
    .deal01:hover {
      cursor: pointer;
      display: block;
      width: 300px;
      background: linear-gradient(
        0deg,
        rgba(255, 139, 69, 1),
        rgba(255, 104, 74, 1)
      );
      border-radius: 10px;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 60px;
      text-align: center;
    }
  }
}
.delegate {
  height: 722px;
  background: rgba(76, 86, 207, 1);
  .delegate01 {
    .delegate01_one {
      font-size: 40px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 120px;
    }
    .delegate02 {
      display: flex;
      justify-content: space-between;
      .maine1 {
        width: 396px;
        height: 500px;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        .maine2 {
          height: 120px;
          border-bottom: 1px solid rgba(244, 244, 244, 1);
          .maine_1 {
            text-align: center;
            font-size: 30px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(76, 86, 207, 1);
            line-height: 74px;
          }
          .maine_2 {
            text-align: center;
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: 300;
            color: rgba(153, 153, 153, 1);
          }
        }
        .maine01 {
          .maine01_one {
            font-size: 16px;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            .maine01_one-content01 {
              display: inline-block;
              width: 70%;
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              text-overflow: ellipsis;
              color: #666666;
            }
            .maine01_one-content02 {
              display: inline-block;
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              text-overflow: ellipsis;
              color: #999999;
            }
          }
          .maine01_one:hover .maine01_one-content01 a {
            color: #485dd4;
          }
        }
      }
    }
  }
}
.cooperative {
  height: 230px;
  background: #f4f4f4;
  .advertising {
    padding-top: 90px;
    padding-bottom: 90px;
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
.fixed-right {
  padding: 0 0 0 0;
  width: 50px;
  position: fixed;
  z-index: 5555555555555555;
  right: 0;
  top: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  .fixed-right-item {
    display: block;
    width: 100%;
    cursor: pointer;
    position: relative;
    height: 100px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding-top: 10px;
    box-sizing: border-box;
    background: rgba(55, 56, 68, 1);
    .icon {
      width: 29px;
      height: 26px;
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
      color: #fff;
      margin: 0 auto;
    }
    .icon1 {
      background: url('~@/assets/imge/ic_quanzhan vip.png') no-repeat;
    }
    .icon2 {
      background: url('~@/assets/imge/ic_jingjiren.png') no-repeat;
    }
    .icon3 {
      background: url('~@/assets/imge/ic_qiandao.png') no-repeat;
    }
    .icon4 {
      background: url('~@/assets/imge/ic_qq.png') no-repeat;
    }
    .icon5 {
      background: url('~@/assets/imge/ic_weixin.png') no-repeat;
    }
    .icon6 {
      background: url('~@/assets/imge/ic_baoguang.png') no-repeat;
    }
    .icon7 {
      background: url('~@/assets/imge/ic_kefu.png') no-repeat;
    }
    .icon8 {
      background: url('~@/assets/imge/ic_top.png') no-repeat;
    }
    .ziti {
      display: block;
      width: 100%;
      text-align: center;
      width: 36px;
      height: 37px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: #ffffff;
      margin: 0 auto;
      margin-top: 14px;
    }
  }
  .fixed-right-item:hover {
    width: 50px;
    height: 100px;
    background: linear-gradient(
      0deg,
      rgba(255, 139, 69, 1),
      rgba(255, 104, 74, 1)
    );
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  .fixed-right-item:hover .icon2 {
    background: url('~@/assets/imge/ic_jingjiren_sel.png') no-repeat;
  }
  .fixed-right-item:hover .icon3 {
    background: url('~@/assets/imge/ic_qiandao_sel.png') no-repeat;
  }
  .fixed-right-item:hover .icon4 {
    background: url('~@/assets/imge/ic_qq_sel.png') no-repeat;
  }
  .fixed-right-item:hover .icon5 {
    background: url('~@/assets/imge/ic_weixin_sel.png') no-repeat;
  }
  .fixed-right-item:hover .icon6 {
    background: url('~@/assets/imge/ic_baoguang_sel.png') no-repeat;
  }
  .fixed-right-item:hover .icon7 {
    background: url('~@/assets/imge/ic_kefu_sel.png') no-repeat;
  }
  .fixed-right-item:hover .icon8 {
    background: url('~@/assets/imge/ic_top_sel.png') no-repeat;
  }
}
.operates11 {
  .el-dialog {
    min-width: 1000px;
    height: 830px;
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
      .conterentsd {
        display: flex;
        justify-content: space-between;
        .left-from {
          .el-form {
            padding: 29px 0 0 88px;
            box-sizing: border-box;
            .el-input {
              width: 420px;
              height: 40px;
              .el-input__inner {
                width: 420px;
                height: 40px;
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
              cursor: pointer;
            }
            .el-form-item {
              margin-bottom: 30px !important;
              .el-form-item__label {
                font-size: 18px;
                font-family: Microsoft YaHei;
                color: #333333;
                line-height: 40px;
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
        .right-ewm {
          width: 340px;
          .right_01 {
            width: 175px;
            height: 171px;
            background: red;
          }
        }
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.tishiyu {
  position: absolute;
  left: 256px;
  bottom: 125px;
}
.tishiy {
  position: absolute;
  left: 0px;
  top: 35px;
}
.tishiy1 {
  position: absolute;
  left: 0px;
  top: 155px;
}
.yuandain {
  display: block;
  width: 30px;
  text-align: center;
  line-height: 30px;
  background: #ff3636;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>