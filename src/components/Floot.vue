<template>
  <div class="floot container-fluid">
    <div class="container floot01">
      <div class="floot01_1">
        <ul>
          <li>新手上路</li>
          <li>资费介绍</li>
          <li>关于我们</li>
          <li class="xiaoxie"
              v-for="(item,index) in 12"
              :key="index">59平台资质</li>
        </ul>
      </div>
      <div class="floot01_2">
        <img class="saoma"
             src="@/assets/imge/ewm.png"
             alt="">
        <ul>
          <li>
            <span class="two_floot">
              <img src="@/assets/imge/ic_dianhua.png"
                   alt="">
            </span>
            <span class="one_floot">
              联系电话：400-128-0616
            </span>
          </li>
          <li>
            <span class="two_floot">
              <img src="@/assets/imge/ic_youxiang.png"
                   alt="">
            </span>
            <span class="one_floot">
              邮箱：service@59danbao.cn
            </span>
          </li>
          <li>
            <span class="two_floot">
              <img src="@/assets/imge/ic_kefuqq.png"
                   alt="">
            </span>
            <span class="one_floot">
              客服qq：3007382634
            </span>
          </li>
          <li>
            <span class="two_floot">
              <img src="@/assets/imge/ic_gongzuoshijian.png"
                   alt="">
            </span>
            <span class="one_floot">
              工作时间：周一至周五 9:00~18:00
            </span>
          </li>
          <li>
            <span class="two_floot">
              <img src="@/assets/imge/ic_gongsidizhi.png"
                   alt="">
            </span>
            <span class="one_floot">
              公司地址：苏州市园区启月街288号紫金东方C座
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid blogroll">
      <div class="container blogroll_01">
        <span>友情链接：</span>
        <span><a href="#">百度</a></span>
        <span class="shuxian"></span>
        <span><a href="#">搜狗</a></span>
        <span class="shuxian"></span>
        <span><a href="#">支付宝</a></span>
        <span class="shuxian"></span>
        <span><a href="#">阿里云</a></span>
        <span class="shuxian"></span>
        <span><a href="#">腾讯云</a></span>
        <span class="shuxian"></span>
        <span><a href="#">财付通</a></span>
        <span class="shuxian"></span>
        <span><a href="#">宝塔面板</a></span>
        <span class="shuxian"></span>
        <span><a href="#">聚合数据</a></span>
      </div>
    </div>
    <div class="container flootes">
      <p>增值电信业务经营许可证：苏B2-20200508 在线数据处理与交易许可证：苏B2-20200508</p>
      <p>
        Copyright©2018-2020 59担保网 59danbao.cn All rights reserved 苏州智汇魔方网络科技有限公司 版权所有 苏ICP备18046159号-2
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.floot {
  height: 408px;
  background: rgba(54, 55, 68, 1);
  padding-top: 30px;
  box-sizing: border-box;
  .floot01 {
    display: flex;
    .floot01_1 {
      width: 548px;
      height: 208px;
      border-right: 1px solid rgba(103, 107, 120, 1);
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          font-size: 20px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          margin-right: 92px;
          margin-bottom: 30px;
        }
        .xiaoxie {
          width: 113px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          margin-right: 60px;
          margin-bottom: 30px;
        }
      }
    }
    .floot01_2 {
      position: relative;
      ul {
        li {
          display: flex;
          align-items: center;
          span {
            display: block;
          }
          .two_floot {
            margin-left: 112px;
            img {
              width: 34px;
              height: 34px;
            }
          }
          .one_floot {
            margin-left: 30px;
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            line-height: 43px;
          }
        }
      }
      .saoma {
        position: absolute;
        right: -170px;
      }
    }
  }
  .blogroll {
    margin-top: 20px;
    height: 50px;
    background: rgba(76, 86, 207, 1);
    .blogroll_01 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 50px;
      span {
        display: block;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        a {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
        }
        a:hover {
          color: #ff8b45;
        }
      }
      .shuxian {
        height: 18px;
        width: 2px;
        background: #ffffff;
      }
    }
  }
  .flootes {
    padding-top: 15px;
    box-sizing: border-box;
    p {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(204, 204, 204, 1);
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>