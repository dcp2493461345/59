<template>
  <div>
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
                         label="订单金额">
        </el-table-column>

        <el-table-column prop="date"
                         label="订单状态">
        </el-table-column>
        <el-table-column prop="date"
                         label="订单详情">
        </el-table-column>
        <el-table-column prop="date"
                         label="操作">
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
      }],
      flag: 1
    }
  },
}
</script>

<style lang="scss" scoped>
.tables {
  margin-top: 20px;
}
</style>