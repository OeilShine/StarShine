<template>
  <div>
    <van-nav-bar title="晴雨表" />
    <Swiper />
    <Accordion />
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
import Accordion from "@/components/accordion/Accordion";

export default {
  name: "Weather",
  components: {
    Swiper,
    Accordion
  },
};
</script>

<style scoped>
.van-nav-bar {
  background: #6162bc;
}
</style>

