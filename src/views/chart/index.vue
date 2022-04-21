<template>
  <div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="chart">
            <div id="chartId" style="width: 600px; height: 300px"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <!-- <div class="chart">
                <div ref="myChart" :style="{width: '100%', height: '300px'}"></div>
              </div> -->
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <!-- <div class="chart">
                <div ref="myChart" :style="{width: '100%', height: '300px'}"></div>
              </div> -->
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
// 引入基本模板
// let echarts = require('echarts/lib/echarts')
// // 引入柱状图组件
// require('echarts/lib/chart/bar')

// // 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// import * as echarts from "echarts";
import { onMounted } from "vue";
export default {
  name: "chart",
  setup(props) {
    const dataMap = reactive({
      activeName: "first",
    });

    const { activeName } = toRefs(dataMap);
    const trafficData = ref({});
    const echarts = inject("echarts");

    onMounted(() => {
      // 基于准备好的dom，初始化echarts实例
      // let myChart = echarts.init(document.getElementById('chartId));
      // let myChart = echarts.init(document.getElementById("chartId"));
      // // 绘制图表
      // myChart.setOption({
      //   title: { text: "在Vue中使用echarts" },
      //   tooltip: {},
      //   xAxis: {
      //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       name: "销量",
      //       type: "bar",
      //       data: [5, 20, 36, 10, 10, 20],
      //     },
      //   ],
      // });
      // window.onresize = function () {
      //   myChart.resize();
      // };
      const myChart = echarts.init(document.getElementById("chartId"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "今日话务统计",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      });
      window.onresize = function () {
        myChart.resize();
      };
    });
  },
  // data() {
  //   return {
  //     activeName: "first",
  //   };
  // },
  // mounted() {
  //   this.drawLine();
  // },
  // components: {},
  // methods: {
  //   handleClick(tab, event) {
  //     console.log(tab, event);
  //   },
  //   drawLine() {
  //     // 基于准备好的dom，初始化echarts实例
  //     let myChart = this.$echarts.init(this.$refs.myChart);
  //     // 绘制图表
  //     myChart.setOption({
  //       title: { text: "在Vue中使用echarts" },
  //       tooltip: {},
  //       xAxis: {
  //         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  //       },
  //       yAxis: {},
  //       series: [
  //         {
  //           name: "销量",
  //           type: "bar",
  //           data: [5, 20, 36, 10, 10, 20],
  //         },
  //       ],
  //     });
  //   },
  // },
};
</script>
<style scoped></style>
