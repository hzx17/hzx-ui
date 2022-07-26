import hInput from './index.vue'

hInput.install = app => {
  app.component(hInput.name,hInput)
}

export default hInput