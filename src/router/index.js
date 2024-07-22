import Vue from "vue";
import VueRouter from "vue-router";
import CatalogView from "../views/CatalogView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: CatalogView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
