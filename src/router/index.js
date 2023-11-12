import { createRouter, createWebHistory } from "vue-router";
import ShoppingCart from "@/views/ShoppingCart.vue";
import OrderList from "@/views/OrderList.vue";
import ProductList from "@/views/ProductList.vue";

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: ShoppingCart,
  },
  {
    path: "/orders",
    name: "Orders",
    component: OrderList,
  },
  {
    path: "/productList",
    name: "ProductList",
    component: ProductList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
