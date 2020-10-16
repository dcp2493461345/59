<template>
  <div class="saless">
    <div class="one01">
      <div class="onecent1">
        <span class="one">今日充值金额：</span>
        <span class="two">1200</span>
      </div>
      <div class="onecent2">
        <span class="one">本月充值金额：</span>
        <span class="two">1200</span>
      </div>
    </div>
    <div class="tableson">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column prop="date"
                         label="订单号">
        </el-table-column>
        <el-table-column prop="name"
                         label="时间">
        </el-table-column>
        <el-table-column prop="address"
                         label="金额">
        </el-table-column>
        <el-table-column prop="date"
                         label="角色">
        </el-table-column>
        <el-table-column prop="date"
                         label="订单状态">
        </el-table-column>
        <el-table-column prop="date"
                         label="订单详情">
        </el-table-column>
        <el-table-column prop="date"
                         label="订单备注">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '弄'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.saless {
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
      .two {
        font-size: 28px;
        font-family: Microsoft YaHei;
        color: #ff3636;
      }
      .one {
        font-size: 18px;
        font-family: Microsoft YaHei;
        color: #666666;
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
      .two {
        font-size: 28px;
        font-family: Microsoft YaHei;
        color: #ff3636;
      }
      .one {
        font-size: 18px;
        font-family: Microsoft YaHei;
        color: #666666;
      }
    }
  }
  .tableson {
    margin-top: 60px;
  }
}
</style>