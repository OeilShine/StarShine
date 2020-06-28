<template>
  <div>
    <van-nav-bar title="天问" />
    <van-notice-bar
      left-icon="volume-o"
      text="考试必过！考试必过！考试必过！"
      color="#1989fa"
      background="#ECF9FF"
      scrollable
    />
    <con-grid />
  </div>
</template>

<script>
import ConGrid from '@/components/congrid/ConGrid'

export default {
  name: "Constellation",
  components: {
    ConGrid
  }
};
</script>

<style scoped>
.van-nav-bar {
  background: #6162bc;
}

</style>