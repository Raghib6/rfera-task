<template>
  <div class="container mb-5">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.product_image" class="card-img-top" alt="..." />
          <div class="card-body">
            <router-link
              :to="{ name: 'ProductDetails', params: { id: product.id } }"
            >
              <h5 class="card-title">
                <b>{{ product.product_name }}</b>
              </h5></router-link
            >
            <p class="card-text">{{ product.product_price }} Tk</p>
          </div>
          <div class="card-footer">
            <router-link
              :to="{ name: 'UpdateProduct', params: { id: product.id } }"
            >
              <button class="btn btn-info mx-3">Update</button>
            </router-link>
            <button
              @click="deleteProduct(product.id)"
              class="btn btn-danger mx-3"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "ProductListing",
  data() {
    return {};
  },
  methods: {
    showProducts() {
      this.$store.dispatch("getProducts");
    },
    deleteProduct(id) {
      axios.delete("http://127.0.0.1:8000/" + id).then(() => {
        this.showProducts();
      });
    },
  },
  computed: mapState(["products"]), //from state
  mounted() {
    this.showProducts();
  },
};
</script>
