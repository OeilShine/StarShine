<template>
  <div>
    <van-nav-bar title="聊天室" />
    <chat-room/>
  </div>
</template>

<script>
import ChatRoom from '@/components/chatroom/ChatRoom'

export default {
  name: "Robot",
  components: {
    ChatRoom
  },
  methods: {}
};
</script>

<style scoped>
.van-nav-bar {
  background: #def2fa;
}


</style>