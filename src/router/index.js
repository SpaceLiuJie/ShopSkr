import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [{
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [{
      path: "home",
      name: "home",
      component: () => import("@/views/home/index"),
      meta: {
        title: "首页",
        icon: 'home'
      }
    }]
  },
  {
    path: '/product',
    component: Layout,
    name: '商品',
    meta: {
      title: '商品',
      icon: 'product'
    },
    children: [{
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('@/views/product/add.vue'),
        meta: {
          title: '添加商品',
          icon: 'product-add'
        }
      },
      {
        path: "productList",
        name: "productList",
        component: () => import("../views/product/index.vue"),
        meta: {
          title: "商品列表",
          icon: 'product-list'
        }
      },
      {
        path: "productCate",
        name: "productCate",
        component: () => import("../views/project/productCate/index.vue"),
        meta: {
          title: "商品分类",
          icon: 'product'
        }
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('@/views/pms/brand/index'),
        meta: {
          title: '品牌管理',
          icon: 'product-brand'
        }
      },
      {
        path: '/product',
        redirect: '/product/productList'
      },
      {
        path: 'addBrand',
        name: 'addBrand',
        component: () => import('@/views/pms/brand/add'),
        meta: { title: '添加品牌' },
        hidden: true
      },
    ]
  },
  {
    path: "/market",
    component: Layout,
    name: "营销",
    redirect: '/market/marketCoupon',
    meta: {
      title: "营销",
      icon: 'sms'
    },
    children: [{
        path: "marketCoupon",
        name: "marketCoupon",
        component: () => import("../../src/views/market/marketCoupon/index"),
        meta: {
          title: "优惠券列表",
          icon: 'sms-coupon'
        }
      },
      {
        path: 'addCoupon',
        name: 'addCoupon',
        component: () => import('../../src/views/market/addmarket/index.vue')
      },
      {
        path: 'couponDetail',
        name: 'couponDetail',
        component: () => import('../../src/views/market/marketCoupon/marketdetail.vue')
      },
      {
        path: 'editCoupon',
        name: 'editCoupon',
        component: () => import('../../src/views/market/marketCoupon/editmarket.vue')
      },
      {
        path: "market",
        name: '秒杀活动列表',
        component: () => import('@/views/market/active/index.vue'),
        meta: {
          title: "秒杀活动列表",
          icon: 'sms-flash'
        }
      },
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: {
      title: '订单',
      icon: 'order'
    },
    children: [{
        path: 'order',
        name: 'order',
        component: () => import('@/views/oms/order/index'),
        meta: {
          title: '订单列表',
          icon: 'product-list'
        }
      },
      {
        path: 'orderDetail/:order_id/:status',
        name: 'orderDetail',
        component: () => import('@/views/oms/order/orderDetail'),
        meta: { title: '订单详情' },
        props: true,
        hidden: true
      },
      {
        path: 'deliverOrderList/:order_id',
        name: 'deliverOrderList',
        component: () => import('@/views/oms/order/deliverOrderList'),
        meta: { title: '发货列表' },
        hidden: true,
        props: true
      },
      {
        path: 'returnApply',
        name: 'returnApply',
        component: () => import('@/views/oms/apply/index'),
        meta: {
          title: '退货申请处理',
          icon: 'order-return'
        }
      },
      {
        path: 'returnApplyDetail/:id/:order_id',
        name: 'returnApplyDetail',
        component: () => import('@/views/oms/apply/applyDetail'),
        meta: { title: '退货原因详情' },
        hidden: true,
        props: true
      },
    ]
  },
  {
    path: "/customary",
    name: "customary",
    redirect: "/customary/default",
    component: () => import("@/views/customary/index.vue"),
    meta: {
      title: "客服",
      icon: "customary"
    },
  },
  {
    path: '/infoModify',
    component: Layout,
    redirect: '/infoModify',
    children: [{
      path: 'infoModify',
      name: 'infoModify',
      component: () => import('@/views/infoModify/index'),
      meta: {
        title: '店铺信息',
        icon: "store-msg"
      }
    }]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
