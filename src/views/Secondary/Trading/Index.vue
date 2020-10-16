<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="subpage container-fluid">
      <div class="container">
        <div class="nav-one">
          <div class="nav-header ">
            <span class="table">类型：</span>
            <span style="margin-left:40px;"
                  @click="checkedes('')"
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
            <span class="table1">价格筛选：</span>
            <span class="nav0101 "
                  @click="selpriceselect('')"
                  :class="{navli:!selprice}">不限</span>
            <ul class="towul">
              <li @click="selpriceselect(1)"
                  :class="{navli:selprice== 1}">1000以下</li>
              <li @click="selpriceselect(2)"
                  :class="{navli:selprice== 2}">1000-5000</li>
              <li @click="selpriceselect(3)"
                  :class="{navli:selprice== 3}">5000-10000</li>
              <li @click="selpriceselect(4)"
                  :class="{navli:selprice== 4}">10000-50000</li>
              <li @click="selpriceselect(5)"
                  :class="{navli:selprice== 5}">50000以上</li>
            </ul>
          </div>
        </div>
        <div class="contener ">
          <div class="list">
            <div class="list-one">
              <ul>
                <li v-for="(item,index) in tabedata"
                    :key="index">
                  <div class="list_one">
                    <div>
                      <p class="c1">{{item.name}}</p>
                      <p class="c2">¥{{item.price}}</p>
                    </div>
                    <div class="c9">查看详情</div>
                  </div>
                  <div class="list_two">
                    <p class="list01">
                      <span>APP名称：</span>
                      <span style="color:#32AFE9">{{item.app_name}}</span>
                      <span style="margin-left:200px">总用户数：</span>
                      <span style="color:#32AFE9">{{item.user_count}}</span>
                      <span style="margin-left:150px">状态：</span>
                      <span style="color:#3AC053">在售</span>
                    </p>
                    <p class="list02">
                      卖家描述：{{item.describe}}
                    </p>
                  </div>
                </li>
              </ul>
              <div class="pages"
                   v-if="count>4">
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
              <p class="adv01">您也有App要出售？</p>
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
      pagesize: 4,//每页条数
      project: {},
      checked: '',//选中类型
      quanzhong: '',//选中权重
      selprice: '',//选中售价
      sinpoint: '',//选中卖点
    }
  },
  methods: {
    //获取商品
    async getList () {
      const data = await Merchandise({
        project_key: "app_deal",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: '',
        money: ''
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //查询项目类型
    async getproject () {
      const data = await Queryproject({
        project_key: 'app_deal'
      })
      console.log(data);
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
      const data = await Merchandise({
        project_key: "app_deal",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: this.checked,
        money: this.selprice
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //选中售价
    async selpriceselect (v) {
      this.selprice = v
      const data = await Merchandise({
        project_key: "app_deal",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: this.checked,
        money: this.selprice
      })
      this.tabedata = data.data
      this.count = data.total_count
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
        line-height: 30px;
        height: 30px;
        margin-left: 20px;
        display: inline-block;
        margin-top: 20px;
      }
      .table1 {
        margin-left: 20px;
        display: inline-block;
        margin-top: 25px;
      }
      .navli {
        background: #32afe9;
        color: #ffffff;
        padding: 0 13px;
        border-radius: 5px;
        cursor: pointer;
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
      .nav010 {
        line-height: 30px;
        height: 30px;
        margin-left: 10px;
        margin-top: 18px;
        display: inline-block;
        cursor: pointer;
        padding: 0 13px;
        border-radius: 5px;
      }
      ul {
        display: flex;
        align-items: center;
        li {
          height: 30px;
          line-height: 30px;
          padding: 0 13px;
          margin-top: 18px;
          cursor: pointer;
        }
        .nav-li {
          background: #32afe9;
          color: #ffffff;
          margin-left: 30px;
          padding: 0 13px;
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
    }
  }

  .contener {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .list {
      width: 1065px;
      height: 800px;
      box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
      ul {
        background: #f4f4f4;
        li {
          width: 1065px;
          background: #ffffff;
          box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
          .list_one {
            width: 1065px;
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
            }
          }
          .list_two {
            width: 1065px;
            padding: 0px 40px 0px 20px;
            box-sizing: border-box;
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
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
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