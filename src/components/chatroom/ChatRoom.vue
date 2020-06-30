<template>
  <div>
    <ul>
      <li class="ask" v-for="(askItem) in ask_info" :key="askItem">
        <van-button round type="info" plain size="small">{{askItem}}</van-button> 
        <span>&nbsp;&nbsp;：</span>
        <van-button round type="info" color="#7232dd">我</van-button>
      </li>
      <li v-for="(item,index) in result.text" :key="index">
        <van-button round type="info" color="#7232dd">许</van-button>
        <span>&nbsp;&nbsp;：</span>
        <van-button round type="info" plain size="small">{{item}}</van-button>
      </li>
    </ul>

    <van-field v-model="info" label="文本" left-icon="music-o" placeholder="分享你的趣事">
      <template #button>
        <van-button size="small" type="primary" @click="getAskData()">发送</van-button>
      </template>
    </van-field>
  </div>
</template>

<script>
import { getAskData } from "@/network/weather";

export default {
  name: "ChatRoom",
  data() {
    return {
      result: {
        text: []
      },
      ask_info: [],
      info: "",
    };
  },
  methods: {
    getAskData() {
      getAskData(this.info).then(res => {
        this.result.text.push(res.result.text);
        console.log(res);
        console.log(res.result.text);
      });
      this.ask_info.push(this.info)
      this.info = ''
    },
  }
};
</script>

<style scoped>
.ask {
  text-align: right;
}
.van-field {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 10%;
}
</style>