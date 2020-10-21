<template>
  <div class="acounts">
    <div class="account01">
      <ul>
        <!-- <li :class="{active01:$route.path=='/personal/guarantee'}">
          <router-link to="/personal/guarantee">全部</router-link>
        </li>
        <li :class="{active01:$route.path=='/personal/guarantee/acccepted'}">
          <router-link to="/personal/guarantee/acccepted">已受理</router-link>
        </li>
        <li :class="{active01:$route.path=='/personal/guarantee/notaccept'}">
          <router-link to="/personal/guarantee/notaccept">未受理</router-link>
        </li>
        <li :class="{active01:$route.path=='/personal/guarantee/hrejected'}">
          <router-link to="/personal/guarantee/hrejected">已拒单</router-link>
        </li> -->
        <!-- <li :class="{active01:$route.path=='/personal/myacount/setting'}">
          <router-link to="/personal/myacount/setting">个人设置</router-link>
        </li> -->
        <li @click="tiaozhuan"
            :class="{active01:flag==1}">全部</li>
        <li @click="tiaozhuan1"
            :class="{active01:flag==2}">已受理</li>
        <li @click="tiaozhuan2"
            :class="{active01:flag==3}">未受理</li>
        <li @click="tiaozhuan3"
            :class="{active01:flag==4}">已拒单</li>
      </ul>
      <div class="inputesone">
        <el-input class="inputes"
                  placeholder="请输入订单号"></el-input>
        <span class="btnss1es">搜索</span>
      </div>
      <!-- <div class="right01">
        <div class="right_1">
          <img src="@/assets/imge/pic_tixianzhanghu.png"
               alt="">
          提现账户</div>
        <div class="right_2">
          <img src="@/assets/imge/pic_tianjiazhanghao.png"
               alt="">
          添加账号</div>
      </div> -->
    </div>
    <div class="tables">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column prop="num"
                         min-width="200"
                         label="订单号">
        </el-table-column>
        <el-table-column prop="update_time"
                         min-width="120"
                         label="时间">
        </el-table-column>
        <el-table-column prop="price"
                         min-width="80"
                         label="订单金额">
        </el-table-column>

        <el-table-column prop="status"
                         min-width="60"
                         label="订单状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1">未受理</span>
            <span v-if="scope.row.status==2">已受理</span>
            <span v-if="scope.row.status==3">已拒单</span>
          </template>
        </el-table-column>
        <el-table-column prop="content"
                         label="订单详情">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1"
                  style="color:#17A1FF;cursor: pointer;"
                  @click="sumbit(scope.row)">取消订单</span>
            <span v-if="scope.row.status==2"
                  style="color:red">已受理</span>
            <span v-if="scope.row.status==3"
                  style="color:red">已拒单</span>
          </template>
        </el-table-column>
      </el-table>

    </div>
    <!-- <div class="block">
      <p class="record-data">共{{ pageNums }}页,共{{ totalPage }}条</p>
      <el-pagination background
                     :page-size="pageSize"
                     layout="prev, pager, next, jumper"
                     :total="totalPage"
                     :current-page.sync="currentPage"
                     @current-change="handleCurrentChange" />
    </div> -->
    <el-dialog title="提示"
               :visible.sync="Application"
               :append-to-body="true"
               center
               class="reminder"
               top="35vh"
               :close-on-click-modal="false"
               width="380px">
      <div class="footer-one">
        <p>您确定取消订单？</p>
      </div>
      <div class="footer-class">
        <span class="one"
              @click="countermand">取消</span>
        <span class="two"
              @click="verify">确认</span>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import local from "@/utils/local";
import { Querysecured, Cancelsecured } from "@/api/account.js"
export default {
  data () {
    return {
      flag: 1,
      tableData: [],
      pageNums: 1, // 总页数
      totalPage: null, // 总条数
      currentPage: 1, // 当前页
      pageSize: 10, // 当前页条数
      Application: false,
      num: '',
      status: ""
    }
  },
  created () {
    this.getList()
  },
  methods: {
    tiaozhuan () {
      this.flag = 1
      this.status = ''
      this.getList()
    },
    tiaozhuan1 () {
      this.flag = 2
      this.status = 2
      this.getList()
    },
    tiaozhuan2 () {
      this.flag = 3
      this.status = 1
      this.getList()
    },
    tiaozhuan3 () {
      this.flag = 4
      this.status = 3
      this.getList()
    },
    formateDate (time) {
      function addDateZero (num) {
        return (num < 10 ? "0" + num : num);
      }
      let t = new Date(time);
      let datetime = t.getFullYear() + '-' + addDateZero(t.getMonth() + 1) + '-' + addDateZero(t.getDate()) + ' ' + addDateZero(t.getHours()) + ':' + addDateZero(t.getMinutes()) + ':' + addDateZero(t.getSeconds());
      return datetime;
    },
    async getList () {
      const data = await Querysecured({
        username: local.get('username').username,
        pagesize: this.pageSize,
        pagenum: this.currentPage,
        status: this.status
      })
      console.log(data);
      data.data.forEach(v => {
        v.create_time = this.formateDate(v.create_time)
        v.update_time = this.formateDate(v.update_time)
      })
      this.tableData = data.data;
      this.totalPage = data.total_count; // 总条数
      this.pageNums = data.total_page;
    },
    // 分页设置
    handleCurrentChange (val) {
      this.currentPage = val;
      this.getList();
    },
    sumbit (v) {
      this.Application = true;
      this.num = v.num
    },
    countermand () {
      this.Application = false;
    },
    async verify () {
      const data = await Cancelsecured({
        num: this.num,
        username: local.get('username').username
      })
      console.log(data);
      this.Application = false;
      this.getList()
    },
  }
}
</script>

<style lang="scss" scoped>
.acounts {
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  .account01 {
    line-height: 50px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      li {
        margin-right: 24px;
        cursor: pointer;
        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .active01 {
        border-bottom: 4px solid #0296f6;
        color: #0296f6;
        a {
          color: #0296f6;
        }
      }
      a:hover {
        color: #0296f6;
      }
    }
    .inputesone {
      ::v-deep.inputes {
        width: 240px;
        .el-input__inner {
          width: 240px;
        }
      }
      .btnss1es {
        background: #17a1ff;
        width: 80px;
        line-height: 35px;
        color: #ffffff;
        text-align: center;
        border-radius: 5px;
        display: inline-block;
        margin-left: 10px;
      }
    }

    .right01 {
      display: flex;
      align-items: center;
      div {
        width: 100px;
      }
      .right_1 {
        width: 100px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: url('~@/assets/imge/btn_tixianzhanghu.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        cursor: pointer;
        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }
      .right_2 {
        width: 100px;
        cursor: pointer;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: url('~@/assets/imge/btn_tianjiazhanghao.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }
    }
  }
  .tables {
    margin-top: 20px;
    height: 660px;
    overflow: auto;
  }
  /*修改滚动条样式*/
  .tables::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    /**/
  }
  .tables::-webkit-scrollbar-track {
    background: rgb(239, 239, 239);
    border-radius: 2px;
  }
  .tables::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 10px;
  }
  .tables::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
  .tables::-webkit-scrollbar-corner {
    background: #179a16;
  }
  //分页器的样式
  .block {
    background: #fff;
    .record-data {
      cursor: default;
      display: inline-block;
      line-height: 11px;
      padding-left: 20px;
      margin-top: 15px;
      position: absolute;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    position: relative;
    height: 40px;
    width: 100%;
    .el-pagination {
      position: absolute;
      bottom: 1px;
      right: 87px;
      button {
        min-width: 24px !important;
        height: 24px;
      }
      .el-pagination__jump {
        position: relative;
        margin-left: 0px;
        color: #fff;
        font-size: 0px;
        //input和ul是否居中
        margin-top: 0px;

        .el-input {
          font-family: Microsoft YaHei;
          font-weight: 400;
          height: 24px;
          width: 40px !important;
          margin-left: 5px;
          outline: none;
          color: rgba(102, 102, 102, 1);

          .el-input__inner {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            display: inline-block;
            width: 40px;
            margin-left: 48px;
            height: 24px !important;
            border: 1px solid rgba(239, 242, 245, 1) !important;
            border-radius: 3px;
            outline: none;
          }
          &::before {
            content: '前往';
            color: #fff;
            font-size: 14px;
            margin-left: 4px;
            position: absolute;
            margin-top: 3px;
            text-align: center;
            height: 24px;
          }
          &:after {
            content: '页';
            padding-left: 10px !important;
            font-size: 14px;
            position: absolute;
            top: 3px;
          }
        }
      }
      .el-pager li {
        min-width: 24px;
        height: 24px;
        border-radius: 3px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 24px;
      }
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background: #5fafe4;
      color: rgba(255, 255, 255, 1);
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
        margin-left: 98px;
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