<template lang="html">
    <div class="">
      <img :src="this.$store.state.detail.productDatas.imgPath">
    </div>
</template>

<script>
export default {
  computed: {

  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  margin-top: 10px;
  border-top: 20px solid #f8fcff;
  .img-wrap {
    height: 120vw;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
