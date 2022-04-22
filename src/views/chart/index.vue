<template>
  <div class="admin-echarts">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div id="chartId" style="width: 100%; height: 300px"></div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <!--  <div id="chartId" style="width: 100%; height: 300px"></div>-->
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
        <!--  <div id="chartId" style="width: 100%; height: 300px"></div>-->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted } from "vue";
export default {
  name: "chart",
  setup(props) {
    const dataMap = reactive({
      activeName: "first"
    });

    const handleClick = (tab, event) => {
      console.log(tab, event);
    };

    const { activeName } = toRefs(dataMap);

    onMounted(() => {
      const myChart = echarts.init(document.getElementById("chartId"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "今日话务统计"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      });
      window.onresize = function() {
        myChart.resize();
      };
    });

    return {
      ...dataMap
    };
  }
};
</script>
<style scoped>
.admin-echarts {
  margin: 20px auto;
}
</style>
