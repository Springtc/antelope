<template lang="html">

    <div class="car">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">我的地址</h1>
      </v-header>
      <router-link :to="{ name: '添加地址'}" class="my-settle-top">
        <button class='btn' @click="addAddress" >+添加地址</button>
      </router-link>
    </div>
</template>

<script>
import Header from "@/common/_header.vue";

export default {
  components: {
    "v-header": Header
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
  },
  methods: {
    addAddress() {
      console.log(1111);
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  width: 90%;
  height: 10vw;
  margin-left: 5%;
  background-color: #aac4e0;
  color: #fff;
  border-radius: 5px;
  font-size: 4vw;
  position: fixed;
  bottom: 5vw;
}
</style>
