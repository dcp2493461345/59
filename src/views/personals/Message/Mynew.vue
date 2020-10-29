<template>
  <div class="mynew">
    <div class="mynew01">
      <div class="new01">
        <div @click="xuanzhong"
             class="new02"
             :class="{active10:status===1}">未读消息</div>
        <div class="new03"
             @click="xuanzhong2"
             :class="{active10:status===2}">已读消息</div>
      </div>
      <div v-show="status===1"
           class="my01">
        未读消息
        <span style="color:#0296f6;">{{total}}</span>条
      </div>
      <div v-show="status===2"
           class="my01">
        已读消息
        <span style="color:#0296f6;">{{total}}</span>条
      </div>
    </div>
    <div class="tables">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"
                     inline
                     class="demo-table-expand">
              <el-form-item label="">
                <span>{{ props.row.msg_text }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="消息标题"
                         prop="title">
        </el-table-column>
        <el-table-column label="消息类型"
                         prop="msg_type">
        </el-table-column>
        <el-table-column label="消息时间"
                         prop="create_time">
        </el-table-column>
        <el-table-column label="操作"
                         prop="create_time">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status==1"
                       @click="handleClick(scope.row)"
                       type="text"
                       size="small">已读</el-button>
            <el-button type="text"
                       @click="remove(scope.row)"
                       size="small"
                       style="color:red;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import local from "@/utils/local";
import { Querymessage, Altermessage } from "@/api/account.js"
export default {
  data () {
    return {
      tableData: [],
      user: {},
      status: 1,
      total: 0,
      total1: 0,
    }
  },
  created () {
    this.user = local.get('username')
    this.Querymessage()
  },
  methods: {
    async handleClick (row) {
      const data = await Altermessage({
        userid: this.user.user_id,
        msg_id: row.id,
        msg_status: 2
      })
      console.log(data);
      if (data.code == 200) {
        this.Querymessage()
      }
    },
    xuanzhong () {
      this.status = 1
      this.Querymessage()
    },
    xuanzhong2 () {
      this.status = 2
      this.Querymessage()
    },
    formateDate (time) {
      function addDateZero (num) {
        return (num < 10 ? "0" + num : num);
      }
      let t = new Date(time);
      let datetime = t.getFullYear() + '-' + addDateZero(t.getMonth() + 1) + '-' + addDateZero(t.getDate()) + ' ' + addDateZero(t.getHours()) + ':' + addDateZero(t.getMinutes()) + ':' + addDateZero(t.getSeconds());
      return datetime;
    },
    async remove (row) {
      const data = await Altermessage({
        userid: this.user.user_id,
        msg_id: row.id,
        msg_status: 3
      })
      if (data.code == 200) {
        this.Querymessage()
      }
    },
    async Querymessage () {
      const data = await Querymessage({
        userid: this.user.user_id,
        status: this.status
      })
      console.log(data);
      data.data.forEach(v => {
        v.create_time = this.formateDate(v.create_time)
        v.update_time = this.formateDate(v.update_time)
      })
      this.tableData = data.data;
      this.total = data.total_count
      if (this.status == 1) {
        this.$store.commit("setTotal", this.total);
      }
    },
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