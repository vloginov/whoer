// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App';
import sse from './services/sse';
import bus from './services/bus';

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.prototype.$bus = bus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

sse.start();
