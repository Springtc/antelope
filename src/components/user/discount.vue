<template lang="html">
  <section class="section3">
    <ul class="section3-list">
      <li v-for="(k,index) in list" :key='k.id'>
        <div class="section3-list-left">
          <h4>{{k.title}}</h4>
        <p class="yuan">有效期至{{k.invalidTime}}</p> 
        <div class="btn">  
            <button class="use" @click="">使用</button>
            <button @click="clickTopUp">查看详情</button>
       </div>
        </div>
        <div class="section3-list-right">
          <img v-lazy="k.imgPath" @click="information">
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";
import index from "@/http/mock.js"; //模拟数据
export default {
  data() {
    return {
      list: []
    };
  },
  beforeCreate() {
    this.$api({
      method: "post",
      url: "/index"
    })
      .then(response => {
        this.datas = response.data;
      })
      .catch(function(error) {
        alert(error);
      });
  },
  mounted() {
    this.$api({
      url: "/index"
    })
      .then(response => {
        const resDatas = response.data.section5;
        this.list = resDatas.list;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    clickTopUp() {
      console.log(999999);
    },
    information() {
      console.log(888888);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section3 {
  width: 100%;
  z-index: 9;
  .pt();
  .section3-list {
    width: 100%;
    .bt();
    > li {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 0vw 5vw 0vw 4vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-top: 1px solid #f7f7f7;
      width: 100%;
      .section3-list-left {
        padding-top: 10vw;
        width: 60%;
        h4 {
          .fz(font-size, 9.6vw);
          font-weight: bold;
          line-height: 4.8vw;
          margin-bottom: 3.2vw;
          letter-spacing: 0.42vw;
        }
        .time {
          .time-num {
            display: inline-block;
            text-align: center;
            padding: 1.6vw;
            color: #fff;
            border-radius: 0.5vw;
            background-color: #444;
            .fz(font-size, 26);
            letter-spacing: 0.3vw;
          }
          .time-col {
            color: #333;
            width: 2vw;
            display: inline-block;
            text-align: center;
            font-weight: 700;
            .fz(font-size, 30);
          }
        }

        .yuan {
          .fz(font-size, 3.5vw);
          letter-spacing: 0.3vw;
        }
      }

      .section3-list-right {
        width: 40%;
        display: block;
        padding-top: 6vw;
        position: relative;
        img {
          display: block;
          width: 100%;
          //   background-color: gold;
        }
        span {
          padding: 0.3vw 1.2vw;
          border-radius: 1vw;
          text-align: center;
          position: absolute;
          bottom: 0.4vw;
          right: 0.2vw;
          background-color: @cl;
          color: #fff;
          .fz(font-size, 24);
        }
      }
    }
  }

  .section3-banner {
    display: block;
    width: 100%;
    .bd();
    img {
      display: block;
      width: 100%;
    }
  }
  .btn button {
    border: 1px solid green;
    background-color: #ffffff;
    color: green;
    width: 30vw;
    height: 35px;
    border-radius: 20px;
    font-size: 15px;
    margin-top: 3.2vw;
  }
  .btn .use {
    background-color: green;
    color: #fff;
    width: 20vw;
    height: 35px;
    border-radius: 20px;
    font-size: 15px;
    margin-top: 3.2vw;
    margin-right: 2vw;
  }
}
</style>
