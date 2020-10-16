<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="subpage container-fluid">
      <div class="container">
        <div class="nav-one">
          <div class="nav-header ">
            <span class="table">类型：</span>
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
            <span class="table1">权重：</span>
            <span class="nav0101 "
                  @click="weightsselect('')"
                  :class="{navli:!quanzhong}">不限</span>
            <ul class="towul">
              <li @click="weightsselect(1)"
                  :class="{navli:quanzhong== 1}">1</li>
              <li @click="weightsselect(2)"
                  :class="{navli:quanzhong== 2}">2</li>
              <li @click="weightsselect(3)"
                  :class="{navli:quanzhong== 3}">3</li>
              <li @click="weightsselect(4)"
                  :class="{navli:quanzhong== 4}">4</li>
              <li @click="weightsselect(5)"
                  :class="{navli:quanzhong== 5}">5</li>
              <li @click="weightsselect(6)"
                  :class="{navli:quanzhong== 6}">6</li>
              <li @click="weightsselect(7)"
                  :class="{navli:quanzhong== 7}">7</li>
              <li @click="weightsselect(8)"
                  :class="{navli:quanzhong== 8}">8</li>
              <li @click="weightsselect(9)"
                  :class="{navli:quanzhong== 9}">9</li>
            </ul>
          </div>
          <!-- <div class="nav-header ">
            <span class="table1">流量：</span>
            <span class="nav0101 "
                  @click="weightsselect(0)"
                  :class="{navli:quanzhong== 0}">不限</span>
            <ul class="towul">
              <li @click="weightsselect(1)"
                  :class="{navli:quanzhong== 1}"></li>
              <li @click="weightsselect(2)"
                  :class="{navli:quanzhong== 2}">2</li>
              <li @click="weightsselect(3)"
                  :class="{navli:quanzhong== 3}">3</li>
              <li @click="weightsselect(4)"
                  :class="{navli:quanzhong== 4}">4</li>
              <li @click="weightsselect(5)"
                  :class="{navli:quanzhong== 5}">5</li>
              <li @click="weightsselect(6)"
                  :class="{navli:quanzhong== 6}">6</li>
              <li @click="weightsselect(7)"
                  :class="{navli:quanzhong== 7}">7</li>
              <li @click="weightsselect(8)"
                  :class="{navli:quanzhong== 8}">8</li>
              <li @click="weightsselect(9)"
                  :class="{navli:quanzhong== 9}">9</li>
            </ul>
          </div> -->
          <div class="nav-header ">
            <span class="table1">售价：</span>
            <span class="nav0101 "
                  @click="selpriceselect('')"
                  :class="{navli:!selprice}">不限</span>
            <ul class="towul">
              <li @click="selpriceselect(1)"
                  :class="{navli:selprice== 1}">1万以内</li>
              <li @click="selpriceselect(2)"
                  :class="{navli:selprice== 2}">1-3万</li>
              <li @click="selpriceselect(3)"
                  :class="{navli:selprice== 3}">3-5万</li>
              <li @click="selpriceselect(4)"
                  :class="{navli:selprice== 4}">5-10万</li>
              <li @click="selpriceselect(5)"
                  :class="{navli:selprice== 5}">10-50万</li>
              <li @click="selpriceselect(6)"
                  :class="{navli:selprice== 6}">50万以上</li>
            </ul>
          </div>
          <div class="nav-header ">
            <span class="table1">卖点：</span>
            <span class="nav0101 "
                  @click="sinpointselect('')"
                  :class="{navli:!sinpoint}">不限</span>
            <ul class="towul">
              <li @click="sinpointselect('高收录')"
                  :class="{navli:sinpoint== '高收录'}">高收录</li>
              <li @click="sinpointselect('新闻源')"
                  :class="{navli:sinpoint== '新闻源'}">新闻源</li>
              <li @click="sinpointselect('百度秒收')"
                  :class="{navli:sinpoint== '百度秒收'}">百度秒收</li>
              <li @click="sinpointselect('多年老站')"
                  :class="{navli:sinpoint== '多年老站'}">多年老站</li>
              <li @click="sinpointselect('回本快')"
                  :class="{navli:sinpoint== '回本快'}">回本快</li>
              <li @click="sinpointselect('长期稳定')"
                  :class="{navli:sinpoint== '长期稳定'}">长期稳定</li>
            </ul>
          </div>
        </div>
        <div class="contener ">
          <div class="list">
            <div class="list-one">
              <ul>
                <li v-for="(item,index) in tabedata"
                    :key="index">
                  <div class="dcp-lyl">
                    <p class="c1">{{item.name}}</p>
                    <p class="c2">域名：{{item.domain}} 卖点：{{item.mall}}权{{item.weight}} IP{{item.day_ip}} 收录{{item.include_count}}</p>
                  </div>
                  <div class="dcp-lyl1">
                    <p class="c3">托管赏金</p>
                    <p class="c4">{{item.price}}</p>
                  </div>
                  <div class="dcp-lyl2">
                    <span class="c5">{{item.weight}}</span>
                    <span class="c6"> 权重 </span>
                    <span class="c7"> | </span>
                    <!-- <span class="c5">3</span> -->
                    <span class="c6"
                          style="color:#3CBE0F;">在售</span>
                    <p class="c8">发布人：{{item.issue}}</p>
                  </div>
                  <div class="c9"
                       @click="xiangqing(item)">
                    <router-link to="/details">查看详情</router-link>
                  </div>
                </li>
              </ul>
              <div class="pages"
                   v-if="count>8">
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
              <p class="adv01">您也有任务需求？</p>
              <p class="adv02">1.发布任务招标信息</p>
              <p class="adv02">2.商家主动参与竞标</p>
              <p class="adv02">3.自由选择最佳投标</p>
              <span>+发布任务</span>
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
      pagesize: 8,//每页条数
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
        project_key: "consign_ment",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: '',
        weight: '',
        mall: "",
        money: ''
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //查询项目类型
    async getproject () {
      const data = await Queryproject({
        project_key: 'consign_ment'
      })
      console.log(data);
      this.project = data.data.type_id
    },
    //选中类型
    async checkedes (v) {
      this.checked = v
      const data = await Merchandise({
        project_key: "consign_ment",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: v,
        weight: this.quanzhong,
        mall: this.sinpoint,
        money: this.selprice
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //选中权重
    async weightsselect (v) {
      this.quanzhong = v
      const data = await Merchandise({
        project_key: "consign_ment",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: this.checked,
        weight: v,
        mall: this.sinpoint,
        money: this.selprice
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //选中售价
    async selpriceselect (v) {
      this.selprice = v
      const data = await Merchandise({
        project_key: "consign_ment",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: this.checked,
        weight: this.quanzhong,
        mall: this.sinpoint,
        money: v
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //选中卖点
    async sinpointselect (v) {
      this.sinpoint = v
      const data = await Merchandise({
        project_key: "consign_ment",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: this.checked,
        weight: this.quanzhong,
        mall: v,
        money: this.selprice
      })
      this.tabedata = data.data
      this.count = data.total_count
    },
    //查看详情
    xiangqing (item) {
      window.sessionStorage.setItem("particul", JSON.stringify(item))
    },
    handleSizeChange (val) {

    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getList()
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
        margin-top: 18px;
      }
      .oneul {
        display: flex;
        align-items: center;
        width: 940px;
        flex-wrap: wrap;
        margin-top: 20px;
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
        width: 940px;
        flex-wrap: wrap;
        margin-bottom: 10px;
        li {
          padding: 0 13px;
          line-height: 30px;
          margin-top: 10px;
          min-width: 20px;
          cursor: pointer;
          text-align: center;
        }
      }
      .navli {
        background: #32afe9;
        color: #ffffff;
        padding: 0 13px;
        border-radius: 5px;
        cursor: pointer;
      }
      .nav010 {
        line-height: 30px;
        height: 30px;
        margin-left: 20px;
        display: inline-block;
        margin-top: 20px;
        cursor: pointer;
        padding: 0 13px;
        border-radius: 5px;
      }
      .nav0101 {
        line-height: 30px;
        height: 30px;
        margin-left: 20px;
        display: inline-block;
        cursor: pointer;
        padding: 0 13px;
        border-radius: 5px;
        margin-top: 10px;
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
      min-height: 800px;
      box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
      ul {
        background: #f4f4f4;
        li {
          height: 90px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #ffffff;
          box-shadow: 0px 0px 20px 0px rgba(234, 234, 234, 0.35);
          margin-bottom: 10px;
          .c1 {
            font-size: 20px;
            font-family: Microsoft YaHei;
            color: #333333;
            line-height: 36px;
          }
          .c2 {
            font-size: 16px;
            font-family: Microsoft YaHei;
            color: #999999;
          }
          .c3 {
            font-size: 16px;
            font-family: Microsoft YaHei;
            color: #999999;
            line-height: 36px;
          }
          .c4 {
            font-size: 24px;
            font-family: Microsoft YaHei;
            color: #ff7f5a;
          }
          .c5 {
            font-size: 18px;
            font-family: Microsoft YaHei;
            color: #ff7f5a;
          }
          .c6 {
            font-size: 18px;
            font-family: Microsoft YaHei;
            color: #999999;
            line-height: 36px;
          }
          .c7 {
            color: #999999;
          }
          .c8 {
            font-size: 18px;
            font-family: Microsoft YaHei;
            color: #999999;
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
          display: block;
          width: 200px;
          line-height: 40px;
          border: 1px solid #ffffff;
          background: linear-gradient(0deg, #ff8b45, #ff684a);
          border-radius: 10px;
          text-align: center;
          color: #ffffff;
          margin-top: 5px;
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
.dcp-lyl {
  width: 500px;
}
.dcp-lyl1 {
  width: 110px;
}
.dcp-lyl2 {
  width: 200px;
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