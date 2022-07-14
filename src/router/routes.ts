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
  },
]