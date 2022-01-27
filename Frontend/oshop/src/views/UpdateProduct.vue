<template>
  <div class="container">
    <h1>The id is : {{ id }}</h1>
    <form enctype="multipart/form-data">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Name</label>
        <input value="name" v-model="name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Price</label>
        <input v-model="price" type="number" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Stock</label>
        <input v-model="stock" type="number" class="form-control" />
      </div>
      <button
        @click.prevent="updateProduct()"
        type="submit"
        class="btn btn-primary"
      >
        Update Product
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateProduct",
  props: ["id"],
  data() {
    return {
      name: null,
      price: null,
      stock: null,
    };
  },
  methods: {
    updateProduct() {
      axios.put("http://127.0.0.1:8000/" + this.id + "/", {
        product_name: this.name,
        product_price: this.price,
        product_stock: this.stock,
      });
      this.name = "";
      this.price = "";
      this.stock = "";
    },
  },
};
</script>

<style></style>
