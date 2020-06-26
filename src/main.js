import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.axios=axios;

import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url: "/swiper_api?key=fab2bc2dafd597e1be4ae6740b1339a4&men=巨蟹&women=射手",
//   method: "post",
// }).then((res) => {
//   console.log(res);
// });