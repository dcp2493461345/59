<template>
  <div class="acounts001">
    <div class="orders">
      <span class="guolv">过滤：</span>
      <el-select v-model="value">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <span class="btnss"
            @click="sumbitqr">确认</span>
      <el-input class="inputes"
                v-model="ordernum"
                placeholder="请输入订单号"></el-input>
      <span class="btnss1"
            @click="sumbitqr1">搜索</span>
    </div>
    <div class="tables">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column prop="order_id"
                         min-width="200"
                         label="订单号">
        </el-table-column>
        <el-table-column prop="create_time"
                         min-width="120"
                         label="时间">
        </el-table-column>
        <el-table-column prop="amount"
                         min-width="80"
                         label="金额">
        </el-table-column>
        <el-table-column prop="status"
                         min-width="60"
                         label="订单状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1">待支付</span>
            <span v-if="scope.row.status==2">待发货</span>
            <span v-if="scope.row.status==3">待收货</span>
            <span v-if="scope.row.status==4">待评价</span>
            <span v-if="scope.row.status==5">已完成</span>
            <span v-if="scope.row.status==6">已取消</span>
          </template>
        </el-table-column>
        <el-table-column prop="detail"
                         label="订单详情">
        </el-table-column>
        <el-table-column prop="comment"
                         label="订单备注">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import local from "@/utils/local";
import { Queryorder } from "@/api/account.js"
export default {
  data () {
    return {
      options: [
        {
          value: '0',
          label: '所有'
        },
        {
          value: '1',
          label: '待支付'
        }, {
          value: '2',
          label: '待发货'
        }, {
          value: '3',
          label: "待收货"
        }, {
          value: '4',
          label: "待评价"
        }, {
          value: '5',
          label: "已完成"
        }, {
          value: '6',
          label: "已取消"
        }
      ],
      value: '',
      tableData: [
      ],
      user: {},
      ordernum: ''
    }
  },
  created () {
    this.user = local.get('username')
    this.Queryorder()
  },
  methods: {
    async Queryorder () {
      const data = await Queryorder({
        userid: this.user.user_id,
        status: this.value,
        orderid: this.ordernum
      })
      data.data.forEach(v => {
        v.create_time = this.formateDate(v.create_time)
        v.update_time = this.formateDate(v.update_time)
      })
      this.tableData = data.data;
    },
    formateDate (time) {
      function addDateZero (num) {
        return (num < 10 ? "0" + num : num);
      }
      let t = new Date(time);
      let datetime = t.getFullYear() + '-' + addDateZero(t.getMonth() + 1) + '-' + addDateZero(t.getDate()) + ' ' + addDateZero(t.getHours()) + ':' + addDateZero(t.getMinutes()) + ':' + addDateZero(t.getSeconds());
      return datetime;
    },
    sumbitqr () {
      this.Queryorder()
      this.value = ''

    },
    sumbitqr1 () {
      this.Queryorder()
      this.ordernum = ""


    },
  }
}
</script>

<style lang="scss" scoped>
.acounts001 {
  width: 100%;
  padding: 20px 50px 0 50px;
  box-sizing: border-box;
  .orders {
    display: flex;
    align-items: center;
    .guolv {
      display: inline-block;
      width: 52px;
      line-height: 35px;
    }
    .btnss {
      display: inline-block;
      background: #ff9000;
      width: 80px;
      line-height: 35px;
      color: #ffffff;
      text-align: center;
      border-radius: 5px;
      margin-left: 10px;
      cursor: pointer;
    }
    .btnss1 {
      display: inline-block;
      background: #17a1ff;
      width: 80px;
      line-height: 35px;
      color: #ffffff;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 10px;
    }
    ::v-deep.inputes {
      width: 240px;
      margin-left: 290px;
      .el-input__inner {
        width: 240px;
      }
    }
    ::v-deep.el-select {
      .el-input--suffix {
        .el-input__inner {
          width: 120px;
          height: 40px;
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
}
</style>