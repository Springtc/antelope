<template lang="html">
  <div class="main">
    <!-- <h2>{{_datas.title}}</h2> -->
    <ul>
      <li v-for="(k,i) in _datas.list" :key='i' @click="openDetail(k)">
        <router-link :to="{name:'详情页'}" >
          <div class='main-l'>
            <img v-lazy="k.imgPath">
          </div>
         <div class='main-r'>
            <h1>{{k.title}}</h1>
            <p>默认：标准</p>
            <h2>¥{{k.price}}</h2>
         </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Lazyload } from "mint-ui";
export default {
  props: {
    datas: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    // 获取当前aside栏选择的是第几个
    tabIndex() {
      return this.$store.state.category.tabIndex;
    },
    _datas() {
      const _datas = {
        list: []
        // title: ""
      };
      return this.datas[this.tabIndex] || _datas;
    }
  },
    methods:{
        openDetail(val){
            this.$store.commit('SET_DATAS', val);
        }
    }
};
</script>

<style lang="less" scoped>
.main {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 9.8;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  > h2 {
    font-size: 24px;
    padding: 2vw 4vw;
    color: #333;
    letter-spacing: 2px;
    background-color: rgb(247, 247, 247);
  }
  > ul {
    width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: rgb(247, 247, 247);

    li {
      background-color: #fff;
      width: 100%;
      height: 27vw;
      margin-bottom: 2px;
      text-align: center;
      a {
        color: #666;
        display: block;
        img {
          display: block;
          width: 80%;
          margin-left: 4vw;
          margin-top: 3vw;
        }
        h1 {
          text-align: left;
          font-weight: bold;
          margin-left: 3vw;
        }
        p {
          text-align: left;
          font-size: 2vw;
          margin-left: 3vw;
        }
        h2 {
          text-align: left;
          font-weight: bold;
          margin-left: 3vw;
          margin-top: 3vw;
        }
      }
    }
  }
  .main-l {
    width: 40%;
    float: left;
  }
  .main-r {
    width: 60%;
    float: left;
    margin-top: 5.5vw;
  }
}
</style>
