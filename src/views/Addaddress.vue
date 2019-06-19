<template lang="html">

    <div class="car">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header>
        <h1 slot="title">添加地址</h1>
      </v-header>
      <mt-field label="联系人" placeholder="" v-model="contacts"></mt-field>
      <mt-field label="性别" placeholder="" v-model="sex"></mt-field>
      <!-- <mt-radio  title="性别" v-model="value" :options="['先生', '女士']">
      </mt-radio> -->
      <mt-field label="手机号码" placeholder="" v-model="phone"></mt-field>
      <mt-field label="地址" placeholder="请选择您的地址" v-model="address"></mt-field>
      <mt-field label="门牌号" placeholder="例：5号楼203室" v-model="doorNum"></mt-field>
      <mt-field label="标签" placeholder="" v-model="tag">
       <span>公司</span>
        <span>学校</span>
         <span>家</span>
      </mt-field>
      <mt-field ></mt-field>
      <button class='btn' @click="addAddress">保存</button>
    </div>
</template>

<script>
import axios from "axios";
import Header from "@/common/_header.vue";

export default {
  data() {
    return {
      contacts: "",
      sex: "",
      phone: "15757101915",
      address: "",
      doorNum: "",
      tag: ""
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
    }
  },
  methods: {
    addAddress() {
      axios({
        method: "post",
        url: "",
        data: {
          contacts: this.contacts,
          sex: this.sex,
          phone: this.phone,
          address: this.address,
          doorNum: this.doorNum,
          tag: this.tag
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
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
