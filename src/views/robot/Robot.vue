<template>
  <div>
    <van-nav-bar title="机器人" />
    <Overlay/>
  </div>
</template>

<script>
import Overlay from '@/components/overlay/Overlay '

export default {
  name: "Robot",
  components: {
      Overlay
  }
};
</script>

<style scoped>
.van-nav-bar {
  background: #6162bc;
}
</style>