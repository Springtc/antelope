<template>
    <div>
        <div class="member">
          
            <div class='job'  v-for='(item,index) in job' :key='index'>
                <div class="member_header"> 
                  <span class="member_header_l">
                    自提订单：{{item.orderNum}}
                  </span>
                  <span class="member_header_r">
                    {{item.orderStatus}}
                  </span>
                </div>
                <div class="job_item">
                    <div class="job_content">
                        <div class="job_adress">
                            {{item.jobAdress}}
                        </div>
                        <div class="job_time">
                            {{item.jobTime}}
                        </div>
                    </div>
                    <div class='job_title'>
                        {{item.goodsList}}
                        <span>共{{item.goodsNum}}件商品</span>
                    </div>
                    <div class="job_footer"> 
                        <span class='job_mode'>¥</span>
                        <span class='job_type'> {{item.goodsPirce}}</span>
                        <button class="agianBtn">再来一单</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["job"],
  data() {
    return {};
  }
};
</script>
<style>
.member {
  overflow: auto;
  margin-bottom: 55px;
}
.member_header {
  border-bottom: 1px solid #c6c6c6;
  height: 8vw;
}
.member_header_l {
  color: #999;
  font-size: 3.5vw;
}
.member_header_r {
  color: #999;
  font-size: 3.5vw;
  float: right;
}
.job {
  background-color: #fff;
  padding: 3vw;
  margin-top: 2vw;
}
.job_title {
  font-size: 3vw;
  /* font-weight: bold; */
  color: #999;
  margin: 1vw 0 3vw 0;
}
.job_adress {
  width: 50%;
  float: left;
  font-weight: bold;
  font-size: 4vw;
  /* color: #999; */
}
.job_time {
  width: 50%;
  float: left;
  text-align: right;
  font-weight: bold;
  font-size: 3vw;
  color: #999;
}
.job_mode {
  font-weight: bold;
  font-size: 3.5vw;
  /* color: #999; */
}
.job_type {
  font-weight: bold;
  font-size: 3.5vw;
  /* color: #999; */
}
.job_content {
  margin-top: 3vw;
  height: 6vw;
}
.job_footer {
  margin-top: 1vw;
}
.agianBtn {
  width: 18vw;
  height: 6vw;
  background-color: white;
  border: 1px solid #d6d6d6;
  float: right;
}
</style>