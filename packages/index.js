// 导入button组件
import hButton from "./button/index.js"
// 导入input组件
import hInput from "./input/index.js"
import hRadio from "./radio/index.js"
import hSelect from "./select/index.js"
import hSpace from "./space/index.js"
import hSwitch from "./switch/index.js"
import hTable from "./table/index.js"
//导入文本域组件
import hTextarea from "./textarea/index.js"
import hTree from "./tree/index.js"
import hMessage from "./message/index.js"

const install = (app) => {
  app.use(hButton)
  app.use(hInput)
  app.use(hTextarea)
  app.use(hSpace)
  app.use(hSelect)
  app.use(hRadio)
  app.use(hTree)
  app.use(hSwitch)
  app.use(hTable)

  app.config.globalProperties.$message = hMessage
}

const hzxui = {
  install
}
export { hButton ,hInput , hTextarea ,hSpace , hSelect ,hRadio ,hTree ,hSwitch,hTable, hMessage ,}
export default hzxui