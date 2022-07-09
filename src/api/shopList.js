import service from "@/utils/request";

// 获取商品列表
export function getShopList(data) {
  // store_id
  return service({
    url: '/store/getShopList',
    method: 'post',
    data: data,
  })
}
// 搜索商品
export function getSearchList(data) {
  // keyword
  return service({
    url: '/store/search',
    method: 'post',
    data: data,
  })
}
// 获取详细商品信息
export function getShopData(data) {
  // spu_id
  return service({
    url: '/store/getShop',
    method: 'post',
    data: data,
  })
}
// 根据id删除spu
export function deleteSpuShop(data) {
  return service({
    url: '/store/deleteSpu',
    method: 'post',
    data:data,
  })
}
// 根据spu_id删除sku
export function deleteSkuShop(data){
  return service({
    url:'/store/checkDeleteShop',
    method:'post',
    data:data
  })
}
// 通过spu_id查询t_category中的name
export function getCatName(data){
  return service({
    url:'/store/getCatName',
    method:'post',
    data:data
  })
}
// 传入parentname获取某一大类（数码）下的二级分类
// 传入category_id 获取name(二级分类)
export function getCateGory(data){
  return service({
      url:'/wares/getSubmenu',
      method:'post',
      data:data
  })
}

// 获取商品品类
export function getBrand(data){
  return service({
      url:'/wares/getBrand',
      method:'post',
      data:data
  })
}

// // 根据商店获取品牌
// export function getStorBrands(data){
//   return service({
//     url:'/wares/getStorBrands',
//     method:'post',
//     data:data
//   })
// }

// 获取所有品牌
export function getBrands(data){
  return service({
      url:'/wares/getBrands',
      method:'post',
      data:data
  })
}

// 添加spu
export function addSpu(data){
  return service({
      url:'/store/addSpu',
      method:'post',
      data:data
  })
}
// 获取squ的数据
export function getSpu(data){
  return service({
      url:'/store/getSpu',
      method:'post',
      data:data
  })
}
// 通过spu_id查询t_brand中的name
export function getBrandName(data){
  return service({
    url:'/store/getBrandName',
    method:'post',
    data:data
  })
}