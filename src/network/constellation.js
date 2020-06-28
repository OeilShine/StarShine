import { request } from "./request";

// http://apis.juhe.cn/?key=xxxxx&men=%E7%99%BD%E7%BE%8A&women=%E9%87%91%E7%89%9B
export function getConstellationData(men,women) {
  return request({
    url: "/api/xzpd/query",
    params: {
      key: "fab2bc2dafd597e1be4ae6740b1339a4",
      men,
      women
    },
  });
}
