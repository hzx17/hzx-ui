import hSwitch from './index.vue'

hSwitch.install = (app)=>{
  app.component(hSwitch.name,hSwitch)
}

export default hSwitch