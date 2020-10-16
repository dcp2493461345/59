<template>
  <div class="accountcenter">
    <div class="one01">
      <div class="onecent1">
        <img src="@/assets/imge/pic_wodezhanghao.png"
             alt="">
        <p>{{user.email}}</p>
      </div>
      <div class="onecent2">
        <img src="@/assets/imge/pic_wodeshoujihao.png"
             alt="">
        <p>{{user.mobile}}</p>
      </div>
    </div>
    <div class="one02">
      <div class="one02_1">
        <ul class="one_012">
          <li>
            <p class="one02_01">账号余额(元)</p>
            <p class="one02_02">{{user.balance}}</p>
          </li>
          <li>
            <p class="one02_01">冻结(元)</p>
            <p class="one02_02">{{user.frozen_money}}</p>
          </li>
          <li>
            <p class="one02_01">交易流水(元)</p>
            <p class="one02_02">{{user.jour}}</p>
          </li>
          <li>
            <p class="one02_01">保证金金额(元)</p>
            <p class="one02_02">{{user.bond}}</p>
          </li>
        </ul>
        <ul class="two01">
          <li class="two01_1">
            <p class="p1"></p>
            <p class="p2">充值</p>
          </li>
          <li class="two01_2">
            <p class="p1"></p>
            <p class="p2">提现</p>
          </li>
          <li class="two01_3">
            <p class="p1"></p>
            <p class="p2">财务明细</p>
          </li>
          <li class="two01_4">
            <p class="p1"></p>
            <p class="p2">发票</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="one03">
      <img src="@/assets/imge/ic_jinggao.png"
           alt=""> 59担保网账户不允许从事任何违反法律法规的担保交易
    </div>
    <div class="one04">
      <ul>
        <li class="two00">
          <img src="@/assets/imge/pic_wode qiandao.png"
               alt=""> 签到
        </li>
        <li class="two11">
          <img src="@/assets/imge/wode youhuiquan.png"
               alt=""> 优惠券
        </li>
        <li class="two33">
          <img src="@/assets/imge/pic_wode jianglijin.png"
               alt=""> 奖励金
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import local from "@/utils/local";
import { Getinfo } from "@/api/account.js"
export default {
  data () {
    return {
      user: {},
      user_id: ''
    }
  },
  created () {
    let username = local.get('username')
    this.user_id = username.user_id
    this.Getinfo()
  },
  methods: {
    async Getinfo () {
      const data = await Getinfo({
        user_id: this.user_id
      })
      this.user = data.data
    }
  }
}
</script>

<style lang="scss" scoped>
.accountcenter {
  .one01 {
    height: 100px;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .onecent1 {
      width: 400px;
      height: 100px;
      background: #f4f4f4;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 20px;
      }
    }
    .onecent2 {
      width: 400px;
      height: 100px;
      background: #f4f4f4;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-right: 20px;
      }
    }
  }
  .one02 {
    margin-top: 16px;
    width: 100%;
    height: 260px;
    background: #ffffff;
    border: 1px solid #efefef;
    border-radius: 10px;
    padding: 50px 60px 20px 60px;
    box-sizing: border-box;
    .one02_1 {
      .one_012 {
        display: flex;
        border-bottom: 1px solid #f4f4f4;
        li {
          width: 200px;
          .one02_01 {
            font-size: 16px;
            color: #343434;
          }
          .one02_02 {
            margin-top: 15px;
            font-size: 18px;
            color: #ff3636;
            margin-bottom: 30px;
          }
        }
      }
      .two01 {
        margin-top: 40px;
        display: flex;
        li {
          margin-right: 60px;
        }
        .two01_1 {
          width: 130px;
          height: 50px;
          border: 1px solid #ff7c48;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .p1 {
            display: block;
            background: url('~@/assets/imge/ic_chongzhi.png');
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
            margin-right: 10px;
          }
          .p2 {
            color: #ff7c48;
          }
        }
        li:hover {
          background: url('~@/assets/imge/btn_chongzhi_sel.png');
          background-size: 100% 100%;
        }
        .two01_1:hover .p2 {
          color: #fff;
        }
        .two01_1:hover .p1 {
          background: url('~@/assets/imge/ic_chongzhi_sel.png');
          width: 24px;
          height: 24px;
          background-size: 100% 100%;
        }
        .two01_2 {
          width: 130px;
          height: 50px;
          border: 1px solid #ff7c48;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .p1 {
            display: block;
            background: url('~@/assets/imge/ic_tixian.png');
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
            margin-right: 10px;
          }
          .p2 {
            color: #ff7c48;
          }
        }
        .two01_2:hover .p1 {
          background: url('~@/assets/imge/ic_tixian_sel.png');
          width: 24px;
          height: 24px;
          background-size: 100% 100%;
        }
        .two01_2:hover .p2 {
          color: #fff;
        }
        .two01_3 {
          width: 130px;
          height: 50px;
          border: 1px solid #ff7c48;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .p1 {
            display: block;
            background: url('~@/assets/imge/ic_caiwu.png');
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
            margin-right: 10px;
          }
          .p2 {
            color: #ff7c48;
          }
        }
        .two01_3:hover .p1 {
          background: url('~@/assets/imge/ic_caiwu_sel.png');
          width: 24px;
          height: 24px;
          background-size: 100% 100%;
        }
        .two01_3:hover .p2 {
          color: #fff;
        }
        .two01_4 {
          width: 130px;
          height: 50px;
          border: 1px solid #ff7c48;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .p1 {
            display: block;
            background: url('~@/assets/imge/ic_fapiao.png');
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
            margin-right: 10px;
          }
          .p2 {
            color: #ff7c48;
          }
        }
        .two01_4:hover .p1 {
          background: url('~@/assets/imge/ic_fapiao_sel.png');
          width: 24px;
          height: 24px;
          background-size: 100% 100%;
        }
        .two01_4:hover .p2 {
          color: #fff;
        }
      }
    }
  }
  .one03 {
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    img {
      margin-right: 20px;
    }
  }
  .one04 {
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 70px;
      li {
        width: 230px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        img {
          margin-right: 20px;
          width: 40px;
          height: 40px;
        }
      }

      .two00 {
        background: url('~@/assets/imge/btn_wode qiandao.png');
        background-size: 100% 100%;
      }
      .two11 {
        background: url('~@/assets/imge/brn_wode youhuiquan.png');
        background-size: 100% 100%;
      }
      .two33 {
        background: url('~@/assets/imge/btn_wode qiandao.png');
        background-size: 100% 100%;
      }
    }
  }
}
</style>