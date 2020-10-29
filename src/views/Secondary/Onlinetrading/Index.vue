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
                      <img :src="item.pic"
                           alt="">
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
              <span @click="daishouweituo">+代售委托</span>
              <span @click="daishouweituo1"
                    style="margin-left: 10px;">+代购委托</span>
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
      this.$router.push({ path: "/onlinetrading/details5", query: { id: item.id } })
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
          font-size: 16px;
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
          font-size: 16px;
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
              img {
                width: 160px;
                height: 210px;
              }
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