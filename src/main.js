import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios=axios;

// weather page
import { Tabbar, TabbarItem, NavBar, Swipe, SwipeItem} from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);

// Constellation page
import { NoticeBar } from 'vant'
Vue.use(NoticeBar);

// Robot page
import { Button , Overlay } from 'vant';
Vue.use(Button);
Vue.use(Overlay);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
