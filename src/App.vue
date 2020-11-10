<template>
  <router-view />
</template>
<script>
import local from "@/utils/local";
import { Verifytoken, Querymessage, Querysupuser } from "@/api/account.js"
export default {
  data () {
    return {
      user: {},
      ordernum: '',
      total_count: 0
    }
  },
  created () {
    this.user = local.get('username')
    // this.Querymessage()

  },
  methods: {
    // async Querymessage () {
    //   const data = await Querymessage({
    //     userid: this.user.user_id,
    //     status: 1,
    //   })
    //   this.total_count = data.total_count
    //   this.$store.commit("setTotal", this.total_count);
    // },
    //查询经纪人
    async  Querysupusers () {
      const data = await Querysupuser({})
      this.$store.commit("setSupuser", data.data);
    },
  },

  // mounted(){
  //         // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
  //         window.onbeforeunload = function (e) {
  //             var storage = window.localStorage;
  //             storage.clear()
  //         }
  //     }
  mounted () {
    this.Querysupusers()

    var storage = window.localStorage;
    let beginTime = 0; //开始时间
    let differTime = 0; //时间差
    window.onunload = function () {
      differTime = new Date().getTime() - beginTime;
      if (differTime <= 5) {
        window.localStorage.clear()
        window.sessionStorage.clear()
        console.log("这是关闭");
      } else {
        console.log("这是刷新");
      }
    };
    window.onbeforeunload = function () {
      beginTime = new Date().getTime();
    };
  }
}
</script>
<style lang="scss">
</style>
