<template lang="html">
    <div class="my">
      <div class='list_first' v-if="list_first">
        <v-header>
          <h1 slot="title">个人信息</h1>
        </v-header>
        <div class="block-item">
            <div class="item" >
                <label class="label">头像</label>
                <div class="form-text">
                  <img :src="userPic" alt="" class='userPic'>
                </div>
            </div>
            <div class="item" @click='changeList(1)'>
                <label class="label">用户名</label>
                <div class="form-text">{{userName}}</div>
                >
            </div>
            <div class="item" @click="showPicker">
                <label class="label">性别</label>
                <div class="form-text">{{userSex}}</div>
                >
            </div>
            <div class="item" @click='changeList(2)'>
                <label class="label">年龄</label>
                <div class="form-text">{{userAge}}</div>
                >
            </div>
            <div class="item" @click='changeList(3)'>
                <label class="label">学号</label>
                <div class="form-text">{{userSno}}</div>
                >
            </div>
             <div class="item">
                <label class="label">余额</label>
                <div class="form-text">¥{{userRemainder}}</div>
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
      <div class="list_two" v-if="list_two">
          <div class="list_header" >
            <span class="icon-go" @click="returnBack"></span>
            <h1>{{titleName}}</h1>
          </div>
          <div class="block-item" v-if="item1">
            <mt-field label="用户名" type = "text" v-model = "userName" ></mt-field>
          </div>
           <div class="block-item" v-if="item2">
            <mt-field label="年龄" type = "text" v-model = "userAge" ></mt-field>
          </div> 
          <div class="block-item" v-if="item3">
            <mt-field label="学号" type = "text" v-model = "userSno" ></mt-field>
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
      userSno: "31202209",
      userRemainder: "300",
      userPhone: "15757101915",
      userWx: "已绑定",
      userAdress: "",
      userAge: "27",
      titleName: "",
      item1: false,
      item2: false,
      item3: false,
      index: "",
      slots: [
        {
          values: ["男", "女"],
          defaultIndex: 0,
          value: "男",
          valueKey: 0
        }
      ],
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
    returnBack() {
      this.list_first = true;
      this.list_two = false;
      if (this.index == "1") {
        this.item1 = false;
      } else if (this.index == "2") {
        this.item2 = false;
      } else if (this.index == "3") {
        this.item3 = false;
      }
    },
    changeList(index) {
      this.list_first = false;
      this.list_two = true;
      this.index = index;
      if (index == "1") {
        this.titleName = "用户名";
        this.item1 = true;
      } else if (index == "2") {
        this.titleName = "年龄";
        this.item2 = true;
      } else if (index == "3") {
        this.titleName = "学号";
        this.item3 = true;
      }
    },
    submitName() {
      this.list_first = true;
      this.list_two = false;
      if (this.index == "1") {
        this.item1 = false;
      } else if (this.index == "2") {
        this.item2 = false;
      } else if (this.index == "3") {
        this.item3 = false;
      }
      axios({
        method: "post",
        url: "",
        data: {
          userName: this.userName,
          sex: this.userSex,
          age: this.userAge,
          sno: this.userSno,
          remainder: this.userRemainder
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
      this.sexShow = false;
    },
    //退出登录按钮
    logout() {
      alert("确定退出？");
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
.list_header {
  background-color: #f8fcff;
  text-align: center;
  position: relative;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
}
.list_header span {
  display: inline-block;
  font-size: 23px;
  transform: rotate(-180deg);
}
.list_header h1 {
  font-size: 17px;
  letter-spacing: 0.2vw;
  font-weight: 600;
  margin-right: 40vw;
}
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