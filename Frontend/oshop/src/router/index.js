import Vue from "vue";
import VueRouter from "vue-router";
import ProductListing from "../views/ProductListing.vue";
import AddProduct from "../views/AddProduct.vue";
import UpdateProduct from "../views/UpdateProduct.vue";
import ProductDetails from "../views/ProductDetails.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/products",
    name: "ProductListing",
    component: ProductListing,
  },
  {
    path: "/product-details/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/update-product/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
