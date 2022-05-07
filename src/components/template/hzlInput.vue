<template>
  <div>
    <el-input
      :type="type"
      :size="size"
      v-model="inputValue"
      :placeholder="placeholder"
      @change="inputChange"
    ></el-input>
  </div>
</template>

<script setup>
const emit = defineEmits();
const props = defineProps({
  type: {
    type: String,
    default: "text"
  },
  inputValue: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: "small"
  },
  placeholder: {
    type: String,
    default: "请输入..."
  }
});
const inputChange = () => {
  emit("change", dataMap.inputValue);
};
const dataMap = reactive({
  inputValue: ""
});
</script>

<script>
export default {
  name: "hzl-input",
  // value type size placeholder
  // props: ['value','type','size','placeholder'],
  props: {
    type: {
      type: String,
      default: "text"
    },
    inputValue: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    placeholder: {
      type: String,
      default: "请输入..."
    }
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {
    inputChange() {
      this.$emit("change", this.inputValue);
    }
  }
};
</script>
<style>
</style>


