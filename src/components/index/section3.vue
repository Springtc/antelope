<template lang="html">
  <section class="section3">
    <ul class="section3-list">
      <li v-for="k in list" :key='k.id'>
        <div class="section3-list-left">
          <h4>{{k.title}}</h4>
        <p class="yuan">¥0</p> 
        <div class="btn">  
            <button @click="clickTopUp">即刻充值</button>
       </div>
          <!-- <p class="start">Starts at {{k.start}}</p> -->
        </div>
        <router-link :to="{name:'分类页'}" class="section3-list-right">
          <img v-lazy="k.imgPath">
          <span>${{k.price}}</span>
        </router-link>
      </li>
    </ul>
    <!-- <router-link :to="{name:'分类页'}" class="section3-banner">
      <img v-lazy="banner">
    </router-link> -->
  </section>
</template>

<script>
import { Lazyload } from "mint-ui";

export default {
  data() {
    return {
      list: [],
      banner: "",
      dom: [
        {
          num1: "",
          num2: "",
          num3: ""
        },
        {
          num1: "",
          num2: "",
          num3: ""
        },
        {
          num1: "",
          num2: "",
          num3: ""
        },
        {
          num1: "",
          num2: "",
          num3: ""
        }
      ]
    };
  },
  mounted() {
    this.$api({
      url: "/index"
    })
      .then(response => {
        const resDatas = response.data.section3;
        this.list = resDatas.list;
        this.banner = resDatas.banner;
        // 将拿到的时间数据处理成倒计时
        let setTime = (ending, dom) => {
          let endTime = ending;
          let timeMsg = endTime.toString();
          let end = new Date(timeMsg).getTime();
          setInterval(() => {
            let now = new Date().getTime();
            let sy = parseInt((end - now) / 1000);
            let minute = parseInt((sy % 3600) / 60);
            let second = parseInt(sy % 60);

            minute < 10 ? (minute = "0" + minute) : minute;
            second < 10 ? (second = "0" + second) : second;
            let ms = (
              100 -
              Number(
                parseInt(now / 10)
                  .toString()
                  .substr(-2)
              )
            ).toString();

            if (end - now <= 0) {
              minute = "00";
              second = "00";
              ms = "00";
              dom.num2 = ms;
              return;
            }
            dom.num1 = minute;
            dom.num2 = second;
            dom.num3 = ms;
          }, 40);
        };

        for (let i of this.dom.keys()) {
          setTime(resDatas.list[i].end, this.dom[i]);
          this.list[i].dom = this.dom[i];
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    clickTopUp() {
      console.log(999999);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";
.section3 {
  width: 100%;
  .pt();
  .section3-list {
    width: 100%;
    .bt();
    > li {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 0vw 5vw 10vw 4vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      .section3-list-left {
        padding-top: 10vw;
        width: 50%;
        h4 {
          .fz(font-size, 40);
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
          .fz(font-size, 50);
          letter-spacing: 0.3vw;
        }
      }

      .section3-list-right {
        width: 50%;
        display: block;
        padding-top: 10vw;
        position: relative;
        img {
          display: block;
          width: 100%;
          background-color: gold;
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
    width: 100px;
    height: 35px;
    border-radius: 20px;
    font-size: 15px;
    margin-top: 3.2vw;
  }
  .btn span {
    float: right;
    margin-top: 6vw;
    margin-right: 3vw;
  }
}
</style>
