<template>
  <div>
    <van-tabbar v-model="active" route active-color="#572257" inactive-color="#A5A9BE">
      <van-tabbar-item replace to="/weather" icon="home-o">
        <span>晴雨</span>
        <template #icon="props">
          <img :src="props.active ? icon.active.weather_active : icon.inactive.weather" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/constellation" icon="search">
        <span>星座</span>
        <template #icon="props">
          <img :src="props.active ? icon.active.constellation_active : icon.inactive.constellation" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/cookbook" icon="friends-o">
        <span>菜谱</span>
        <template #icon="props">
          <img :src="props.active ? icon.active.cookbook_active : icon.inactive.cookbook" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/robot" icon="setting-o">
        <span>许愿</span>
        <template #icon="props">
          <img :src="props.active ? icon.active.robot_active : icon.inactive.robot" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: 0,
      icon: {
        active: {
          weather_active:
            "https://pic.downk.cc/item/5ef45fad14195aa59423d3a7.png",
          constellation_active:
            "https://pic.downk.cc/item/5ef4714514195aa5942d1f92.png",
          cookbook_active:
            "https://pic.downk.cc/item/5ef49cd914195aa59443dd65.png",
            robot_active: "https://pic.downk.cc/item/5ef49d9514195aa59444432a.png"
        },
        inactive: {
          weather: "https://pic.downk.cc/item/5ef45f8014195aa59423bb34.png",
          constellation:
            "https://pic.downk.cc/item/5ef462cd14195aa5942576bb.png",
          cookbook: "https://pic.downk.cc/item/5ef49d8114195aa5944437cf.png",
          robot: "https://pic.downk.cc/item/5ef49d9f14195aa594444907.png"
        }
      }
    };
  }
};
</script>

<style scoped>
.van-tabbar {
  background: #6162bc;
}
</style>