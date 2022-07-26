<!-- html -->
<template>
  <h-radio
    v-model="radioVal"
    optionTab="country1"
    :options="radioOptions"
    @change="radioChange"
  ></h-radio>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("Korea");
const state = reactive({
  radioOptions: [
    { label: "中国", value: "China" },
    { label: "韩国", value: "Korea" },
    { label: "日本", value: "Japan" },
    { label: "英国", value: "UK" },
  ],
});
const radioChange = (e) => {
  console.log(e.value, e.index ,e.label);
};
const { radioOptions } = state;
</script>