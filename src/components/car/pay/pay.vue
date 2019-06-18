<template lang="html">
<div>
  <div class="extract-type">
				<div class="style">
					<mt-switch v-model="payType" @change="deliveryType">{{payText}}</mt-switch>
				</div>
				<div class="time-info">
					<div class="now">立即配送</div>
					<div class="time">约<span>12:00</span>送达</div>
				</div>
			</div>
			<div class="block">
				<div class="adress-wrap">
					<div class="title">配送信息</div>
					<div class="row">
						<span class="icon">11</span>
						<div class="address">河南省郑州市东区商务外环京飞大厦2楼</div>
						<div class="icon-right">></div>
					</div>
					<div class="row">
						<span class="icon">22</span>
						<div class="user-info">18768871893 <span>周先生</span></div>
					</div>
				</div>
				<div class="order-wrap">
					<div class="title">订单信息</div>
					<div class="row">
						<div class="order-info">
							<div class="name">卡布依内奇兵</div>
							<div class="type">大、默认奶油</div>
						</div>
						<div class="order-count">{{orderNum}}</div>
						<div class="order-price">￥{{orderPrice}}</div>
					</div>
					<div class="row">
						<div class="order-info">
							<div class="name">配送费</div>
							<div class="activity">面价满55元免配送费</div>
						</div>
						<div class="order-price">￥{{deliveryPrice}}</div>
					</div>
				</div>
				<div class="totole-monty">合计<span class="result">￥{{totolePrice}}</span></div>
			</div>
			<div class="block list-wrap plcehoder">
				<div class="row">
					<div class="left">使用优惠</div>
					<div class="right">
						<mt-switch :value.sync="discounts"></mt-switch>
					</div>
				</div>
				<div class="row">
					<div class="left">使用咖啡钱包<span class="discounts">充值优惠</span></div>
					<div class="right">无可用</div>
				</div>
				<div class="row">
					<div class="left">使用优惠</div>
					<div class="right">-￥18.27 <span class="icon-right">></span></div>
				</div>
				<div class="row bor-0">
					<div class="left">支付方式</div>
					<div class="right">微信支付<span class="icon-right">></span></div>
				</div>
			</div>
			<div class="fiexd">
				<div class="result-money">还需支付 <span>￥16.26</span></div>
				<div class="go-pay">去支付</div>
			</div>
</div>
  
</template>

<script>
import Util from "../../../util/common";
import Header from "@/common/_header.vue";
import { MessageBox, Switch } from "mint-ui";
export default {
  components: {
    "v-header": Header
  },
  data() {
    return {
      payType: true,
      payText: "自提",
      confirm: "",
      discounts: false,
      orderNum: "2",
      orderPrice: "27",
      deliveryPrice: "6",
      totolePrice: "0"
    };
  },

  created() {
    this.totolePrice = orderPrice + deliveryPrice;
  },
  computed: {
    //所有商品列表
    carList() {
      return this.$store.state.detail.selectedList;
    },

    // 商品价格总和
    allpay() {
      let allpay = 0,
        selectedList = this.carList;
      for (let i = 0; i < selectedList.length; i++) {
        allpay += selectedList[i].price;
      }
      return allpay;
    }
  },
  mounted() {
    // 防止页面刷新后数据丢失
    if (this.$store.state.detail.selectedList == "") {
      this.$store.commit("SET_SELECTEDLIST");
    }
  },

  methods: {
    payConfirm() {
      if (this.carList) {
        //还未提交了订单,数据还未清空
        MessageBox.confirm(`确定支付${this.allpay}元`).then(
          action => {
            //点击成功执行这里的函数
            this.confirm = false;
            this.$store.commit("SET_LOADING", true);
            this.$store.dispatch("resetCarList"); //重置购物车（用unSelectedList替换）
            this.$store.dispatch("resetCount"); //重置购物车数量
            setTimeout(() => {
              this.$store.commit("SET_LOADING", false); //关闭loading
              this.confirm = true; //支付完成后切换视图
            }, 300);
          },
          function(err) {
            //点击取消执行这里的函数
          }
        );
      } else {
        //提交了订单,数据清空
        alert("请勿重复提交订单");
      }
    },
    deliveryType() {
      if (this.payType) {
        this.payText = "自提";
      } else {
        this.payText = "外送";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../assets/fz.less";
* {
  padding: 0;
  margin: 0;
}

html,
body {
  background: #f0f0f0;
}

.extract-type {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
}

.extract-type .time span {
  color: #26a2ff;
}

.block {
  margin-bottom: 10px;
  line-height: 1.4;
  background: #fff;
  padding: 10px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.adress-wrap {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
}

.adress-wrap .row {
  justify-content: flex-start;
}

.adress-wrap .row .icon {
  padding-right: 5px;
}

.order-wrap {
  padding-top: 10px;
}

.order-wrap .row {
  padding: 10px 0;
}

.totole-monty {
  padding: 10px 0 0;
  text-align: right;
  border-top: 1px solid #ccc;
}

.totole-monty .result {
  font-size: 20px;
}

.list-wrap {
  padding: 0 10px;
}

.list-wrap .row {
  padding: 15px 10px;
  border-bottom: 1px solid #f0f0f0;
}

.discounts {
  padding: 4px 8px;
  color: #fff;
  background: #26a2ff;
  border-radius: 4px;
  margin-left: 10px;
}

.fiexd {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

.fiexd .result-money {
  padding-left: 10px;
  flex: 1;
}

.address {
  flex: 1;
}

.fiexd .go-pay {
  width: 150px;
  color: #fff;
  background: #26a2ff;
  text-align: center;
}

.bor-0 {
  border: none !important;
}

.plcehoder {
  margin-bottom: 62px;
}

.icon-right {
  padding-left: 6px;
}

.activity {
  color: #26a2ff;
}
</style>
