<template lang="html">

    <div class="car">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">我的地址</h1>
      </v-header>
      <div class='content'>
        <div class='content_title'>
            <p>我的地址</p>
        </div>
        <div class='content_list' v-for='(item,index) in addressList' :key="index">
          <div class='content_l'>
            <div class='content_t'>
              <p>{{item.address}}</p>
            </div>
            <div class='content_b'>
              <span>{{item.pag}}</span>
              <p> {{item.phone}}</p>
              <p>{{item.name}}</p>
            </div>
          </div>
          <div class='content_r'>
            <router-link :to="{ name: '添加地址'}" class="my-settle-top">
                <img src="static/homePic/edit.svg" alt="">
            </router-link>
          </div>
        </div>
        <div class='content_footer'>
          <p>已经全部加载完毕</p>
        </div>
      </div>
      <router-link :to="{ name: '添加地址'}" class="my-settle-top">
        <button class='btn' @click="addAddress" >+添加地址</button>
      </router-link>
    </div>
</template>

<script>
import Header from "@/common/_header.vue";

export default {
  data() {
    return {
      addressList: [{}]
    };
  },
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
    };
    this.search();

  },
  methods: {
    addAddress() {
      console.log(1111);
    },
    search() {
      this.$api.get(this.$store.state.wspserver.wspServer + '/userAddressInfo/getByUserId/' + this.$store.state.login.userId).then(response => {
        this.addressList = response.data.data;
      });
    },
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
.content_title {
  height: 10vw;
  line-height: 10vw;
  padding-left: 5vw;
}
.content_title p {
  font-size: 3.5vw;
}
.content_list {
  width: 100%;
  height: 15vw;
  background-color: #fff;
  border-bottom: 1px solid #c9c9c9;
  padding: 2vw 4vw;
}
.content_l {
  width: 80%;
  float: left;
}
.content_r {
  width: 20%;
  float: left;
}
.content_r img {
  width: 10vw;
  margin-top: 2vw;
}
.content_t {
  height: 7.5vw;
}
.content_t p {
  font-size: 4vw;
}
.content_b {
  height: 7.5;
}
.content_b span {
  border: 1px solid #aac4e0;
  color: #aac4e0;
  font-size: 3.3vw;
}
.content_b p {
  display: inline;
  font-size: 3.5vw;
  color: #c9c9c9;
}
.content_footer {
  margin-top: 4vw;
}
.content_footer p {
  text-align: center;
  color: #c9c9c9;
}
</style>
