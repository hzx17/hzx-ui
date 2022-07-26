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
        attr: "optionTab",
        type: "String",
        red: "单选框名字,当多次调用单选时，要加上名字",
        sel: "--------",
        def: "radio",
      },
      {
        attr: "options",
        type: "Object",
        red: "配置项，有label、value、disabled三个属性",
        sel: "----",
        def: "----",
      },
      {
        attr: "v-model",
        type: "String || Number",
        red: "单选绑定值",
        sel: "---------",
        def: "--------",
      },
      {
        attr: "columned",
        type: "Boolean",
        red: "是否竖直排列",
        sel: "true || false",
        def: "false",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>