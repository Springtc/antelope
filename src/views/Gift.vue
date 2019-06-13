<template lang="html">

    <div class="car">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">羚羊好礼</h1>
      </v-header>
      <v-discount/>
      <v-footer/>
    </div>
</template>

<script>
import Header from "@/common/_header.vue";
import Discount from "@/components/user/discount.vue";
import Footer from "@/common/_footer.vue";

export default {
  components: {
    "v-header": Header,
    "v-footer": Footer,
    "v-discount": Discount
  },

  computed: {
    count() {
      return this.$store.state.detail.count;
    }
  },
  mounted() {
    // 防止刷新页面数据为空
    if (this.$store.state.detail.count == "") {
      this.$store.commit("RESET_COUNT");
    }
  }
};
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  padding-bottom: 14vw;
}
</style>
