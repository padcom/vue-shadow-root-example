import { createApp } from 'vue'
import shadow from 'vue-shadow-dom'

const App = {
  template: `
    <shadow-root>
      <h1 @click="testme">{{ message }}</h1>
    </shadow-root>
  `,
  data() {
    return {
      message: 'Hello, world! from data (click me and check out console output!)'
    }
  },
  methods: {
    testme(e) {
      console.log('The following shows that the the h1 header is hidden from the document\'s DOM:')
      console.log('document.querySelector("h1")', document.querySelector('h1'))
      console.log('e.target', e.target)
    }
  }
}

createApp(App).use(shadow).mount('#app')
