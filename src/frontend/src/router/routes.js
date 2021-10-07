export default [
  {
    path: "/",
    name: "PizzaConstructor",
    component: () => import("../views/PizzaConstructor.vue"),
    meta: { layout: "AppLayoutDefault" },
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../views/Login.vue"),
        meta: { layout: "AppLayoutDefault" },
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders.vue"),
    meta: { layout: "AppLayoutDefault" },
  },
];
