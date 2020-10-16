<template>
  <div>
    <div class="tables">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column prop="date"
                         label="公告标题">
        </el-table-column>
        <el-table-column prop="name"
                         label="公告类型">
        </el-table-column>
        <el-table-column prop="address"
                         label="公告时间">
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