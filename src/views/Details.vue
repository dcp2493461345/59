<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="details container-fluid">
      <div class="container details01">
        <div class="one">
          <p class="one01">{{tablelist.name}}</p>
          <p class="one02">发布时间：{{tablelist.create_time}}更新时间：{{tablelist.update_time}}</p>
          <p class="one03">¥{{tablelist.price}}</p>
          <p class="one04">主营类目：
            <span style="color:#32AFE9">{{tablelist.category2}}</span>
          </p>
          <p class="one04">域名:
            <span style="color:#32AFE9">{{tablelist.domain}}</span>
          </p>
          <p class="one04">日ip：
            <span style="color:#32AFE9">{{tablelist.day_ip}}</span>
          </p>
          <p class="one04">权重：
            <span style="color:#32AFE9">{{tablelist.weight}}</span>
          </p>
          <p class="one04">收录量：
            <span style="color:#32AFE9">{{tablelist.include_count}}</span>
          </p>
          <p class="one04">月收入：
            <span style="color:#32AFE9">{{tablelist.monthlymoney}}</span>
          </p>
          <p class="one04">网络程序：
            <span style="color:#32AFE9">{{tablelist.procedure}}</span>
          </p>
          <p class="one04">服务器信息：
            <span style="color:#32AFE9">{{tablelist.server}}</span>
          </p>
          <p class="one05">卖家描述：{{tablelist.describe}}</p>
          <div class="one06">
            <el-checkbox v-model="checked">我已经阅读并同意
              <span style="color:#32AFE9;cursor: pointer;">《59danbao.cn服务协议》</span>
            </el-checkbox>
            <span class="one_06"
                  @click="lianxijijir">联系经纪人</span>
          </div>
        </div>
        <div class="two">
          <div class="two01">
            <span class="two_01">降价通知</span>
            <span class="two_02">网站估值</span>
            <span class="two_03">委托代购</span>
          </div>
          <div class="two02">
            <p>1、标的信息为卖家提供，59担保网不对该信息真实性或准确性作保证。</p>
            <p>2、若需查询更多信息请联系59担保网经纪人核实。</p>
            <p>3、为了安全起见，不要轻易与卖家进行线下交易；非平台线上交易的项目，出现任何后果均与59担保网无关，无论卖家以任何理由要求线下交易的，请联系59担保网经纪人举报。</p>
          </div>
          <div class="adv2"
               v-for="(item,index) in supser"
               :key="index">
            <span class="adv10">
              <img :src="item.pic"
                   alt="">
            </span>
            <p class="adv11">客服@{{item.username}}</p>
            <div class="adv12">
            </div>
            <p class="adv13">QQ:{{item.qq}} </p>
            <p class="adv13">手机:{{item.mobile}}</p>
            <p class="adv13">电话:{{item.phone}}</p>
            <p class="adv13">擅长:{{item.describe}} </p>
            <div class="adv14">
              <span class="sp1"><img src="@/assets/imge/ic_qqjiaotan.png" />
                <span style="margin-left:25px;">
                  <a style="color:#fff;"
                     target="_blank"
                     href="http://wpa.qq.com/msgrd?v=1&uin=888888888&site=qq&menu=yes">交谈</a>
                </span>
              </span>
              <span class="sp2"><img src="@/assets/imge/ic_weixinjiaotan.png" />
                <span style="margin-left:28px;"
                      class="sp5">交谈</span>
                <span class="sp3"
                      style="display:none">
                  <img :src="item.qr_code"
                       alt="">
                </span>
              </span>
            </div>
          </div>
        </div>

      </div>
      <div class="details02 container">
        <span class="three01">服务承诺：</span>
        <span style="margin-left:26px;">
          <span class="imges"></span>可供合同</span>
        <span style="margin-left:56px;">
          <span class="imges1"></span>中介交易</span>
        <span style="margin-left:56px;">
          <span class="imges2"></span>1对1服务</span>
        <span style="margin-left:56px;">
          <span class="imges3"></span>极速退款</span>
        <span style="margin-left:56px;">
          <span class="imges4"></span>支持线下</span>
        <span style="margin-left:56px;">
          <span class="imges5"></span>确认后付款</span>
      </div>
      <div class="details03 container">
        <div class="one">
          <span :class="{one01:flag==1}">
            <a @click="qiehuan">服务介绍</a>
          </span>
          <span :class="{one01:flag==2}">
            <a @click="qiehuan2">常见问答</a>
          </span>
        </div>
        <div class="two">
          <div v-if="flag==1"
               class="introud container">
            <div class="titleess">- 交易流程 -</div>
            <div class="introud01">
              <div class="intur01">
                <img src="@/assets/imge/pic_liucheng1.png"
                     alt="">
                <p>选中物品或服务并付款项打给59danbao.cn</p>
              </div>
              <div class="intur01">
                <img src="@/assets/imge/pic_liucheng2.png"
                     alt="">
                <p>59danbao.cn协助核实物品或服务信息</p>
              </div>
              <div class="intur01">
                <img src="@/assets/imge/pic_liucheng3.png"
                     alt="">
                <p>买卖双方开始交接物品或服务</p>
              </div>
              <div class="intur01">
                <img src="@/assets/imge/pic_liucheng4.png"
                     alt="">
                <p>买方确认物品或服务</p>
              </div>
              <div class="intur01">
                <img src="@/assets/imge/pic_liucheng5.png"
                     alt="">
                <p>交易完成</p>
              </div>
            </div>
            <div class="titleess">- 相关推荐 -</div>
            <div class="introud02">
              <div class="rooud01"
                   v-for="(item,index) in tuijian "
                   :key="index">
                <!-- <div class="ten01">
                  <img :src="item.pic"
                       alt="">
                </div> -->
                <div class="ten02">
                  <p class="p01">{{item.name}}</p>
                  <p class="p02">描述：{{item.describe}}</p>
                  <p class="p03">¥{{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="flag==2"
               class="standard container">
            <div class="titleess">- 交易流程 -</div>
            <div class="standard01">
              <p>问：我可以注册多个59danbao.cn账户吗？</p>
              <p>答：59danbao.cn不支持用户用一个证件认证多个账户，如果您需要更换您交易所使用的邮箱，可以在绑定邮箱中添加您的新邮箱信息，无需重新注册账户进行实名认证。请注意已经注册的邮箱无法被再次绑定。</p>
              <p style="margin-top:30px;">问：为什么我没有收到激活邮件？</p>
              <p>答：由于官方邮箱的系统问题，有的邮件会被自动列入垃圾邮箱，如果未及时收到邮件请在垃圾邮箱中查看。如果一直无法收到邮件,请更换邮箱， 或者联系我们平台经纪人人工审核，帮您激活账户。</p>
              <p style="margin-top:30px;">问：是否必须要实名认证？如何进行实名认证？</p>
              <p>答：为了提高域名交易的安全性，59danbao.cn需要每一位用户进行实名认证。请在注册后上传您的有效证件照片（驾照、身份证或者护照和手执证件照）或者企业的有效证件照片，我们将在您提交资料后的2个工作日内完成审核。 在我的账户—账户设置—实名认证中完成身份认证。（我们将保护您的隐私安全）</p>
              <p style="margin-top:30px;">问：谁可以发起交易？</p>
              <p>答：卖方和买方以及第三方经纪人均可以在59danbao.cn发起中介交易。</p>
              <p style="margin-top:30px;">问：充值后多久能到账? </p>
              <p>答：汇款后5分钟内会自动充值到您59担保网账户，超过5分钟未到账，请联系59担保网经纪人。更多问题请联系59danbao.cn财务咨询。</p>
              <p style="margin-top:30px;">问：申请提现后多久可以到账？</p>
              <p>答：在您发起提现请求后，59danbao.cn将在工作时间内及时处理您的请求并发起银行转账。T日转出，T+1日24:00前到账。交易日为非节假日的周一到周五，15:00前为上一个交易日，15:00后为下一个交易日（T参照股市交易日）。具体到账时间需要视银行的工作时间和操作而定。</p>
              <p style="margin-top:30px;"> 问：为什么要实名认证？为什么需要有效身份证件才可以在59danbao.cn进行交易？是否会泄露个人信息?</p>
              <p>答：59danbao.cn的中介交易审核的严苛是为了有效规避交易风险。本平台一直通过人工审核的方式来保证每一笔交易的安全，防止争议标的在59danbao.cn交易。有效的身份证件是我们能够确保中介交易安全保护买卖双方利益最有效的方法之一。切实保护您的隐私安全是59danbao.cn的宗旨 </p>
              <p style="margin-top:30px;">问：59danbao.cn是如何保护买卖双方的安全？</p>
              <p>答：只有当买方的资金被我们确认到账了才会通知卖方发货。我们会保证卖方按时发货，并跟踪货物发货情况以保证买方能及时收到货。如果商品本身有欺诈嫌疑，买方可以在我们付钱给卖方前联系59danbao.cn经纪人。</p>
            </div>
            <div class="dard02">
              <span class="dard_01"></span>
              <span class="dard_02">如果想要了解更多，可以去帮助中心 或者可以联系平台经纪人</span>
              <span class="dard_03">
                <router-link to="/support">帮助中心>></router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Floot></Floot>
    <el-dialog title=""
               :visible.sync="Application"
               :append-to-body="true"
               center
               class="reminder"
               top="35vh"
               :close-on-click-modal="false"
               width="380px">
      <div class="footer-one">
        <p style="margin-bottom:20px;">QQ:2493461345</p>
        <p>电话:18708136869</p>
      </div>
      <div class="footer-class">
        <span class="two"
              @click="verify">确认</span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Merchandise, Queryproject, Recommendgoods } from "@/api/account.js"
import Header from "@/components/Header.vue"
import Floot from '@/components/Floot.vue'
export default {
  components: {
    Header,
    Floot
  },

  created () {
    setTimeout(async () => {
      const data = await Merchandise({
        project_key: "consign_ment",
        pagesize: 1,
        pagenum: 1,
        category_2: '',
        weight: '',
        mall: "",
        money: '',
        id: this.$route.query.id
      })
      data.data.forEach(v => {
        v.create_time = this.formateDate(v.create_time)
        v.update_time = this.formateDate(v.update_time)
      })
      this.tablelist = data.data[0]
    }, 200)
    setTimeout(() => {
      this.recommendgoods()
    }, 200)
    this.$store.state.supuser.forEach((v, i) => {
      if (i < 1) {
        this.supser.push(v)
      }
    })
  },
  data () {
    return {
      supser: [],
      checked: true,
      tablelist: {},
      flag: 1,
      tuijian: [],
      Application: false,
    }
  },
  methods: {
    lianxijijir () {
      this.Application = true
    },
    verify () {
      this.Application = false

    },
    async recommendgoods () {
      const data = await Recommendgoods({
        key: "consign_ment",
        id: this.$route.query.id
      })
      this.tuijian = data.data
    },
    formateDate (time) {
      function addDateZero (num) {
        return (num < 10 ? "0" + num : num);
      }
      let t = new Date(time);
      let datetime = t.getFullYear() + '-' + addDateZero(t.getMonth() + 1) + '-' + addDateZero(t.getDate()) + ' ' + addDateZero(t.getHours()) + ':' + addDateZero(t.getMinutes()) + ':' + addDateZero(t.getSeconds());
      return datetime;
    },
    qiehuan () {
      this.flag = 1
    },
    qiehuan2 () {
      this.flag = 2
    },
  }
}
</script>

<style lang="scss" scoped>
.details {
  padding: 160px 20px 30px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .details01 {
    background: #ffffff;
    display: flex;
    box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
    padding-bottom: 60px;
    .one {
      width: 820px;
      padding: 22px 0 0 25px;
      box-sizing: border-box;

      .one01 {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #333333;
      }
      .one02 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #666666;
        line-height: 40px;
      }
      .one03 {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ff7f5a;
        line-height: 40px;
      }
      .one04 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #666666;
        line-height: 40px;
        .one_04 {
          display: inline-block;
          width: 90px;
          height: 15px;
          background: url('~@/assets/imge/pic_xinyudengji.png');
        }
      }
      .one05 {
        font-size: 16px;
        font-family: Microsoft YaHei;
        color: #666666;
        line-height: 40px;
        margin-top: 40px;
      }
      .one06 {
        margin-top: 60px;
        ::v-deep.el-checkbox__input.is-checked + .el-checkbox__label {
          color: #333333;
        }
        .one_06 {
          display: inline-block;
          width: 140px;
          line-height: 50px;
          background: linear-gradient(0deg, #ff8b45, #ff684a);
          box-shadow: 0px 0px 20px 0px rgba(255, 72, 121, 0.35);
          border-radius: 10px;
          text-align: center;
          font-size: 18px;
          font-family: Microsoft YaHei;
          color: #ffffff;
          margin-left: 36px;
          cursor: pointer;
        }
      }
    }
    .two {
      width: 410px;
      box-sizing: border-box;
      margin-left: 50px;

      .two01 {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        span {
          display: inline-block;
          width: 130px;
          line-height: 50px;
          text-align: center;
          color: #ffffff;
          font-size: 20px;
          font-family: Microsoft YaHei;
        }
        .two_01 {
          background: url('~@/assets/imge/pic_jiangjiatongzhi.png');
        }
        .two_02 {
          background: url('~@/assets/imge/pic_wangzhanguzhi.png');
        }
        .two_03 {
          background: url('~@/assets/imge/pic_weituodaigou.png');
        }
      }
      .two02 {
        width: 410px;
        height: 248px;
        background: #ffffff;
        border: 1px solid #ff7348;
        box-shadow: 0px 0px 20px 0px rgba(255, 212, 221, 0.35);
        margin-top: 25px;
        padding: 24px 27px 27px 26px;
        box-sizing: border-box;
        p {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #666666;
          line-height: 24px;
        }
      }
      .adv2 {
        margin-top: 30px;
        margin-left: 79px;
        padding: 10px 10px 0 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 240px;
        height: 290px;
        background: #ffffff;
        border: 1px solid #e3e3e3;
        box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);

        .adv10 {
          display: block;
          width: 50px;
          height: 50px;
          background: #f4f4f4;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .adv11 {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #666666;
          line-height: 30px;
        }
        .adv12 {
          width: 220px;
          height: 1px;
          background: #f4f4f4;
        }
        .adv13 {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #999999;
          line-height: 30px;
        }
        .adv14 {
          margin-top: 10px;
          .sp1 {
            display: inline-block;
            width: 100px;
            line-height: 40px;
            background: linear-gradient(0deg, #3c98f6, #2555dd);
            font-size: 16px;
            text-align: center;
            font-family: Microsoft YaHei;
            color: #ffffff;
            position: relative;
            cursor: pointer;
            img {
              position: absolute;
              left: 17px;
              top: 10px;
              z-index: 99999999999999999;
            }
          }
          .sp2 {
            display: inline-block;
            width: 100px;
            line-height: 40px;
            background: linear-gradient(0deg, #79b326, #02a864);
            text-align: center;
            font-size: 16px;
            font-family: Microsoft YaHei;
            color: #ffffff;
            position: relative;
            cursor: pointer;
            img {
              position: absolute;
              left: 17px;
              top: 10px;
            }
          }
          .sp2:hover .sp3 {
            display: block !important;
            margin: 0 auto;
            width: 240px;
            height: 230px;
            background: #ffffff;
            position: absolute;
            top: -230px;
            left: -120px;
            img {
              width: 200px;
              height: 200px;
            }
          }
          .sp2:hover .sp5 {
            color: #ccc;
          }
        }
      }
    }
  }
  .details02 {
    height: 100px;
    background: #2798ce;
    display: flex;
    align-items: center;
    span {
      font-size: 18px;
      font-family: Microsoft YaHei;
      color: #ffffff;
      display: inline-block;
      display: flex;
      align-items: center;
      .imges {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('~@/assets/imge/pic_keqianhetong.png');
        margin-right: 5px;
      }
      .imges1 {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('~@/assets/imge/pic_zhongjiejiaoyi.png');
        margin-right: 5px;
      }
      .imges2 {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('~@/assets/imge/pic_1dui1fuwu.png');
        margin-right: 5px;
      }
      .imges3 {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('~@/assets/imge/pic_jisutuikuan.png');
        margin-right: 5px;
      }
      .imges4 {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('~@/assets/imge/pic_zhichixianxia.png');
        margin-right: 5px;
      }
      .imges5 {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('~@/assets/imge/pic_querenhoufukuan.png');
        margin-right: 5px;
      }
    }
    .three01 {
      width: 173px;
      height: 100px;
      background: #0f6188;
      display: flex;
      justify-content: center;
    }
  }
  .details03 {
    padding-top: 30px;
    box-sizing: border-box;
    background: #ffffff;
    a {
      display: inline-block;
      width: 180px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      font-family: Microsoft YaHei;
      color: #333333;
      cursor: pointer;
    }
    .one {
      height: 60px;
      border: 1px solid #f4f4f4;
      .one01 {
        display: inline-block;
        width: 180px;
        line-height: 60px;
        background: #2798ce;
        text-align: center;
        a {
          display: inline-block;
          width: 180px;
          line-height: 60px;
          background: #2798ce;
          text-align: center;
          font-size: 20px;
          font-family: Microsoft YaHei;
          cursor: pointer;
          color: #ffffff;
        }
      }
    }
    .two {
      height: 1150px;
    }
  }
}
.introud {
  .titleess {
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
    line-height: 40px;
    text-align: center;
    margin-top: 59px;
  }
  .introud01 {
    display: flex;
    justify-content: space-between;
    padding: 82px 97px 0 63px;
    box-sizing: border-box;
    .intur01 {
      width: 166px;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-top: 21px;
        font-family: Microsoft YaHei;
        color: #666666;
        line-height: 26px;
        text-align: center;
      }
    }
  }
  .introud02 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 46px 28px 0 28px;
    box-sizing: border-box;
    .rooud01 {
      width: 600px;
      height: 210px;
      background: #ffffff;
      border: 1px solid #f4f4f4;
      box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
      display: flex;
      margin-bottom: 20px;
      .ten01 {
        width: 160px;
        height: 210px;
        background: #f4f4f4;
      }
      .ten02 {
        width: 440px;
        padding: 29px 32px 0 25px;
        .p01 {
          font-size: 20px;
          font-family: Microsoft YaHei;
          color: #333333;
          line-height: 40px;
        }
        .p02 {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #999999;
          line-height: 30px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .p03 {
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #ff7f5a;
          line-height: 40px;
        }
      }
    }
  }
}
.standard {
  .titleess {
    font-size: 30px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
    line-height: 40px;
    text-align: center;
    margin-top: 59px;
  }
  .standard01 {
    padding: 48px 32px 0 32px;
    box-sizing: border-box;
    p {
      font-size: 18px;
      font-family: Microsoft YaHei;
      color: #333333;
      line-height: 30px;
    }
  }
  .dard02 {
    margin-top: 50px;
    height: 80px;
    background: #f9f9f9;
    display: flex;
    align-items: center;
    .dard_01 {
      width: 36px;
      height: 36px;
      display: inline-block;
      background: url('~@/assets/imge/pic_yiwen.png');
      margin-left: 35px;
    }
    .dard_02 {
      font-size: 20px;
      margin-left: 15px;
      font-family: Microsoft YaHei;
      color: #333333;
    }
    .dard_03 {
      a {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        margin-left: 60px;
        text-decoration: underline;
        color: #ff7348;
        cursor: pointer;
      }
    }
  }
}
.reminder {
  .el-dialog {
    min-width: 380px;
    border-radius: 5px;
    height: 210px;
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-dialog__header {
      text-align: left;
      height: 43px !important;
      border-radius: 5px;
      padding: 12px 19px 12px;
      border-bottom: 1px solid #eff2f5;
      .el-dialog__title {
        font-size: 16px !important;
      }
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
      text-align: initial;
      //padding: 24px 25px 25px 0px;
      padding: 0px;
      .el-myclass {
        padding-left: 55px;
        height: 65px !important;
        .el-form-item__label {
          padding: 0 8px 0 0;
          text-align: left;
        }
        .el-input__inner {
          // background-color: #f00;
          width: 266px !important;
          height: 32px !important;
          border: 1px solid rgba(210, 210, 210, 1) !important;
          border-radius: 4px !important;
          color: #333333;
          padding: 0px 7px;
        }
      }
    }
    .footer-one {
      width: 336px;
      height: 112px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
    }
    .footer-class {
      // background-color: #f00;
      cursor: pointer;
      height: 30px;
      display: flex;
      justify-content: center;

      .two {
        width: 72px;
        height: 30px;
        border-radius: 4px;
        background-color: #25bad9;
        border-color: #25bad9;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
      .one {
        width: 72px;
        height: 30px;
        border-radius: 4px;
        background-color: #ffffff;
        border: 1px solid rgba(204, 204, 204, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999999;
      }
    }
    .el-form-item {
      margin-bottom: 0;
      height: 50px !important;
    }
  }
}
</style>