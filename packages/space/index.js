import hSpace from './index.vue'

hSpace.install = (app)=>{
  app.component(hSpace.name,hSpace)
}

export default hSpace