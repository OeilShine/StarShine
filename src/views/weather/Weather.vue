<template>
  <div>
    <van-nav-bar title="晴雨表" />This is weather page.
   
  </div>
</template>

<script>
  import { getSwiperData,getWeatherData } from "@/network/weather"

export default {
  name: "Weather",
  data() {
    return {
      city: '西宁'
    };
  },
  created() {
    getSwiperData().then(res => {
      console.log(res)
    })
    getWeatherData(this.city).then(res => {
      console.log(res)
    })
  }
};
</script>

<style scoped>
.van-nav-bar {
  background: #6162bc;
}
</style>

