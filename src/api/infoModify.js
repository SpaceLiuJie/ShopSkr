import service from '@/utils/request'
export function addInfoModify(data) {
    return service({
      url: '/store/infoModify',
      method: 'post',
      data,
    })
  }
   // 参数:id  ;商家id
  export function getStoreInfo(data) {
    return service({
      url: '/store/getInfo',
      method: 'post',
      data,
    })
  }