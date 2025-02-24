import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: () => import("../components/AppLogin.vue"),
      name: "login",
    },
    {
      path: "/main",
      component: () => import("../pages/AppMain.vue"),
      name: "main",
    },
    {
      path: "/users",
      component: () => import("../pages/AppUsers.vue"),
      name: "users",
    },
    {
      path: "/user",
      component: () => import("../pages/AppUser.vue"),
      name: "user",
    },
    {
      path: "/worker",
      component: () => import("../pages/user/WorkerUser.vue"),
      name: "worker",
    },
    {
      path: "/staff",
      component: () => import("../pages/AppStaff.vue"),
      name: "staff",
    },
    {
      path: "/employee",
      component: () => import("../pages/AppEmployee.vue"),
      name: "employee",
    },
    {
      path: "/tickets",
      component: () => import("../pages/AppTickets.vue"),
      name: "tickets",
    },
    {
      path: "/ticket",
      component: () => import("../pages/AppTicket.vue"),
      name: "ticket",
    },
    {
      path: "/feedback",
      component: () => import("../pages/FeedBack.vue"),
      name: "feedback",
    },
    {
      path: "/categories",
      component: () => import("../pages/AppCategories.vue"),
      name: "categories",
    },
    {
      path: "/category",
      component: () => import("../pages/AppCategory.vue"),
      name: "category",
    },
    {
      path: "/miners",
      component: () => import("../pages/AppMiners.vue"),
      name: "miners",
    },
    {
      path: "/miner",
      component: () => import("../pages/AppMiner.vue"),
      name: "miner",
    },
    {
      path: "/non-payments",
      component: () => import("../pages/NonPayments.vue"),
      name: "nonpayments",
    },
    {
      path: "/payments",
      component: () => import("../pages/AppPayments.vue"),
      name: "payments",
    },
    {
      path: "/orders",
      component: () => import("../pages/AppOrders.vue"),
      name: "orders",
    },
    {
      path: "/workers",
      component: () => import("../pages/AppWorkers.vue"),
      name: "workers",
    },
  ],
});

export default router;
