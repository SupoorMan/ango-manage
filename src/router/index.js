import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/coder",
        component: () => import("../views/Coder.vue"),
      },
      {
        path: "/xinshijian",
        component: () => import("../views/xinshijian/XinShiJian.vue"),
        redirect: "/zhaoshang",
        children: [
          {
            path: "/zhaoshang",
            // component: () => import("../views/xinshijian/zhaoshang/ZhaoShang.vue"),
            redirect: "/people",
            children: [
              {
                path: "/people",
                component: () =>
                  import("../views/xinshijian/zhaoshang/Person.vue"),
              },{
                path: "/project",
                component: () =>
                  import("../views/xinshijian/zhaoshang/Shop.vue"),
              }
            ],
          },
          {
            path: "/caiwu",
            component: () => import("../views/xinshijian/caiwu/CaiWu.vue"),
          },
          {
            path: "/forms",
            component: () => import("../views/xinshijian/forms/Forms.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
