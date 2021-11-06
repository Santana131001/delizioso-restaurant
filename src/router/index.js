import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
  // {
  //   path: "/gallery",
  //   name: "Gallery",
  //   component: () =>
  //     import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
