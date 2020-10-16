<template>
  <div class="acounts001">
    <div class="orders">
      <span class="guolv">过滤：</span>
      <el-select v-model="value"
                 placeholder="所有">
        <el-option v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <span class="btnss">确认</span>
      <el-input class="inputes"
                placeholder="请输入订单号"></el-input>
      <span class="btnss1">搜索</span>
    </div>
    <div class="tables">
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
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
    }
    .btnss1 {
      display: inline-block;
      background: #17a1ff;
      width: 80px;
      line-height: 35px;
      color: #ffffff;
      text-align: center;
      border-radius: 5px;
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
  }
}
</style>