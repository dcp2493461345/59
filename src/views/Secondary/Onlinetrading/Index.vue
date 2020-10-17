<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="subpage container-fluid">
      <div class="container">
        <div class="nav-one">
          <div class="nav-header ">
            <span class="table">网站类型：</span>
            <span @click="checkedes('')"
                  :class="{navli:!checked}"
                  class="nav010 ">全部</span>
            <ul class="oneul">
              <li v-show="index!=0"
                  @click="checkedes(index)"
                  v-for="(item,index) in project"
                  :key="index"
                  :class="{navli:checked== index}">{{item}}</li>
            </ul>
          </div>
          <div class="nav-header ">
            <span class="table1">信誉等级：</span>
            <span class="nav0101 "
                  @click="reputationselect('')"
                  :class="{navli:!reputation}">不限</span>
            <ul class="towul">
              <li @click="reputationselect(1)"
                  :class="{navli:reputation== 1}">一心</li>
              <li @click="reputationselect(2)"
                  :class="{navli:reputation== 2}">二心</li>
              <li @click="reputationselect(3)"
                  :class="{navli:reputation== 3}">三心</li>
              <li @click="reputationselect(4)"
                  :class="{navli:reputation== 4}">四心</li>
              <li @click="reputationselect(5)"
                  :class="{navli:reputation== 5}">五心</li>
              <li @click="reputationselect(6)"
                  :class="{navli:reputation== 6}">一钻</li>
              <li @click="reputationselect(7)"
                  :class="{navli:reputation== 7}">二钻</li>
              <li @click="reputationselect(8)"
                  :class="{navli:reputation== 8}">三钻</li>
              <li @click="reputationselect(9)"
                  :class="{navli:reputation== 9}">四钻</li>
              <li @click="reputationselect(10)"
                  :class="{navli:reputation== 10}">五钻</li>
              <li @click="reputationselect(11)"
                  :class="{navli:reputation== 11}">一冠</li>
              <li @click="reputationselect(12)"
                  :class="{navli:reputation== 12}">二冠</li>
              <li @click="reputationselect(13)"
                  :class="{navli:reputation== 13}">三冠</li>
              <li @click="reputationselect(14)"
                  :class="{navli:reputation== 14}">四冠</li>
              <li @click="reputationselect(15)"
                  :class="{navli:reputation==15}">五冠</li>
            </ul>
          </div>
          <div class="nav-header ">
            <span class="table1">价格筛选：</span>
            <span class="nav0101 "
                  @click="replaceselect('')"
                  :class="{navli:!price}">不限</span>
            <ul class="towul">
              <li @click="replaceselect(1)"
                  :class="{navli:price== 1}">8000以下</li>
              <li @click="replaceselect(2)"
                  :class="{navli:price== 2}">8000-15000</li>
              <li @click="replaceselect(3)"
                  :class="{navli:price== 3}">15000-25000</li>
              <li @click="replaceselect(4)"
                  :class="{navli:price== 4}">25000-50000</li>
              <li @click="replaceselect(5)"
                  :class="{navli:price== 5}">50000-100000</li>
              <li @click="replaceselect(6)"
                  :class="{navli:price== 6}">100000以上</li>
            </ul>
          </div>
        </div>
        <div class="contener ">
          <div class="list">
            <div class="list-one">

              <ul>
                <li v-for="(item,index) in tabedata"
                    :key="index">
                  <div class="list_dcp">
                    <div>
                    </div>
                  </div>
                  <div class="list_dcp1">
                    <div class="list_one">
                      <div>
                        <p class="c1">{{item.name}}</p>
                        <p class="c2">¥{{item.price}}</p>
                      </div>
                      <div class="c9"
                           @click="xiangqing(item)">
                        <router-link to="/onlinetrading/details5">查看详情</router-link>
                      </div>
                    </div>
                    <div class="list_two">
                      <p class="list01">
                        <span>主营类目：</span>
                        <span style="color:#32AFE9">{{item.category2}}</span>
                        <span style="margin-left:29px">信誉等级：</span>
                        <span style="color:#32AFE9">{{item.creditworthiness}}</span>
                        <span style="margin-left:34px">好评率：</span>
                        <span style="color:#32AFE9">{{item.good_reputation}}</span>
                        <span style="margin-left:82px">虚拟占比：</span>
                        <span style="color:#32AFE9">{{item.xunizhanbi}}</span>
                      </p>
                      <p class="list01">
                        <span>动态评分：</span>
                        <span style="color:#32AFE9">{{item.grade}}</span>
                        <span style="margin-left:29px">创店时间：</span>
                        <span style="color:#32AFE9">{{item.dot_create_time}}</span>
                        <span style="margin-left:34px">店铺信誉：</span>
                        <span style="color:#32AFE9">{{item.dot_reputation}}</span>
                        <span style="margin-left:82px">消保金：</span>
                        <span style="color:#32AFE9">{{item.baozhengjin}}（无需退还）</span>
                      </p>
                      <p class="list01">
                        <span>违规扣分：</span>
                        <span style="color:#32AFE9">{{item.weigui}}</span>
                        <span style="margin-left:29px">是否带货：</span>
                        <span style="color:#32AFE9">{{item.is_cargo}}</span>
                        <span style="margin-left:34px">店铺人气：</span>
                        <span style="color:#32AFE9">{{item.renqi}}</span>
                      </p>
                      <p class="list02">
                        卖家描述：{{item.describe}}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="pages"
                   v-if="count>3">
                <el-pagination background
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :current-page.sync="currentPage"
                               :page-size="pagesize"
                               layout="prev, pager, next"
                               :total="count">
                </el-pagination>
              </div>
            </div>
          </div>
          <div class="right-adv">
            <div class="adv1">
              <p class="adv01">您也有网店出售？</p>
              <p class="adv02">1.发布任务招标信息</p>
              <p class="adv02">2.商家主动参与竞标</p>
              <p class="adv02">3.自由选择最佳投标</p>
              <span>+代售委托</span>
              <span style="margin-left: 40px;">+代购委托</span>
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
          <div></div>
        </div>
      </div>
    </div>
    <Floot></Floot>
  </div>
</template>

<script>
import { Merchandise, Queryproject } from "@/api/account.js"
import Header from "@/components/Header.vue"
import Floot from '@/components/Floot.vue'
export default {
  components: {
    Header,
    Floot
  },
  created () {
    this.getList()
    this.getproject()
  },
  data () {
    return {
      tabedata: [],
      count: 0,
      currentPage: 1,//当前页
      pagesize: 3,//每页条数
      project: {},
      checked: '',//选中类型
      reputation: '',//选中信誉等级
      price: '',//选中售价
    }
  },
  methods: {
    //获取商品
    async getList () {
      const data = await Merchandise({
        project_key: "dot_tradin",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: this.checked,
        money: this.price,
        level: this.reputation
      })
      data.data.forEach(v => {
        v.create_time = this.formateDate(v.create_time)
        v.update_time = this.formateDate(v.update_time)
        v.dot_create_time = this.formateDate(v.dot_create_time)
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //查询项目类型
    async getproject () {
      const data = await Queryproject({
        project_key: 'dot_tradin'
      })
      this.project = data.data.type_id
    },
    handleSizeChange (val) {

    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getList()
    },
    //选中类型
    async checkedes (v) {
      this.checked = v
      this.getList()
    },
    //选中信誉等级
    async reputationselect (v) {
      this.reputation = v
      this.getList()
    },
    //选中售价
    async replaceselect (v) {
      this.price = v
      this.getList()
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
    xiangqing (item) {
      window.sessionStorage.setItem("particul5", JSON.stringify(item))
    },
  }
}
</script>

<style lang="scss" scoped>
.subpage {
  padding: 160px 0 30px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .nav-one {
    background: #ffffff;
    .nav-header {
      display: flex;
      border-radius: 6px;
      .table {
        margin-left: 20px;
        display: inline-block;
        margin-top: 28px;
      }
      .table1 {
        margin-left: 20px;
        display: inline-block;
        margin-top: 25px;
      }
      ul {
        display: flex;
        align-items: center;
        width: 940px;
        flex-wrap: wrap;
        li {
          padding: 0 13px;
          height: 30px;
          margin-top: 20px;
        }
      }
      .oneul {
        display: flex;
        align-items: center;
        width: 1100px;
        flex-wrap: wrap;
        margin-bottom: 10px;
        li {
          padding: 0 13px;
          line-height: 30px;
          // margin-top: 30px;
          cursor: pointer;
        }
      }
      .towul {
        display: flex;
        align-items: center;
        width: 1100px;
        flex-wrap: wrap;
        margin-bottom: 10px;
        li {
          padding: 0 13px;
          line-height: 30px;
          margin-top: 18px;
          min-width: 20px;
          cursor: pointer;
          text-align: center;
        }
      }
      .nav0101 {
        line-height: 30px;
        height: 30px;
        margin-left: 10px;
        display: inline-block;
        cursor: pointer;
        padding: 0 13px;
        border-radius: 5px;
        margin-top: 18px;
      }
      .navli {
        background: #32afe9;
        color: #ffffff;
        padding: 0 13px;
        border-radius: 5px;
        cursor: pointer;
      }
      .nav-li {
        background: #32afe9;
        color: #ffffff;
        margin-left: 30px;
        padding: 0 13px;
      }
      .nav010 {
        line-height: 30px;
        height: 30px;
        margin-left: 10px;
        margin-top: 20px;
        display: inline-block;
        cursor: pointer;
        padding: 0 13px;
        border-radius: 5px;
      }
    }
  }

  .contener {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .list {
      width: 1065px;
      box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
      ul {
        background: #f4f4f4;
        li {
          width: 1065px;
          background: #ffffff;
          box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
          box-sizing: border-box;
          display: flex;
          .list_dcp {
            width: 210px;
            height: 270px;
            padding: 24px 0 26px 29px;
            box-sizing: border-box;
            div {
              width: 160px;
              height: 210px;
              border: 1px solid red;
            }
          }
          .list_one {
            width: 850px;
            padding: 0px 40px 0px 20px;
            height: 90px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            box-sizing: border-box;
            .c1 {
              font-size: 20px;
              font-family: Microsoft YaHei;
              color: #333333;
              line-height: 40px;
            }
            .c2 {
              font-size: 24px;
              font-family: Microsoft YaHei;
              color: #999999;
              line-height: 40px;
              color: #ff7f5a;
            }
            .c9 {
              width: 140px;
              line-height: 50px;
              text-align: center;
              font-size: 18px;
              font-family: Microsoft YaHei;
              color: #ff7f5a;
              border: 1px solid #ff7f5a;
              // background: linear-gradient(0deg, #ff8b45, #ff684a);
              border-radius: 10px;
              cursor: pointer;
              a {
                display: block;
                width: 140px;
                line-height: 50px;
                color: #ff7f5a;
              }
            }
            .c9:hover {
              width: 140px;
              line-height: 50px;
              text-align: center;
              font-size: 18px;
              font-family: Microsoft YaHei;
              color: #ffffff;
              border: 1px solid #ff7f5a;
              background: linear-gradient(0deg, #ff8b45, #ff684a);
              border-radius: 10px;
              a {
                color: #ffffff;
              }
            }
          }
          .list_two {
            width: 850px;
            padding: 0px 40px 0px 20px;
            .list01 {
              span {
                font-size: 16px;
                font-family: Microsoft YaHei;
                color: #666666;
                line-height: 40px;
              }
            }
            .list02 {
              font-size: 16px;
              font-family: Microsoft YaHei;
              color: #666666;
              line-height: 40px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    .right-adv {
      width: 240px;
      background: #ffffff;
      margin-left: 25px;
      .adv1 {
        width: 240px;
        height: 200px;
        background: #ffffff;
        box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
        padding: 10px 0 0 14px;
        box-sizing: border-box;
        .adv01 {
          font-size: 20px;
          font-family: Microsoft YaHei;
          color: #32afe9;
          line-height: 40px;
        }
        .adv02 {
          font-size: 16px;
          font-family: Microsoft YaHei;
          color: #999999;
          line-height: 30px;
        }
        span {
          width: 100px;
          line-height: 30px;
          text-align: center;
          color: #32afe9;
          margin-top: 20px;
          border: 1px solid #32afe9;
        }
      }
      .adv2 {
        width: 240px;
        height: 290px;
        background: #ffffff;
        box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
        margin-top: 30px;
        padding: 10px 10px 0 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
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
}
.pages {
  width: 1065px;
  display: flex;
  justify-content: center;
  // margin-top: 20px;
  // margin-bottom: 20px;
  padding: 20px 0 20px 0;
}
.el-pagination {
}
.list-one {
  background: #ffffff;
}
</style>