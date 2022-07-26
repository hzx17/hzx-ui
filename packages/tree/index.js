import hTree from './index.vue'

hTree.install = (app)=>{
  app.component(hTree.name,hTree)
}

export default hTree