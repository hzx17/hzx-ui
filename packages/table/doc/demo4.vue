<!-- html -->
<template>
  <h-table :options="options" :headStyle="headStyle" :rowStyle="rowStyle" ></h-table>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const state = reactive({
   options:{
    fileds:[
      {field:'id',title:'ID',align:'center'},
      {field:'name',title:'姓名',align:'center'},
      {field:'job',title:'职业',align:'center'},
      {field:'address',title:'地址',align:'center'},
      {field:'from',title:'籍贯',align:'center'},
    ],
    datas:[
      {id:10,name:'张三',job:'前端开发',address:'四川成都',from:"四川成都"},
      {id:13,name:'王五',job:'后端开发',address:'中国北京',from:"俄罗斯"},
      {id:2,name:'李四',job:'大数据',address:'可能在中国',from:"未知"},
      {id:11,name:'毛六',job:'测试',address:'未知',from:"上海"},
    ]
  },
  headStyle: {
    color: "#fff",
    borderColor: "#4c94d1",
    backgroundColor: "rgba(25,66,120,.9)",
  },
  rowStyle: {
    borderColor: "#4c94d1",
  },
});
const { options, headStyle, rowStyle } = state;
</script>