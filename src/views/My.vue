<template lang="html">
    <div class="my">
      <div class='list_first' v-show="list_first">
        <v-header>
          <h1 slot="title">个人信息</h1>
        </v-header>
        <div class="block-item">
            <div class="item" >
                <label class="label">头像</label>
                <div class="form-text">
                  <img :src="userPic" alt="" class='userPic'>
                </div>
                >
            </div>
            <div class="item" @click='changeName'>
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
      </div>
      <div class="list_two" v-show="list_two">
        <div style="width:100%;height:12vw;margin-bottom:1vw;background-color: #fff;">
          <h1 style='height: 12vw;text-align: center;line-height: 12vw;font-weight: bold;'>用户名</h1>
        </div>
          <div class="block-item">
            <mt-field label="用户名" type = "text" v-model = "userName" ></mt-field>
          </div>
          <button class='btn' @click="submitName">确定</button>
      </div>
      <v-footer/>
    </div>
</template>

<script>
import axios from "axios";
import Header from "@/common/_header.vue";
import Footer from "@/common/_footer.vue";
import { Toast, Picker } from "mint-ui";
export default {
  data() {
    return {
      list_first: true,
      list_two: false,
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
    changeName() {
      this.list_first = false;
      this.list_two = true;
    },
    submitName() {
      this.list_first = true;
      this.list_two = false;
      axios({
        method: post,
        url: "",
        data: {
          userName: this.userName
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    },
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
  margin-bottom: 4vw;
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