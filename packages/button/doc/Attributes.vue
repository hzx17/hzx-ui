<template>
  <h-table :options="options" ></h-table>
  <br>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center"},
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "type",
        type: "String",
        red: "定义按钮颜色",
        sel: "primary || success || danger || warn || info ||custom",
        def: "primary",
      },
      {
        attr: "size",
        type: "String",
        red: "按钮大小",
        sel: "normal || medium || small || mini",
        def: "normal",
      },
      {
        attr: "disable",
        type: "Boolean",
        red: "是否不可点击",
        sel: "true || false",
        def: "false",
      },
      {
        attr: "loading",
        type: "Boolean",
        red: "加载中，配合图标使用",
        sel: "true || false",
        def: "false",
      },
      {
        attr: "leftIcon || rightIcon",
        type: "String",
        red: "左侧或右侧图标",
        sel: "图标组件中的图标",
        def: "——",
      },
       {
        attr: "customColor",
        type: "String",
        red: "按钮颜色",
        sel: "type属性设置为custom",
        def: "——",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>