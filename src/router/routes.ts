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
    {
        path:'/custom',
        component: () => import("@/views/custom-event/index.vue")
    },
    {
        path:'/ref',
        component: () => import("@/views/ref/index.vue")
    },
    {
        path:'/provide',
        component: () => import("@/views/provide/index.vue")
    },
    {
        path:'/pinia',
        component: () => import("@/views/pinia/index.vue")
    },
]
export default routes