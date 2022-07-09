import service from "@/utils/request";
// 获取订单列表

// store_id:id
// page: 页数,
// count: 数量,
export const getOrder=(data)=>{
    return service({
        method:"post",
        url:"/order/getOrder",
        data,
    })
}
// 删除订单
export const deleteOrder=(data)=>{
    return service({
        method:"post",
        url:"/order/deleteOrder",
        data
    })
}
// 订单详情
export const getOrderDetail=(data)=>{
    return service({
        method:"post",
        url:"/order/getOrderDetail",
        data,
    })
}
// 
export const updateOrder=(data)=>{
    return service({
        method:"post",
        url:"/order/updateOrder",
        data,
    })
}
// 查询退款列表
export const getBackStock=(data)=>{
    return service({
        method:"post",
        url:"/order/getBackStock",
        data
    })
}
// 查询退款详情
export const getBackStockDetail=(data)=>{
    return service({
        method:"post",
        url:"/order/getBackStockDetail",
        data
    })
}
// 接受退款
export const updateBackStock=(data)=>{
    return service({
        method:'post',
        url:'order/updateBackStock',
        data,
    })
}
