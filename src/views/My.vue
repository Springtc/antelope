<template lang="html">
    <div class="my">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">个人信息</h1>
      </v-header>
       <div class="block-item">
            <div class="item">
                <label class="label">头像</label>
                <div class="form-text">
                  <img :src="userPic" alt="" class='userPic'>
                </div>
                >
            </div>
            <div class="item">
                <label class="label">用户名</label>
                <div class="form-text">{{userName}}</div>
                >
            </div>
            <div class="item" @click="showPicker">
                <label class="label">性别</label>
                <div class="form-text">{{userSex}}</div>
                >
            </div>
            <div class="item">
                <label class="label">绑定手机</label>
                <div class="form-text">{{userPhone}}</div>
            </div>
            <div class="item">
                <label class="label">绑定微信</label>
                <div class="form-text">{{userWx}}</div>
                >
            </div>
            <router-link :to="{ name: '我的地址'}" class="my-settle-top">
              <div class="item">
                  <label class="label">收货地址</label>
                  <div class="form-text"></div>
                  >
              </div>
            </router-link>
            
        </div>
        <button class='btn' @click="logout">退出登录</button>
        <mt-picker :slots="slots" @change="onValuesChange" v-show="sexShow"  position="bottom"></mt-picker>
      <v-footer/>
    </div>
</template>

<script>
import Header from "@/common/_header.vue";
import Footer from "@/common/_footer.vue";
import { Toast, Picker } from "mint-ui";
export default {
  data() {
    return {
      userName: "Spring",
      userSex: "男",
      userPhone: "15757101915",
      userWx: "已绑定",
      userAdress: "",
      slots: [{ values: ["男", "女"] }],
      sexShow: false,
      userPic: "./static/homePic/cat.jpeg"
    };
  },

  components: {
    "v-header": Header,
    "v-footer": Footer
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
    showPicker() {
      this.sexShow = true;
    },
    onValuesChange(picker, values) {
      this.userSex = values[0];
      console.log(values);
      this.sexShow = false;
    },
    //退出登录按钮
    logout() {
      Toast("退出登录成功,清除token");
      this.$store.commit("CHANGE_TOKEN", 0);
      this.toggle = true;
      this.account = "";
      this.password = "";
      this.$router.push({ path: "/user" });
    }
  }
};
</script>

<style lang="less" scoped>
.block-item {
  margin-bottom: 1vw;
  font-size: 3vw;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  padding: 1vw 3vw;
  height: 11vw;
}

.item .label {
  flex: 1;
}

.item .form-text {
  max-width: 30vw;
  text-align: right;
  font-size: 3vw;
  margin-right: 4vw;
}

.userPic {
  width: 10vw;
  border-radius: 50%;
}
.btn {
  width: 90%;
  height: 10vw;
  margin-left: 5%;
  background-color: #aac4e0;
  color: #fff;
  border-radius: 5px;
  font-size: 4vw;
}
</style>