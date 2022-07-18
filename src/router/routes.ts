export default [
  {
    component: () => import('@/views/Home.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('@/views/Guide.vue'),
    name: 'guide',
    path: '/guide',
    redirect: '/guide/introduction',
    children: [
      {
        name: 'introduction',
        path: '/guide/introduction',
        component: () => import('@/components/modules/Guide/Introduction.vue'),
      },
      {
        name: 'installation',
        path: '/guide/installation',
        component: () => import('@/components/modules/Guide/Installation.vue'),
      },
      {
        name: 'usage',
        path: '/guide/usage',
        component: () => import('@/components/modules/Guide/Usage.vue'),
      },
    ],
  },
]