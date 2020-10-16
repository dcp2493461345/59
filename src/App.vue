<template>
  <router-view />
</template>
<script>
import { Verifytoken } from "@/api/account.js"
export default {
  created () {
    // this.Verifytoken()
    // window.onbeforeunload = function (e) {
    //   var storage = window.localStorage;
    //   storage.clear()
    // }
  },
  watch: {

  },
  methods: {
    // async Verifytoken () {
    //   const data = await Verifytoken({})
    //   console.log(data);
    // },
  },
  // mounted(){
  //         // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
  //         window.onbeforeunload = function (e) {
  //             var storage = window.localStorage;
  //             storage.clear()
  //         }
  //     }
  mounted () {
    var storage = window.localStorage;
    let beginTime = 0; //开始时间
    let differTime = 0; //时间差
    window.onunload = function () {
      differTime = new Date().getTime() - beginTime;
      if (differTime <= 5) {
        storage.clear()
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
