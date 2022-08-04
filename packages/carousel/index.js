import hCarousel from './index.vue'

hCarousel.install = (app)=>{
    app.component(hCarousel.name,hCarousel)
  }
  
  export default hCarousel