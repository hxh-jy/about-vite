const routes = [
    {
        path:'/props',
        component: () => import("@/views/props/index.vue")
    },
    {
        path:'/attrs',
        component: () => import("@/views/attrs/index.vue")
    },
    {
        path:'/mitt',
        component: () => import("@/views/mitt/index.vue")
    },
]
export default routes