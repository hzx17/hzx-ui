<!-- html -->
<template>
  <h-space>
    <h-button type="info" @click="openInfo">文本状态</h-button>
    <h-button typr="success" @click="openSuccess">成功状态</h-button>
    <h-button type="warn" @click="openWarn">警告状态</h-button>
    <h-button type="danger" @click="openError">错误状态</h-button>
    <h-button type="primary" @click="openCustom">自定义</h-button>
  </h-space>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";
const {proxy} = getCurrentInstance()
const openInfo = () => {
  proxy.$message({
    type: "info",
    text: "文本消息提示!",
  });
};
const openSuccess = () => {
  proxy.$message({
    type: "success",
    text: "成功状态消息提示!",
  });
};
const openWarn = () => {
  proxy.$message({
    type: "warn",
    text: "警告状态消息提示!",
  });
};
const openError = () => {
  proxy.$message({
    type: "error",
    text: "错误状态消息提示!",
  });
};
const openCustom = () => {
  proxy.$message({
    type: "custom",
    text: "自定义消息弹窗样式",
    icon: "h-iconsetup iconfont",
    textColor: "#000",
    bgColor: "#e19af3",
  });
};
</script>