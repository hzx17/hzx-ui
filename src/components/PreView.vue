<template>
  <div class="pre-code-box">
    <span class="h-copy" v-if="showCode" @click="copyCode"
      ><i class="iconfont h-iconeditor"></i>
    </span>
    <transition name="slide-fade">
      <pre
        v-highlight
        v-if="showCode"
      ><code >{{ sourceCode }}</code></pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      <i class="iconfont h-iconflashlight"></i>
    </div>
    <textarea id="inputCopy"></textarea>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import Message from "../../packages/message/index";
const props = defineProps({
  compath:{
    type: String,
    default: "",
    require: true,
  },
  demopath:{
    type: String,
    default: "",
    require: true,
  }
});
/* 将组件中的代码储存 */
const sourceCode = ref("");
/* 获取组件中的代码 */
async function getSourceCode() {
  const isDev = import.meta.env.MODE === "development";
  if (isDev) {
    sourceCode.value = (
      await import(
        /* @vite-ignore */ `/packages/${props.compath}/doc/${props.demopath}.vue?raw`
      )
      
    ).default;
  } else {
    sourceCode.value = await fetch(
      `/packages/${props.compath}/doc/${props.demopath}.vue`
    ).then((res) => res.text());
  }
}
/* 代码是否显示 */
const showCode = ref(false);
onMounted(() => {
  getSourceCode();
});
/* 点击改变显示代码 */
function showOrhideCode() {
  showCode.value = !showCode.value
}
/* 复制粘贴 */
const copyCode = () => {
  const input = document.getElementById("inputCopy");
  input.value = sourceCode.value;
  input.select();
  if (document.execCommand("Copy")) {
    document.execCommand("Copy")
    Message({
      type: "success",
      text: "代码复制成功",
    });
  } else {
    Message({
      type: "error",
      text: "代码复制失败",
    });
  }
};
</script>

<style scoped lang="less">
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -99999999;
}
.pre-code-box{
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  margin: 0 0 15px 0;
  position:relative;
  transition: all 1s ease-out;
  .h-copy {
    position: absolute;
    top: 10px;
    right: 30px;
    cursor: pointer;    
    font-size: 22px;
    i {
      font-size: 36px;
      color: #b7b3b3;
      &:hover {
        color: #000;
      }
    }
  }
}
.showCode{
  width: 100%;
  height: 40px;
  margin: 5px 0;
  // line-height: 40px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  color:#505050;
  background: #f9f9f9;
  box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    i {
      margin-left: 10px;
    }
    i.rotate {
      transform: rotate(180deg);
    }
    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }
}
.slide-fade-enter-active {
  transition: all .1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
