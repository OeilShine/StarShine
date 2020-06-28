<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="#6162BC" :width="375" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="BASEURL + image.url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getSwiperData } from "@/network/weather";

import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);

export default {
  name: "Swiper",
  data() {
    return {
      BASEURL: "https://cn.bing.com/",
      images: []
    };
  },
  created() {
    getSwiperData().then(res => {
      // console.log(res.images);
      this.images = res.images;
    });
  }
};
</script>

<style scoped>
.van-swipe-item img{
    width: 100%;
}
</style>