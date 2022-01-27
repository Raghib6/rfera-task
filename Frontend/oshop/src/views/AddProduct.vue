<template>
  <div class="container">
    <form autocomplete="off">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Name</label>
        <input v-model="name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Price</label>
        <input v-model="price" type="number" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Stock</label>
        <input v-model="stock" type="number" class="form-control" />
      </div>
      <button @click.prevent="addProduct" type="submit" class="btn btn-primary">
        Add Product
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddProduct",
  data() {
    return {
      name: null,
      price: null,
      stock: null,
    };
  },
  methods: {
    addProduct() {
      axios
        .post("http://127.0.0.1:8000/", {
          product_name: this.name,
          product_price: this.price,
          product_stock: this.stock,
        })
        .then(function (response) {
          console.log(response.data);
        });
      this.name = "";
      this.price = "";
      this.stock = "";
    },
  },
};
</script>
<style></style>
