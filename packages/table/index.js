import hTable from './index.vue';

hTable.install = app => {
  app.component(hTable.name, hTable)
} 

export default hTable