import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

let router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router