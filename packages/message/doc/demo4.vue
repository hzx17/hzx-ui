<!-- html -->
<template>
  <h-space>
    <h-button @click="openMsg1">默认2500ms消失</h-button>
    <h-button @click="openMsg2">5秒后消失</h-button>
    <h-button @click="openMsg3">10秒后消失</h-button>
  </h-space>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";

const {proxy} = getCurrentInstance()
const openMsg1 = () => {
  proxy.$message({
    text: "默认2500ms消失",
  });
};
const openMsg2 = () => {
   proxy.$message({
    text: "5秒后消失！",
    timeout: 5000,
  });
};

const openMsg3 = () => {
   proxy.$message({
    text: "10秒后消失！",
    timeout: 10000,
  });
};
</script>