<template lang="html">

    <div class="memberBody" style="background-color:#f8fcff;">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <!-- <v-header></v-header> -->
      <div class="router">
        <div class="item" :class="{ active: isActive=='1'}" @click="change(1)">全部</div>
        <div class="item" :class="{ active: isActive=='2'}" @click="change(2)">未完成</div>
        <div class="item" :class="{ active: isActive=='3'}" @click="change(3)">已完成</div>
      </div>
      <div :is="currentView" :job='propsData'></div>
      <v-footer/>
    </div>
</template>

<script>
import Header from "@/common/_header.vue";
import Footer from "@/common/_footer.vue";
import mytemp1 from "@/components/detail/myTemp1";
import mytemp2 from "@/components/detail/myTemp2";
import mytemp3 from "@/components/detail/myTemp3";

export default {
  data() {
    return {
      activeTemp: "my-temp1",
      isActive: 1,
      mytemp1: "mytemp1",
      mytemp2: "mytemp2",
      mytemp3: "mytemp3",
      currentView: "mytemp1",
      propsData: [],
      list: [
        {
          title: "生日饮品券",
          imgPath: "./static/homePic/birthday.svg"
        },
        {
          title: "好礼兑换券",
          imgPath: "./static/homePic/coupon.svg"
        },
        {
          title: "羊角卡333",
          imgPath: "./static/homePic/birthday.svg"
        },
        {
          title: "永久优惠券",
          imgPath: "./static/homePic/birthday.svg"
        },
        {
          title: "周年庆饮品券",
          imgPath: "./static/homePic/birthday.svg"
        }
      ],
      //全部订单
      job1: [
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "3",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "55.56"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "2",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "15"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "1",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "8"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "6",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "79"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "4",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "43"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "3",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "28"
        }
      ],
      //未完成订单
      job2: [
        {
          orderNum: "3355887776645",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "3",
          jobAdress: "河南工程学院",
          jobTime: "2019-06-01",
          goodsPirce: "55.56"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "2",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "15"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "1",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "8"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "6",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "79"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "4",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "43"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "3",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "28"
        }
      ],
      //已完成订单
      job3: [
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "3",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "55.56"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "2",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "15"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "1",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "8"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "6",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "79"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "4",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "43"
        },
        {
          orderNum: "33552517044625",
          orderStatus: "已完成",
          goodsList: "红茶拿铁等",
          goodsNum: "3",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          goodsPirce: "28"
        }
      ]
    };
  },
  components: {
    "v-header": Header,
    "v-footer": Footer,
    mytemp1: mytemp1,
    mytemp2: mytemp2,
    mytemp3: mytemp3
  },
  created() {
    this.propsData = this["job1"];
  },
  mounted() {},
  methods: {
    change: function(index) {
      this.propsData = this["job" + index];
      this.currentView = "mytemp" + index;
      this.isActive = index;
    }
  }
};
</script>

<style lang="less" scoped>
.memberBody {
  background-color: #f8fcff;
}
.router {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
}

.router .item {
  width: -webkit-fit-content;
  text-align: center;
  padding: 2vw;
  font-size: 4vw;
  border: 0;
}

.router .item.active {
  color: #3e9afa;
  border-bottom: 2px solid #3e9afa;
}
</style>