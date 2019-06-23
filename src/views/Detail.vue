<template lang="html">
  <div class="detail">
    <v-swiper/>
    <v-chose/>
   <!-- <v-content/>-->
    <v-baseline/>
    <v-footer/>
  </div>
</template>

<script>
import Swiper from "@/components/detail/swiper.vue";
import Chose from "@/components/detail/chose.vue";
import Content from "@/components/detail/content.vue";
import Footer from "@/components/detail/footer.vue";
import Baseline from "@/common/_baseline.vue";
export default {
  components: {
    "v-swiper": Swiper,
    "v-chose": Chose,
    "v-content": Content,
    "v-footer": Footer,
    "v-baseline": Baseline
  },

  beforeCreate() {
    this.$store.commit("CHANGE_COL_SELECTED", '');
    this.$store.commit("CHANGE_SIZE_SELECTED", '');
    this.$store.commit("CHANGE_SWEET_SELECTED", '');
  }
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  padding-bottom: 14vw;
}
</style>
