import { createApp } from 'vue';

import HelloWorld from './components/HelloWorld.vue'

const app = createApp({
  data() {
    return {}
  }
})

// Define a new component called hello-world
app.component('hello-world', HelloWorld)

app.mount("#app")
