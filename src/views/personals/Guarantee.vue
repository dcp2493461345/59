<template>
  <div class="acounts">
    <div class="account01">
      <ul>
        <li :class="{active01:$route.path=='/personal/guarantee'}">
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
        </li>
        <!-- <li :class="{active01:$route.path=='/personal/myacount/setting'}">
          <router-link to="/personal/myacount/setting">个人设置</router-link>
        </li> -->
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {

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
        background: url("~@/assets/imge/btn_tixianzhanghu.png") no-repeat;
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
        background: url("~@/assets/imge/btn_tianjiazhanghao.png") no-repeat;
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
}
</style>