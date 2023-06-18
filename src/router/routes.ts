import {
  HomeOutline,
  ConstructOutline,
  LaptopOutline,
  ImagesOutline,
  FitnessOutline,
  KeyOutline,
  PeopleOutline,
  PersonOutline,
  MaleFemaleOutline,
  IdCardOutline,
  WarningOutline,
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h, Component } from 'vue'

function getIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// 常量路由
export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
      icon: '',
    },
  },

  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: getIcon(HomeOutline),
        },
      },
    ],
  },

  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: getIcon(LaptopOutline),
    },
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: getIcon(WarningOutline),
    },
  },

  // 首页路由
  {
    path: '/homeManager',
    component: () => import('@/layout/index.vue'),
    redirect: '/homeManager/love',
    name: 'homeManager',
    meta: {
      title: '首页配置',
      hidden: false,
      icon: getIcon(ConstructOutline),
      roles: ['/homepageManager'],
    },
    children: [
      {
        path: '/homeManager/carousel',
        component: () => import('@/views/homeManager/carousel/index.vue'),
        name: 'carousel',
        meta: {
          title: '轮播图管理',
          hidden: false,
          icon: getIcon(ImagesOutline),
          roles: ['/homepageManager/bannerSwiper'],
        },
      },
      {
        path: '/homeManager/love',
        component: () => import('@/views/homeManager/love/index.vue'),
        name: 'love',
        meta: {
          title: '种草管理',
          hidden: false,
          icon: getIcon(FitnessOutline),
          roles: ['/homepageManager/recommend'],
        },
      },
    ],
  },

  // 权限管理路由
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/vip',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: getIcon(KeyOutline),
      roles: ['/permissionMember'],
    },
    children: [
      {
        path: '/acl/vip',
        name: 'vip',
        component: () => import('@/views/acl/vip/index.vue'),
        meta: {
          title: '会员管理',
          hidden: false,
          icon: getIcon(PersonOutline),
          roles: ['/permissionMember/orderMember'],
        },
      },
      {
        path: '/acl/user',
        name: 'user',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          title: '用户管理',
          hidden: false,
          icon: getIcon(PeopleOutline),
          roles: ['/permissionMember/adminManagement'],
        },
      },
      {
        path: '/acl/role',
        name: 'role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          title: '角色管理',
          hidden: false,
          icon: getIcon(MaleFemaleOutline),
          roles: ['/permissionMember/roleManagement'],
        },
      },
      {
        path: '/acl/permission',
        name: 'permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          title: '权限管理',
          hidden: false,
          icon: getIcon(IdCardOutline),
          roles: ['/permissionMember/identity'],
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: '',
    },
  },
]

// // 异步路由
// export const asyncRoute = [
//   {
//     path: '/acl',
//     name: 'Acl',
//     component: () => import('@/layout/index.vue'),
//     meta: {
//       title: '权限管理',
//       hidden: false,
//       icon: 'Lock',
//     },
//     redirect: '/acl/user',
//     children: [
//       {
//         path: '/acl/user',
//         name: 'User',
//         component: () => import('@/views/acl/user/index.vue'),
//         meta: {
//           title: '用户管理',
//           hidden: false,
//           icon: 'User',
//         },
//       },
//       {
//         path: '/acl/role',
//         name: 'Role',
//         component: () => import('@/views/acl/role/index.vue'),
//         meta: {
//           title: '角色管理',
//           hidden: false,
//           icon: 'Key',
//         },
//       },
//       {
//         path: '/acl/permission',
//         name: 'Permission',
//         component: () => import('@/views/acl/permission/index.vue'),
//         meta: {
//           title: '菜单管理',
//           hidden: false,
//           icon: 'ToiletPaper',
//         },
//       },
//     ],
//   },
//
//   {
//     path: '/product',
//     name: 'Product',
//     component: () => import('@/layout/index.vue'),
//     meta: {
//       title: '商品管理',
//       hidden: false,
//       icon: 'Goods',
//     },
//     redirect: '/product/trademark',
//     children: [
//       {
//         path: '/product/trademark',
//         name: 'Trademark',
//         component: () => import('@/views/product/trademark/index.vue'),
//         meta: {
//           title: '品牌管理',
//           hidden: false,
//           icon: 'ShoppingCartFull',
//         },
//       },
//       {
//         path: '/product/spu',
//         name: 'Spu',
//         component: () => import('@/views/product/spu/index.vue'),
//         meta: {
//           title: 'spu管理',
//           hidden: false,
//           icon: 'FolderOpened',
//         },
//       },
//       {
//         path: '/product/sku',
//         name: 'Sku',
//         component: () => import('@/views/product/sku/index.vue'),
//         meta: {
//           title: 'sku管理',
//           hidden: false,
//           icon: 'Apple',
//         },
//       },
//       {
//         path: '/product/attr',
//         name: 'Attr',
//         component: () => import('@/views/product/attr/index.vue'),
//         meta: {
//           title: '属性管理',
//           hidden: false,
//           icon: 'Cpu',
//         },
//       },
//     ],
//   },
// ]

// // 任意路由
// export const anyRoute = {
//   path: '/:pathMatch(.*)*',
//   redirect: '/404',
//   name: 'Any',
//   meta: {
//     title: '任意路由',
//     hidden: true,
//     icon: 'Star',
//   },
// }
