<template>
  <div>
    <van-search v-model="city" label="城市" placeholder="请输入搜索关键词" @search="getWeatherData()" />

    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="实时天气" name="1">
        <van-grid :column-num="3">
          <van-grid-item
            icon="https://pic.downk.cc/item/5ef8a40914195aa594dabb8f.png"
            :text="realtime.info"
          />
          <van-grid-item
            icon="https://pic.downk.cc/item/5ef8a48114195aa594dae3fa.png"
            :text="realtime.temperature +'℃'"
          />
          <van-grid-item
            icon="https://pic.downk.cc/item/5ef8a63714195aa594db6dc1.png"
            :text="realtime.humidity"
          />
          <van-grid-item
            icon="https://pic.downk.cc/item/5ef8a6b614195aa594db9437.png"
            :text="realtime.direct"
          />
          <van-grid-item
            icon="https://pic.downk.cc/item/5ef8a6dd14195aa594dba36e.png"
            :text="realtime.power"
          />
          <van-grid-item
            icon="https://pic.downk.cc/item/5ef8a72514195aa594dbba50.png"
            :text="realtime.aqi"
          />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="未来天气" name="2">
        <ul class="futureWeather">
          <li v-for="(item,index) in future" :key="index">
            {{item.date}}
            {{item.weather}}
            {{item.temperature}}
          </li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { getWeatherData } from "@/network/weather";

export default {
  name: "Accordion",
  data() {
    return {
      city: "",
      activeName: "1",
      realtime: {
        temperature: "4",
        humidity: "82",
        info: "阴",
        direct: "西北风",
        power: "3级",
        aqi: "80"
      },
      future: [
        {
          date: "2019-02-22",
          temperature: "1/7℃",
          weather: "小雨转多云"
        }
      ]
    };
  },
  methods: {
    getWeatherData() {
      getWeatherData(this.city).then(res => {
        // console.log(res);
        this.realtime = res.result.realtime;
        this.future = res.result.future;
      });
    }
  }
};
</script>

<style scoped>
.futureWeather li {
  border-bottom: 1px #4ea8ac solid;
  margin-top: 10px;
}
</style>