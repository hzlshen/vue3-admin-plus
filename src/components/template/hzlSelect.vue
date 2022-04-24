<template>
  <div>
    <el-select
      v-model="dataMap.select"
      :placeholder="placeholder"
      :size="size"
      @change="hanleChange"
    >
      <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
<script setup>
const emit = defineEmits();
const props = defineProps({
  value: {
    type: String,
    default: []
  },
  placeholder: {
    type: String,
    default: "请选择..."
  },
  size: {
    type: String,
    default: "small"
  },
  list: {
    type: Array,
    default: []
  }
});
const hanleChange = () => {
  emit("input", this.select);
};
const dataMap = reactive({
  select: ""
});
</script>
<style>
</style>


