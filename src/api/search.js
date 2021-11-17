import request from "@/utils/request";

//获取搜索联想建议
export const getSearchSuggestions = (q) => {
  return request({
    method: "GET",
    url: "/getsearchsuggestions",
    params: {
      q,
    },
  });
};
