
const routes = [

  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/dashboard/home',
    redirect: '/dashboard'
  },

  {
    path: '/catalog',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/catalog/index.vue') }
    ]
  },
  {
    path: '/catalog/:id/:category',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/category/products.vue') }
    ]
  },
  {
    path: '/products/:category/:id/:product',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/products/view.vue') }
    ]
  },
  {
    path: '/cart',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cart/view.vue') }
    ]
  },
  {
    path: '/checkout',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/checkout/index.vue') }
    ]
  },
  {
    path: '/dashboard',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/index.vue') }
    ]
  },
  {
    path: '/dashboard/profile/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/profile.vue') }
    ]
  },
  {
    path: '/dashboard/settings/users',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/users/index.vue') }
    ]
  },
  {
    path: '/dashboard/user/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/users/edit.vue') }
    ]
  },
  {
    path: '/dashboard/settings/roles',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/roles/index.vue') }
    ]
  },
  {
    path: '/dashboard/settings/roles/create',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/roles/add.vue') }
    ]
  },
  {
    path: '/dashboard/settings/roles/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/roles/edit.vue') }
    ]
  },
  {
    path: '/dashboard/menus',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/menus/index.vue') }
    ]
  },
  {
    path: '/dashboard/menus/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/roles/edit.vue') }
    ]
  },
  {
    path: '/dashboard/settings/access-rights',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/access-rights/index.vue') }
    ]
  },
  {
    path: '/dashboard/settings/access-rights/create',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/access-rights/add.vue') }
    ]
  },
  {
    path: '/dashboard/settings/access-rights/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/access-rights/edit.vue') }
    ]
  },
  {
    path: '/dashboard/categories',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/categories.vue') }
    ]
  },
  {
    path: '/dashboard/category/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/category/index.vue') }
    ]
  },
  {
    path: '/dashboard/settings/chart-of-accounts',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/chart-accounts/index.vue') }
    ]
  },
  {
    path: '/dashboard/settings/chart-of-accounts/create',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/chart-accounts/add.vue') }
    ]
  },
  {
    path: '/dashboard/settings/chart-of-accounts/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/chart-accounts/edit.vue') }
    ]
  },
  {
    path: '/dashboard/settings/branches',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/branches/index.vue') }
    ]
  },
  {
    path: '/dashboard/settings/branches/create',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/branches/add.vue') }
    ]
  },
  {
    path: '/dashboard/settings/branches/:id',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/branches/add.vue') }
    ]
  },
  {
    path: '/dashboard/transactions/general-ledgers',
    meta: {
      needAuth: true
    },
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/accounting/transactions/general-ledger.vue') }
    ]
  },
  {
    path: '/dashboard/cis/add-client/new-account',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/cis/add-client/new-account.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
