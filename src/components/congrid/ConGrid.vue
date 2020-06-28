<template>
  <div>
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image
          cover
          round
          width="5rem"
          height="5rem"
          src="https://pic.downk.cc/item/5ef7730414195aa5947c3652.png"
        />
        <input class="choice" type="text" placeholder="输入男生星座" v-model="men" />
      </van-grid-item>
      <van-grid-item>
        <van-button
          @click="getConstellationData()"
          round
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
        >开始配对</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-image
          cover
          round
          width="5rem"
          height="5rem"
          src="https://pic.downk.cc/item/5ef772e014195aa5947c2ac9.png"
        />
        <input class="choice" type="text" placeholder="输入女生星座" v-model="women" />
      </van-grid-item>
    </van-grid>

    <van-grid direction="horizontal" :border="false" :column-num="2">
      <van-grid-item>男生：{{result.men}}</van-grid-item>
      <van-grid-item>女生：{{result.women}}</van-grid-item>
      <van-grid-item>配对指数：</van-grid-item>
      <van-grid-item>
        <van-rate v-model="result.zhishu" allow-half readonly />
      </van-grid-item>
      <van-grid-item>两情相悦指数：</van-grid-item>
      <van-grid-item>
        <van-rate
          v-model="result.xiangyue"
          icon="like"
          void-icon="like-o"
          color="#FA718F"
          allow-half
          readonly
        />
      </van-grid-item>
      <van-grid-item>结果描述：</van-grid-item>
      <van-grid-item>
        <span>{{result.jieguo}}</span>
      </van-grid-item>
      <van-grid-item>恋爱建议：</van-grid-item>
      <van-grid-item>
        <span class="van-multi-ellipsis--l2">{{result.lianai}}</span>
      </van-grid-item>
      <van-grid-item>注意事项：</van-grid-item>
      <van-grid-item>
        <span class="van-multi-ellipsis--l2">{{result.zhuyi}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getConstellationData } from "@/network/constellation";

export default {
  name: "ConGrid",
  data() {
    return {
      result: {
        men: "巨蟹",
        women: "射手",
        zhishu: 2 /*配对指数*/,
        xiangyue: 3 /*两情相悦指数*/,
        jieguo: "未来渺茫的一对" /*结果描述*/,
        lianai:
          "巨蟹座和射手座简直就是两个极端，蟹子属于居家型，射手属于户外型；一个敏感，一个神经大条。虽然看起来似乎互补，但其实是很难搭在一起的组合。差别这么大，那为什么又会在一起呢？也许刚开始时，射手乐观没机心，或许给了蟹子一种希望吧!但相处后蟹子会发觉射手连根本的小小的安全感都不能给蟹子。蟹子最重要是家，对射手来说，家只不过是间酒店而已！如此发展下去，你们容易整日吵架。两人在确立恋爱关系后，射手座姑娘外出时就会把家里的一切抛诸脑后，连最基本的安全感都无法给蟹子。射手大大咧咧的神经大条，在惹恼蟹子后还不自知。你们两个人如果在一起，到时可能连闷闷的蟹子也会受不了射手的粗神经，和射手姑娘吵起来。所以你们还真的不太适合在一起，还是做朋友好点！" /*恋爱建议*/,
        zhuyi:
          "所谓爱上一个不回家的人，说的可能就是爱上一个射手座的妹纸吧！射手座就像是脱缰野马，你家必须得有大草原。内向的蟹子想要掌握射手那无拘无束的心，那蟹子得花费足够的耐心和包容力。而且这种力量得外放，不能内压，要不然一旦射手感到束缚，那射手就会闪得更快。那要如何才能吸引到射手？蟹子可以试着丰富生活，开放自己，让自己变得好玩有趣。蟹子是容易情绪化和敏感的人，在对待神经线快赶得上电线杆的射手时，不要不吭不响，要学着坦白，描述自己的感受，不要让神经兮兮的射手觉得你鬼鬼祟祟。有事就要挑明说，否则射手是不会懂的，那最后受到伤害的还是你自己。"
      },
      men: "",
      women: "",
      value: 3
    };
  },
  methods: {
    getConstellationData() {
      getConstellationData(this.men, this.women).then(res => {
        this.result = res.result;
        this.result.zhishu = parseFloat(res.result.zhishu / 20);
        this.result.xiangyue = parseFloat(res.result.xiangyue / 20);
      });
      this.men = "";
      this.women = "";
    }
  }
};
</script>

<style scoped>
.choice {
  width: 70px;
  height: 20px;
  font-size: 11px;
}
input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
</style>