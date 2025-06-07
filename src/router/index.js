// 引入路由
import { createRouter, createWebHashHistory } from "vue-router";

// 路由配置
const routes = [
    {
        path: "/", // 路由路径
        name: "login", // 路由名称
        component: () => import("../page/Login.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../page/Home.vue"),
        children:[
            {
                path: "/userlist",
                name: "userlist",
                component: () => import("../page/HomeChildren/UserList.vue"),
            }
        ]

    },
];
// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes, // 路由配置简写形式，同 routes: routes
    linkActiveClass: "active",
});
// 导出 router
export default router;