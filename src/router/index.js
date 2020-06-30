import Vue from "vue";
import VueRouter from "vue-router";

const Weather = () => import("../views/weather/Weather");
const Constellation = () => import("../views/constellation/Constellation");
const Robot = () => import("../views/robot/Robot");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: '/weather',
  },
  {
    path: "/weather",
    component: Weather,
  },
  {
    path: "/constellation",
    component: Constellation,
  },
  {
    path: "/robot",
    component: Robot,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
