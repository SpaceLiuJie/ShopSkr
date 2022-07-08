import service from "@/utils/request";


//获取品牌
export function getBrands(data){
    return  service({
        url:'/wares/getBrands',
        method:'post',
        data:data
    })
}
// 删除品牌
export function deleteBrand(data){
    return service({
        url:'/wares/getBrands',
        method: "post",
        data
    })
}
// 搜索品牌
export function searchBrand(data){
    return  service({
        url:'/wares/searchBrand',
        method: 'post',
        data:data
    })
}
// 
export function addBrand(data){
return service ({
    url: '/wares/addBrand',
    method:'post',
    data:data
})
}
// 
export function addStoreBrand(data){
    return service({
        url:"/wares/addStoreBrand",
        method:'post',
        data:data
    })
}
//
export  function addCategoryBrand(data){
    return service({
        url:'/wares/addCategoryBrand',
        method:'post',
        data:data
    })

}

