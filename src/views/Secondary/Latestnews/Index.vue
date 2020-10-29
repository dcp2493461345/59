<template>
  <div class="container-fluid">
    <Header></Header>
    <div class="latesnew"
         v-if="!xiangqingshow">
      <div class="new01">
        <div class="container advertising">
          <div class="advert-one"></div>
          <div class="advert-two">最新资讯</div>
        </div>
      </div>
      <div class="container-fluid new02">
        <div class="container new_1">
          <div class="one"
               @click="xiangqingye(item)"
               v-for="(item,index) in zixutable"
               :key="index">
            <img :src="item.index_pic"
                 alt="">
            <p>{{item.title}}</p>
          </div>

        </div>
        <div class="container new_2"></div>
        <div class="container new_1">
          <div class="one"
               @click="xiangqingye(item)"
               v-for="(item,index) in zixutable1"
               :key="index">
            <img :src="item.index_pic"
                 alt="">
            <p>{{item.title}}</p>

          </div>

        </div>
      </div>
      <div class="new01">
        <div class="container advertising">
          <div class="advert-one"></div>
          <div class="advert-two">专题活动</div>
        </div>
      </div>
      <div class="container-fluid new02">
        <div class="container new_1">
          <div class="one"
               @click="xiangqingye(item)"
               v-for="(item,index) in huodongtable"
               :key="index">
            <img :src="item.index_pic"
                 alt="">
            <p>{{item.title}}</p>
          </div>

        </div>
        <div class="container new_2"></div>
        <div class="container new_1">
          <div class="one"
               @click="xiangqingye(item)"
               v-for="(item,index) in huodongtable1"
               :key="index">
            <img :src="item.index_pic"
                 alt="">
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <div class="new03 container-fluid">

      </div>
    </div>
    <div class="latesnew"
         v-if="xiangqingshow">
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
    this.Queryinfo()
    this.Queryinfo1()
  },
  data () {
    return {
      zixutable: [],
      zixutable1: [],
      huodongtable: [],
      huodongtable1: [],
      xiangqingshow: false,
      xiangqcontent: {}
    }
  },
  methods: {
    async Queryinfo () {
      const data = await Queryinfo({
        flag: 1
      })
      data.data.forEach((v, i) => {
        if (i > 2) {
          this.zixutable1.push(v)
        } else {
          this.zixutable.push(v)
        }
      })
    },
    async Queryinfo1 () {
      const data = await Queryinfo({
        flag: 2
      })
      data.data.forEach((v, i) => {
        if (i > 2) {
          this.huodongtable.push(v)
        } else {
          this.huodongtable1.push(v)
        }
      })
      console.log(data);
    },
    xiangqingye (row) {
      this.$router.push({ name: "Centent", query: { row } })
    }
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
      cursor: pointer;
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