import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCloud, faSnowflake, faCloudRain, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faCloud, faSnowflake, faCloudRain, faCloudSun)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');

<i class="fas fa-search"></i>