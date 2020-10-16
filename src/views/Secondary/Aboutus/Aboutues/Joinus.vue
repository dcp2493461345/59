<template>
  <div class="joinus container-fluid">
    <div class="container join01"></div>
    <div class="container join02">
      <img src="@/assets/imge/pic_jiaruwomen2.png"
           alt="">
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.joinus {
  background: #f4f4f4;
  .join01 {
    margin-top: 29px;
    background: url("~@/assets/imge/pic_jiaruwomen1.png");
    height: 200px;
  }
  .join02 {
    margin-top: 29px;
    height: 1081px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>