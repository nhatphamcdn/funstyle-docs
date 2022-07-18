import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue'
import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App);
app.use(hljsVuePlugin);
app.use(router);

app.mount('#app')
