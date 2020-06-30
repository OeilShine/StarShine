import { request } from "./request";

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
