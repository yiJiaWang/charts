<!--
 描述: 新闻无缝滚动
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">新闻无缝滚动</div> 
      <div class="sn-body"> 
        <div class="wrap-container">

          <div class="table">
            <table border="0" cellpadding="0" cellspacing="0" class="table-header">
              <tbody>
                <tr>
                  <td width="60%">
                    <span>标 题</span>
                  </td>
                  <td width="20%">
                    <span>日 期</span>
                  </td>
                  <td width="20%">
                    <span>热 度</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting">
              <table border="0" cellpadding="0" cellspacing="0" class="item">
                <tbody>
                  <tr v-for="(item, index) in listData" :key="index">
                    <td width="100%" class="title">
                      <span>{{ item.title }}</span>
                    </td>
                    <td width="20%">
                      <span>{{ item.date }}</span>
                    </td>
                    <td width="20%">
                      <span :class="{colorRed: item.hot > 4999, colorOrange: item.hot < 10}">{{ item.hot }}</span>
                    </td>
                  </tr>
                </tbody>
            </table>
            </vue-seamless-scroll>
          </div>

        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll
  },
  data() {
    return {
     listData: [{
        title: '一甲大师?一图带你读懂大师的处事观',
        date: '2020-05-05',
        hot: 23068
     }, {
        title: '神棍就收入超350亿元',
        date: '2020-05-02',
        hot: 5689
     }, {
        title: '滴滴、美团、哈啰交战，本地生活会是终局？',
        date: '2020-05-02',
        hot: 9
     }, {
        title: '道不外传，卦不空出',
        date: '2020-04-25',
        hot: 2888
     }, {
        title: '互联网+文化 千亿互联网算命产业！',
        date: '2020-04-21',
        hot: 158888888
     }, {
        title: 'B站的后浪，会把爱优腾拍在沙滩上吗?',
        date: '2020-04-20',
        hot: 889
     }, {
        title: '华为如何做投资的：先给两亿订单一年上市',
        date: '2020-04-01',
        hot: 5800
     }, {
        title: '马斯克：特斯拉股价太高了，我要卖豪宅',
        date: '2020-03-25',
        hot: 6
     }, {
        title: '人民日报海外版：一甲“资深玄学研究者”',
        date: '2020-03-16',
        hot: 88
     }, {
        title: '刚刚港股"崩了"：狂跌近1000点！',
        date: '2020-03-12',
        hot: 88
     }, {
        title: '六爻占卜测股市',
        date: '2020-02-28',
        hot: 5000
     }, {
        title: '传软银国际裁员约10%两名管理合伙人离职',
        date: '2020-02-15',
        hot: 258
     }, {
        title: '一命二运三风水',
        date: '2020-02-10',
        hot: 19899999
     }, {
        title: '四积阴德五读书六名七相',
        date: '2020-02-08',
        hot: 198999
     }]
    }
  },
  computed: {
　　optionSetting () {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },  
  mounted() {
    
  },
  methods: {
    
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 1370px;
  top: 110px;
  %table-style {
    width: 100%;
    height: 35px;
    table-layout: fixed;
    tr {
      td {
        padding: 10px 5px;
        text-align: center;
        background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        color: #E2E5FF;
        font-size: 14px;
      }
    }
  }
  .table {
    .table-header {
      @extend %table-style;
    }
    .seamless-warp {
      height: 400px;
      overflow: hidden;
      visibility: visible;
      .colorRed {
        color: #FF4669;
      }
      .colorOrange {
        color: #FFC956;
      }
      .item {
        height: auto;
        @extend %table-style;
        tr {
          td {
            &.title {
              text-overflow: ellipsis;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
