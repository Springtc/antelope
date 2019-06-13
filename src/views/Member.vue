<template lang="html">

    <div class="memberBody" style="background-color:#f8fcff;margin-bottom:55px;">
      <!-- slot分发内容 让子组件混合父组件的内容 -->
      <v-header></v-header>
      <div class="member">
          <div class='member_label'>
            <label>会员权益</label>
          </div>
          <div class='item' v-for="(item,index) in list">
            <div class='member_item'>
                <img :src="item.imgPath" alt="">
                <span>{{item.title}}</span>
            </div>
          </div>
      </div>
      <div class="member">
          <div class='member_label'>
            <label>羚羊工作</label>
          </div>
          <div class=“job”  v-for="(item,index) in job">
              <div class="job_item">
                  <div class='job_title'>
                      {{item.jobName}}
                  </div>
                  <div class="job_content">
                      <div class="job_adress">
                          {{item.jobAdress}}
                      </div>
                      <div class="job_time">
                          {{item.jobTime}}
                      </div>
                  </div>
                  <div class="job_footer"> 
                      <span class='job_mode'>{{item.jobMode}}</span>
                      <span class='job_type'> {{item.jobType}}</span>
                  </div>
              </div>
          </div>
      </div>
      <!-- <div class="baseline">人家是有底线的</div> -->
      <v-footer/>
    </div>
</template>

<script>
import Header from "@/common/_header.vue";
import Footer from "@/common/_footer.vue";

export default {
  data() {
    return {
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
      job: [
        {
          jobName: "Excellence Manager,HRSSC",
          jobAdress: "河南工程学院1111",
          jobTime: "2019-06-15",
          jobMode: "做五休二",
          jobType: "全职"
        },
        {
          jobName: "Assistant Category Manager",
          jobAdress: "河南工程学院",
          jobTime: "2019-06-19",
          jobMode: "不限",
          jobType: "全职"
        },
        {
          jobName: "Assistant Category Manager",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          jobMode: "不限",
          jobType: "全职"
        },
        {
          jobName: "Assistant Category Manager",
          jobAdress: "河南工程学院",
          jobTime: "2019-08-09",
          jobMode: "不限",
          jobType: "全职"
        },
        {
          jobName: "Excellence Manager,HRSSC",
          jobAdress: "河南工程学院",
          jobTime: "2019-06-15",
          jobMode: "做五休二",
          jobType: "全职"
        },
        {
          jobName: "Assistant Category Manager",
          jobAdress: "河南工程学院",
          jobTime: "2019-06-19",
          jobMode: "不限",
          jobType: "全职"
        },
        {
          jobName: "Assistant Category Manager",
          jobAdress: "河南工程学院",
          jobTime: "2019-07-19",
          jobMode: "不限",
          jobType: "全职"
        },
        {
          jobName: "Assistant Category Manager",
          jobAdress: "河南工程学院",
          jobTime: "2019-08-09",
          jobMode: "不限",
          jobType: "全职"
        }
      ]
    };
  },
  components: {
    "v-header": Header,
    "v-footer": Footer
  },

  computed: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.car {
  width: 100%;
  padding-bottom: 14vw;
}
.member {
  overflow: auto;
  background-color: #fff;
}
.member_label {
  margin: 4vw;
}
.member_label label {
  font-size: 4.5vw;
  font-weight: bold;
}
.item {
  width: 100%;
}
.member_item {
  width: 25%;
  margin-bottom: 3vw;
  float: left;
}
.member_item img {
  width: 60%;
  height: 60%;
  margin-left: 20%;
}
.member_item span {
  display: block;
  text-align: center;
  font-size: 3.5vw;
}
.job {
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
}
.job:last-child {
  margin-bottom: 100vw;
}
.job_item {
  width: 100%;
  padding: 4vw 2vw 2vw 5vw;
}
.job_title {
  font-size: 4vw;
  font-weight: bold;
  //   color: #b22222;
}
.job_adress {
  width: 50%;
  float: left;
  font-weight: bold;
  font-size: 3.5vw;
  color: #999;
}
.job_time {
  width: 50%;
  float: left;
  text-align: center;
  font-weight: bold;
  font-size: 3.5vw;
  color: #999;
}
.job_mode {
  font-weight: bold;
  font-size: 3.5vw;
  color: #999;
}
.job_type {
  font-weight: bold;
  font-size: 3.5vw;
  color: #999;
}
.job_content {
  margin-top: 1vw;
}
.job_footer {
  margin-top: 1vw;
}
.baseline {
  padding: 8vw 0;
  text-align: center;
  letter-spacing: 0.2vw;
  color: rgb(158, 158, 158);
  font-family: Lato, "Microsoft Jhenghei", "Hiragino Sans GB", "Microsoft YaHei",
    sans-serif;
  font-weight: 600;
  font-size: 14px;
}
</style>
