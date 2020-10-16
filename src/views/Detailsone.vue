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
          <p class="one04">信誉等级：
            <span class="one_04"></span>
          </p>
          <p class="one04">好评率：
            <span style="color:#32AFE9">98%</span>
          </p>
          <p class="one04">动态评分：
            <span style="color:#32AFE9">4.6</span>
          </p>
          <p class="one04">创店时间：
            <span style="color:#32AFE9">-</span>
          </p>
          <p class="one04">店铺信誉：
            <span style="color:#32AFE9">4</span>
          </p>
          <p class="one04">虚拟占比：
            <span style="color:#32AFE9">-</span>
          </p>
          <p class="one04">消保金：
            <span style="color:#32AFE9">40000（无需退还）</span>
          </p>
          <p class="one04">违规扣分：
            <span style="color:#32AFE9">-</span>
          </p>
          <p class="one04">是否带货：
            <span style="color:#32AFE9">不带货出售</span>
          </p>
          <p class="one04">店铺人气：
            <span style="color:#32AFE9">1.3w人</span>
          </p>
          <p class="one05">卖家描述：山东地区母婴用品网店转让，无扣分和违反规定情况，现在还在经营中，转让证件齐全</p>
          <div class="one06">
            <el-checkbox v-model="checked">我已经阅读并同意
              <span style="color:#32AFE9;cursor: pointer;">《59danbao.cn服务协议》</span>
            </el-checkbox>
            <span class="one_06">联系经纪人</span>
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
          <div class="adv2">
            <span class="adv10"></span>
            <p class="adv11">客服@小美</p>
            <div class="adv12"></div>
            <p class="adv13">QQ:3002255225 </p>
            <p class="adv13">手机:139****15698</p>
            <p class="adv13">电话:400-258-125</p>
            <p class="adv13">擅长:域名 企业QQ 网站交易 </p>
            <div class="adv14">
              <span class="sp1"><img src="@/assets/imge/ic_qqjiaotan.png" />
                <span style="margin-left:25px;">交谈</span>
              </span>
              <span class="sp2"><img src="@/assets/imge/ic_weixinjiaotan.png" />
                <span style="margin-left:28px;">交谈</span>
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
          <span :class="{one01:$route.path=='/details'}">
            <router-link to="/details">服务介绍</router-link>
          </span>
          <span :class="{one01:$route.path=='/details/standard'}">
            <router-link to="/details/standard">常见问答</router-link>
          </span>
        </div>
        <div class="two">
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
    setTimeout(() => {
      let val = JSON.parse(window.sessionStorage.getItem("particul"));
      val.create_time = this.formateDate(val.create_time)
      val.update_time = this.formateDate(val.update_time)
      this.tablelist = val
    }, 200)


  },
  data () {
    return {
      checked: false,
      tablelist: {}
    }
  },
  methods: {
    formateDate (time) {
      function addDateZero (num) {
        return (num < 10 ? "0" + num : num);
      }
      let t = new Date(time);
      let datetime = t.getFullYear() + '-' + addDateZero(t.getMonth() + 1) + '-' + addDateZero(t.getDate()) + ' ' + addDateZero(t.getHours()) + ':' + addDateZero(t.getMinutes()) + ':' + addDateZero(t.getSeconds());
      return datetime;
    }
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
              z-index: 99999999999999999;
            }
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
          color: #ffffff;
        }
      }
    }
    .two {
      height: 1150px;
    }
  }
}
</style>