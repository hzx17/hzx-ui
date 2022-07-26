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
        attr: "options",
        type: "Object",
        red: "下拉框子选项",
        sel: "label || value",
        def: "-------",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否不可点击",
        sel: "true || false",
        def: "false",
      },
      {
        attr: "placeholder",
        type: "String || Number",
        red: "占位符",
        sel: "---------",
        def: "请选择",
      },
      {
        attr: "size",
        type: "String",
        red: "下拉框大小",
        sel: "bigger || small || mini",
        def: "",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>