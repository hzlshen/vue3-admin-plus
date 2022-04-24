<template>
  <div>
    <el-table
      border
      :data="DataList"
      highlight-current-row
      :height="height"
      @row-click="handleSelectedRow"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-for="item in cols"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :type="item.type"
      >
        <!-- :formatter="formatter" -->
        <!-- formatter的用法：需要在每个col里添加formatter,push方法进去 对数据进行格式化 -->
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
// import moment from "moment";
// import { defineProps } from "vue";

const props = defineProps({
  DataList: {
    type: Array,
    default() {
      return [];
    }
  },
  cols: {
    type: Array,
    default() {
      return [];
    }
  },
  height: {
    type: [Array, Number],
    default: "410"
  }
});

const handleSelectedRow = () => {};
const handleSelectionChange = () => {};
</script>
<style></style>
