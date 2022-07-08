import service from "@/utils/request";
// 传入parentname 获取某一大类（数码）下的二级分类
// 传入 category_id 获取name（二级分类）
export function getCateGory(data){
    return service({
        url:'/wares/getSubmenu',
        method:'post',
        data:data
    })
}
export function getProduct(data) {
    return service({
      url: "/wares/getMenu",
      method: 'post',
      data
    });
  }
  export function deleteProduct(data){
    return service({
      url:'/wares/deleteMenu',
      method:"post",
      data
    })
  }
  export function deleteSubmenu(data){
    return service({
      url:'/wares/deleteSubmenu',
      method:'post',
      data
    })
  }
  