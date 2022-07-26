import hTextarea from './index.vue'

hTextarea.install = (app) =>{
  app.component(hTextarea.name,hTextarea)
}

export default hTextarea