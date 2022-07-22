import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue'
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/stackoverflow-light.css';
import xml from 'highlight.js/lib/languages/xml';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', xml);
const app = createApp(App);
app.use(hljsVuePlugin);
app.use(router);

app.mount('#app')
