import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios=axios;

// weather page
import { Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, Collapse, CollapseItem, Search } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Search);

// Constellation page
import { NoticeBar, Grid, GridItem,  Image as VanImage, Rate } from 'vant'
Vue.use(NoticeBar);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Rate);

// Robot page
import { Button,Field,} from 'vant';
Vue.use(Button);
Vue.use(Field);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
