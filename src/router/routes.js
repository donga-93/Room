
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageTodo.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/PageSettings.vue')
      },
      {
        path: '/SentG',
        component: () => import('pages/SentG.vue')
      },
      {
        path: '/Arrived',
        component: () => import('pages/Arrived.vue')
      },
      {
        path: '/Take',
        component: () => import('pages/Take.vue')
      },
      {
        path: '/Common',
        component: () => import('pages/Common.vue')
      },
      {
        path: '/Branches',
        component: () => import('pages/Branches.vue')
      },
      {
        path: '/Questions',
        component: () => import('pages/Questions.vue')
      },
      {
        path: '/Contact',
        component: () => import('pages/Contact.vue')
      }
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
