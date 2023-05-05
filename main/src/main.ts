import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { CounterComponent, CounterGreenComponent, HelloWorld } from '@sample/core'
import '@sample/core/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('CounterComponent', CounterComponent)
app.component('CounterGreenComponent', CounterGreenComponent)
app.component('HelloWorld', HelloWorld)

app.mount('#app')
