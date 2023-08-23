import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faDumbbell, faChartSimple, faCirclePlus, faEye, faList, faEyeSlash, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faDumbbell, faChartSimple, faCirclePlus, faEye, faList, faEyeSlash, faPenToSquare, faTrash);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
