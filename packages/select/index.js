import hSelect from './index.vue'

hSelect.install = (app)=>{
  app.component(hSelect.name,hSelect)
}

export default hSelect