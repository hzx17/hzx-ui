import hRadio from './index.vue'

hRadio.install= (app)=>{
  app.component(hRadio.name,hRadio)
}
export default hRadio