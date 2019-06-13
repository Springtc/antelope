<template lang="html">
  <section class="section1">
    <!-- <h1 class="section1-title">
      section1
      <i class="icon-right"></i>
    </h1>
    <ul class="section1-list">
      <li v-for="k in list" :key="k.id">
        <router-link :to="{name:'详情页'}">
          <img v-lazy="k.imgPath" alt="">
        </router-link>
      </li>
    </ul> -->
    <div class="section1-pic">
      <img src="static/homePic/banner.jpeg" alt="">
    </div>
    <div class="section1-banner"> 
       <h1>今日点单立减3元配送费</h1>
       <p>来杯咖啡准备迎接你的儿童节吧！</p>
       <div class="btn">  
         <button @click="clickMenu">即刻点单</button>
         <span>活动条款</span>
       </div>
    </div>
    <!-- <router-link :to="{ name: '详情页'}"  class="section1-banner">
      <img v-lazy="banner">
    </router-link> -->
  </section>
</template>
s
<script>
import { Lazyload } from "mint-ui";

export default {
  props: {
    banner: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    //立即点单
    clickMenu() {
      console.log(1111);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section1 {
  .pt();
  .section1-title {
    .bt();
    background-color: #ffffff;
    text-align: center;
    padding: 4vw 0;
    .fz(font-size, 40);
    color: #333;
    position: relative;

    i {
      position: absolute;
      right: 6vw;
      top: 50%;
      .fz(font-size, 36);
      .fz(margin-top, -16);

      &::before {
        color: rgb(159, 159, 159);
      }
    }
  }

  .section1-list {
    display: -ms-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    padding: 0 2vw 4vw 2vw;
    li {
      width: 50%;
      padding: 1vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      a,
      img {
        width: 100%;
        display: block;
      }
    }
  }

  .section1-banner {
    display: block;
    width: 100vw;
    height: 25vw;
  }
  .section1-banner h1 {
    font-weight: bold;
    margin-top: 3vw;
    margin-bottom: 2.5vw;
    margin-left: 3vw;
  }
  .section1-banner p {
    font-size: 3.5vw;
    display: inline;
    margin-left: 3vw;
  }

  .section1-pic img {
    display: block;
    width: 100%;
  }
  .btn button {
    border: 1px solid green;
    background-color: #ffffff;
    color: green;
    width: 100px;
    height: 35px;
    border-radius: 20px;
    font-size: 15px;
    margin-top: 3.2vw;
    margin-left: 4vw;
  }
  .btn span {
    float: right;
    margin-top: 6vw;
    margin-right: 3vw;
  }
}
</style>
