import hButton from './index.vue'

hButton.install = app => {
  app.component(hButton.name,hButton)
}

export default hButton