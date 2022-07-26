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
        red: "输入框类型",
        sel: "password || number || url || email",
        def: "text",
      },
      {
        attr: "placeholder",
        type: "String",
        red: "占位符",
        sel: "----",
        def: "----",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否不可点击",
        sel: "true || false",
        def: "false",
      },
      {
        attr: "clearable ",
        type: "Boolean",
        red: "是否可清除",
        sel: "true || false",
        def: "false",
      },
      {
        attr: "lefticon || righticon",
        type: "String",
        red: "左侧或右侧图标",
        sel: "图标组件中的图标",
        def: "—--—",
      }
    ],
  },
});
const { options } = state;
</script>
