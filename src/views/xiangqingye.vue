<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="latesnew">
      <div class="contentes container">
        <p class="text-one">
          {{xiangqcontent.title}}
        </p>
        <p class="text-two">
          {{xiangqcontent.text}}
        </p>
        <p class="text-three">
          <img :src="xiangqcontent.pic"
               alt="">
        </p>
      </div>
    </div>
    <Floot></Floot>
  </div>
</template>

<script>
import local from "@/utils/local";
import { Queryinfo } from "@/api/account.js"
import Header from "@/components/Header.vue"
import Floot from '@/components/Floot.vue'
export default {
  components: {
    Header,
    Floot
  },
  created () {
    this.xiangqcontent = this.$route.query.row
  },
  data () {
    return {

      xiangqcontent: {}
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.latesnew {
  padding: 140px 0 0px 0;
  background: #f4f4f4;
  box-sizing: border-box;
  .new01 {
    height: 90px;
    .advertising {
      margin-top: 30px;
      display: flex;
      .advert-one {
        width: 10px;
        height: 50px;
        background: rgba(76, 86, 207, 1);
      }
      .advert-two {
        font-size: 40px;
        line-height: 50px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(59, 59, 59, 1);
        margin-left: 22px;
      }
    }
  }
  .new02 {
    height: 760px;
    background: #ffffff;
    .new_1 {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      box-sizing: border-box;
      .one {
        width: 406px;
        height: 340px;
        img {
          width: 406px;
          height: 300px;
        }
        p {
          margin-top: 10px;
          text-align: center;
          font-family: Microsoft YaHei;
          color: #666666;
        }
      }
    }
    .new_2 {
      width: 1330px;
      height: 1px;
      background: #f4f4f4;
    }
  }
  .new03 {
    height: 120px;
    background: #f4f4f4;
  }
  .contentes {
    min-height: 600px;
    padding: 60px 200px 100px 296px;
    box-sizing: border-box;
    .text-one {
      font-size: 30px;
      color: #007bb7;
    }
    .text-two {
      margin-top: 30px;
      font-size: 14px;
      color: #666;
      line-height: 35px;
    }
    .text-three {
      margin-top: 30px;
    }
  }
}
</style>