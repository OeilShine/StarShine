import { request } from "./request";

export function getSwiperData() {
  return request({
    url: "/swiper_api/HPImageArchive.aspx",
    params: {
      format: "js",
      idx: 8,
      n: 8,
      mkt: "zh-CN",
    },
  });
}

export function getWeatherData(city) {
  return request({
    url: "/api/simpleWeather/query",
    params: {
      key: "0677eaae7788e0028adde89038823c79",
      city
    },
  });
}

export function getAskData(info) {
  return request({
    url: "/ask_api/Tuling/Ask",
    params: {
      key: "28c2a0ff23fa4e9296b41a98f196b546",
      info
    },
  });
}
