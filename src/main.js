import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import Box from '@/components/elements/Box.vue'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.component('Box', Box)

app.use(createPinia())

app.mount('#app')
