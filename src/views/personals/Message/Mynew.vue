<template>
  <div class="mynew">
    <div class="mynew01">
      <div class="new01">
        <div @click="xuanzhong"
             class="new02"
             :class="{active10:flag===1}">未读消息</div>
        <div class="new03"
             @click="xuanzhong2"
             :class="{active10:flag===2}">已读消息</div>
      </div>
      <div class="my01">
        未读消息<span style="color:#0296f6;"> 1 </span>条
      </div>
    </div>
    <div class="tables">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column prop="date"
                         label="消息标题">
        </el-table-column>
        <el-table-column prop="name"
                         label="消息类型">
        </el-table-column>
        <el-table-column prop="address"
                         label="消息时间">
        </el-table-column>
        <el-table-column prop="date"
                         label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)"
                       type="text"
                       size="small">已读</el-button>
            <el-button type="text"
                       size="small"
                       style="color:red;">删除</el-button>
          </template>
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
  methods: {
    handleClick () { },
    xuanzhong () {
      this.flag = 1
    },
    xuanzhong2 () {
      this.flag = 2
    }
  }
}
</script>

<style lang="scss" scoped>
.mynew {
  .mynew01 {
    margin-top: 32px;
    width: 100%;
    height: 60px;
    background: #fbfbfb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .new01 {
      display: flex;
      .new02 {
        width: 120px;
        text-align: center;
        line-height: 60px;
      }
      .new03 {
        width: 120px;
        line-height: 60px;
        text-align: center;
      }
      .active10 {
        background: #f4f4f4;
        color: #0296f6;
      }
      div:hover {
        color: #0296f6;
        cursor: pointer;
      }
    }
    .my01 {
      margin-right: 25px;
    }
  }
  .tables {
    margin-top: 20px;
  }
}
</style>