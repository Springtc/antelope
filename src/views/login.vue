<template lang="html">
  <div class="login">
    <v-header>
    </v-header>
    <section>
      <div class="headPic">
        <div class="userPic">
          <img src="static/homePic/drink4.jpg" alt="">
        </div>
        <div class="userName">
          <p style="font-size:3.5vw;font-weight:bold;">郑</p>
          <p style="font-size:3vw;">欢迎回来</p>
        </div>
      </div>
      <mt-field
        placeholder="请输入手机号"
        type = "text"
        v-model = "account"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
       placeholder="请输入手机验证码"
       type="password"
       v-model="password"
       :readonly='!toggle'
       :disableClear = '!toggle'
        >
        <span>获取验证码</span>
        </mt-field>
      <p class="tip">Tip : 账号密码随便输</p>
    </section>
    <button class='btn' @click="login" v-if='toggle'>登录</button>
    <!-- <button class='btn' @click="logout" v-else>退出登录</button> -->
  </div>
</template>

<script>
import Header from "@/common/_header.vue";
import { Toast } from "mint-ui";
export default {
  components: {
    "v-header": Header
  },
  data() {
    return {
      account: "",
      password: "",
      toggle: !this.$store.state.login.token
    };
  },
  methods: {
    // 登录按钮
    login() {
      if (this.account !== "" && this.password !== "") {
        Toast("登录成功,存储token,跳转网页");
        // this.toggle = false;
        this.$store.commit("CHANGE_TOKEN", 1);
      } else {
        Toast("账号密码不能为空");
      }

      setTimeout(() => {
        this.$router.replace({
          path: "user"
        });
      }, 1000);
      // 登录成
    },

    //退出登录按钮
    logout() {
      Toast("退出登录成功,清除token");
      this.$store.commit("CHANGE_TOKEN", 0);
      this.toggle = true;
      this.account = "";
      this.password = "";
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  > section {
    .tip {
      padding: 6vw 3vw;
      color: rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
.headPic {
  width: 100%;
  height: 50vw;
  background-color: #fff;
}
.userPic {
  text-align: center;
}
.userPic img {
  width: 30vw;
  height: 30vw;
  border-radius: 20vw;
}
.userName p {
  text-align: center;
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
