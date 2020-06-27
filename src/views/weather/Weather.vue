<template>
  <div>
    <van-nav-bar title="晴雨表" />
    <Swiper/>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";

import { getWeatherData } from "@/network/weather";

export default {
  name: "Weather",
  data() {
    return {
      city: "西宁"
    };
  },
  components: {
    Swiper
  },
  created() {
    getWeatherData(this.city).then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped>
.van-nav-bar {
  background: #6162bc;
}
</style>

