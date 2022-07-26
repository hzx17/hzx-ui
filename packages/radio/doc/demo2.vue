<!-- html -->
<template>
  <h-radio
    v-model="radioVal"
    optionTab="country2"
    :options="radioOptions"
    @change="radioChange"
  ></h-radio>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("China");
const state = reactive({
  radioOptions: [
    { label: "中国", value: "China" },
    { label: "韩国", value: "Korea" ,disabled:true },
    { label: "日本", value: "Japan" ,disabled:true},
    { label: "英国", value: "UK" },
  ],
});
const radioChange = (e) => {
  console.log(e.value, e.index ,e.label);
};
const { radioOptions } = state;
</script>