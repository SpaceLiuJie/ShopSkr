import service from "@/utils/request";

export function getShopList(data) {
    // store_id
    return service({
      url: '/store/getShopList',
      method: 'post',
      data:data,
    })
  }