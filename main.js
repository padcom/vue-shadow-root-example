import { createApp } from 'vue'
import shadow from 'vue-shadow-dom'

const App = {
  template: '<shadow-root><h1>{{ message }}</h1></shadow-root>',
  data() {
    return {
      message: 'Hello, world! from data'
    }
  }
}

createApp(App).use(shadow).mount('#app')
