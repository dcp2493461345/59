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
                    <router-link to="/consignment/details">查看详情</router-link>
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
              <p class="adv01">您也有网站寄售需求？</p>
              <p class="adv02">1.发布任务招标信息</p>
              <p class="adv02">2.商家主动参与竞标</p>
              <p class="adv02">3.自由选择最佳投标</p>
              <span @click="daishouweituo">+代售委托</span>
              <span @click="daishouweituo1"
                    style="margin-left: 10px;">+代购委托</span>
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
                    <a class="qqdianji"
                       style="color:#fff;"
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
          <div></div>
        </div>
      </div>
    </div>
    <Floot></Floot>
    <el-dialog class="operates11"
               :visible.sync="isshow">
      <div class="one">
        <span v-if="role==1"
              class="one_2">代售委托</span>
        <span v-if="role==2"
              class="one_2">代购委托</span>
      </div>
      <div class="conterentsd">
        <div class="left-from"
             style="width:657px;">
          <p style="margin-left:68px;width: 96px;height: 24px;font-size: 24px;font-family: Microsoft YaHei;font-weight: bold;color: #2798CE;">交易信息</p>
          <el-form ref="form"
                   :model="form"
                   label-width="144px">
            <el-form-item label="标题 ：">
              <el-input v-model="form.title"
                        placeholder="请输入展示的委托标题,标题越好越吸引人哦！"></el-input>
              <span class="tishiy"
                    v-if="showts1"
                    style="color:red;">请输入标题</span>
            </el-form-item>
            <el-form-item label="描述 ：">
              <el-input type="textarea"
                        class="textarea"
                        v-model="form.content"
                        placeholder="请简要说明委托的卖点"></el-input>
              <span class="tishiy1"
                    v-if="showts2"
                    style="color:red;">请简要说明委托的卖点</span>
            </el-form-item>
            <el-form-item label="价格 ：">
              <el-input v-model="form.price"
                        placeholder="请输入您的心里预期价格（默认议价）"></el-input>
              <span class="tishiy"
                    v-if="showts3"
                    style="color:red;">请输入价格</span>
              <span class="tishiy"
                    v-if="showts11"
                    style="color:red;">价格格式错误</span>
            </el-form-item>
            <p style="margin-left:16px;width: 96px;height: 24px;font-size: 24px;font-family: Microsoft YaHei;font-weight: bold;color: #2798CE;">个人信息</p>
            <el-form-item label="QQ ：">
              <el-input v-model="form.qq"
                        placeholder="请输入您的QQ，请确保可以及时与您沟通">></el-input>
              <span class="tishiy"
                    v-if="showts4"
                    style="color:red;">请输入QQ</span>
              <span class="tishiy"
                    v-if="showts12"
                    style="color:red;">QQ格式错误</span>
            </el-form-item>
            <el-form-item label="手机 ：">
              <el-input v-model="form.mobile"
                        placeholder="请输入您的手机号，请确保可以及时与您沟通"></el-input>
              <span class="tishiy"
                    v-if="showts5"
                    style="color:red;">请输入手机号</span>
              <span class="tishiy"
                    v-if="showts6"
                    style="color:red;">手机号错误</span>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checkedesdcp">
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
          <p class="right_one">
            <span class="wenhao"></span>发布委托是否收费</p>
          <p class="right_two">
            发布委托是免费的，只有成功出售或者购买收取相应中介费。
          </p>
          <p class="right_one"
             style="margin-top:182px;">
            <span class="wenhao"></span>发布委托何时受理</p>
          <p class="right_two">
            发布委托后，51担保网会及时处理您的需求，请耐心等待。
          </p>
          <p class="right_one"
             style="margin-top:182px;">
            <span class="wenhao"></span>联系方式</p>
          <p class="right_two">
            为保障委托及时受理，请填写真实有效的联系方式。
          </p>
        </div>
      </div>

    </el-dialog>
  </div>
</template>

<script>
import local from "@/utils/local";
import { Merchandise, Queryproject, Entrustdeal } from "@/api/account.js"
import Header from "@/components/Header.vue"
import Floot from '@/components/Floot.vue'
export default {
  components: {
    Header,
    Floot
  },
  created () {
    if (this.$route.params.num_id) {
      this.checked = this.$route.params.num_id
    }

    this.getList()
    this.getproject()
    this.$store.state.supuser.forEach((v, i) => {
      if (i < 2) {
        this.supser.push(v)
      }
    })

  },
  data () {
    return {
      supser: [],
      tabedata: [],
      count: 0,
      currentPage: 1,//当前页
      pagesize: 8,//每页条数
      project: {},
      checked: '',//选中类型
      quanzhong: '',//选中权重
      selprice: '',//选中售价
      sinpoint: '',//选中卖点
      isshow: false,
      role: 1,
      form: {
        title: '',//标题
        content: '',//内容
        price: '',//价格
        qq: '',//买家联系方式
        mobile: "",//卖家联系方式
      },
      showts: false,
      showts1: false,
      showts2: false,
      showts3: false,
      showts4: false,
      showts5: false,
      showts6: false,
      showts11: false,
      showts12: false,
      checkedesdcp: false,

    }
  },
  methods: {
    daishouweituo () {
      this.isshow = true;
      this.role = 1
    },
    daishouweituo1 () {
      this.isshow = true;
      this.role = 2
    },
    //担保发布
    async onSubmit () {
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
      } else if (!this.form.qq) {
        this.showts4 = true
        setTimeout(() => {
          this.showts4 = false
        }, 3000)
      } else if (!this.form.mobile) {
        this.showts5 = true
        setTimeout(() => {
          this.showts5 = false
        }, 3000)
      } else if (this.checkedesdcp) {
        const data = await Entrustdeal({
          username: local.get('username').username,
          title: this.form.title,
          describe: this.form.content,
          price: this.form.price,
          qq: this.form.qq,
          mobile: this.form.mobile,
          role: this.role
        })
        console.log(data);
        if (data.code == 200) {
          this.isshow = false
          this.form = {}
          this.flag = 1
          this.checkedesdcp = false
          this.$message({
            message: data.message,
            type: 'success'
          });
        } else if (data.code == 400 && data.message == "手机号错误") {
          this.showts6 = true
          this.showts5 = false
          setTimeout(() => {
            this.showts6 = false
          }, 3000)
        } else if (data.code == 400 && data.message == "价格格式错误") {
          this.showts11 = true

          setTimeout(() => {
            this.showts11 = false
          }, 3000)
        } else if (data.code == 400 && data.message == "QQ格式错误") {
          this.showts12 = true

          setTimeout(() => {
            this.showts12 = false
          }, 3000)
        }
      } else {
        this.showts = true
        setTimeout(() => {
          this.showts = false
        }, 3000)
      }
    },
    //获取商品
    async getList () {
      const data = await Merchandise({
        project_key: "consign_ment",
        pagesize: this.pagesize,
        pagenum: this.currentPage,
        category_2: this.checked,
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
      console.log(v);
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
      this.$router.push({ path: "/consignment/details", query: { id: item.id } })
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
        font-size: 18px;
      }
      .table1 {
        margin-left: 20px;
        display: inline-block;
        margin-top: 18px;
        font-size: 18px;
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
          font-size: 16px;
          // margin-top: 30px;
          cursor: pointer;
        }
        li:hover {
          color: #32afe9;
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
          font-size: 16px;
          cursor: pointer;
          text-align: center;
        }
        li:hover {
          color: #32afe9;
        }
      }
      .navli {
        background: #32afe9;
        color: #ffffff;
        padding: 0 13px;
        border-radius: 5px;
        cursor: pointer;
      }
      .navli:hover {
        color: #ffffff !important;
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
      .nav010:hover {
        color: #32afe9;
      }
      .nav0101:hover {
        color: #32afe9;
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
          display: inline-block;
          width: 100px;
          line-height: 30px;
          text-align: center;
          color: #32afe9;
          margin-top: 20px;
          box-sizing: border-box;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: #32afe9;
          border: 1px solid #32afe9;
          cursor: pointer;
        }
        span:hover {
          background: #32afe9;
          color: #ffffff;
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
          .qqdianji:hover {
            color: #ccc !important;
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
        border-bottom: none;
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
            padding: 29px 0 0 50px;
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
            }
            .textarea {
              .el-textarea__inner::-webkit-input-placeholder {
                font-size: 16px !important;
                font-family: Microsoft YaHei;
                color: #999999 !important;
                line-height: 30px;
              }
              .el-textarea__inner::-moz-placeholder {
                font-size: 16px !important;
                font-family: Microsoft YaHei;
                color: #999999 !important;
                line-height: 30px;
              }
              .el-textarea__inner::-ms-input-placeholder {
                font-size: 16px !important;
                font-family: Microsoft YaHei;
                color: #999999 !important;
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
          border-left: 1px solid #e8e8e8;

          .right_one {
            height: 32px;
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #333333;
            display: flex;
            align-items: center;
            .wenhao {
              display: inline-block;
              width: 32px;
              height: 32px;
              background: url('~@/assets/imge/pic_wenhao.png') no-repeat;
              margin-right: 20px;
              margin-left: 30px;
            }
          }
          .right_two {
            width: 270px;
            height: 40px;
            font-size: 18px;
            font-family: Microsoft YaHei;
            margin-left: 30px;
            margin-top: 20px;
            color: #666666;
          }
        }
      }
    }
  }
}
.tishiyu {
  position: absolute;
  left: 218px;
  bottom: 170px;
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
</style>