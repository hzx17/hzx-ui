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
        attr: "width",
        type: "Number",
        red: "开关宽度",
        sel: "--------",
        def: "45",
      },
      {
        attr: "closeColor",
        type: "String",
        red: "关闭颜色",
        sel: "---------",
        def: "#BFBFBF",
      },
      {
        attr: "activeColor",
        type: "String",
        red: "激活颜色",
        sel: "---------",
        def: "#0e80eb",
      },
      {
        attr: "closeText",
        type: "String",
        red: "关闭文本",
        sel: "---------",
        def: "---",
      },
            {
        attr: "activeText",
        type: "String",
        red: "激活文本",
        sel: "---------",
        def: "---",
      },
      {
        attr: "showTipsText",
        type: "Boolean",
        red: "是否展示提示",
        sel: "---------",
        def: "---",
      },
       {
        attr: "textArea",
        type: "String",
        red: "展示提示位置",
        sel: "right || left",
        def: "left",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>