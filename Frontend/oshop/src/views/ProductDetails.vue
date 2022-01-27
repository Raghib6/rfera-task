<template>
  <div class="container">
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Price</th>
          <th scope="col">Product Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.product_name }}</td>
          <td>{{ product.product_price }} Tk</td>
          <td>{{ product.product_stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetails",
  props: ["id"],
  data() {
    return {
      product: [],
    };
  },
  methods: {
    eachProduct() {
      axios.get("http://127.0.0.1:8000/" + this.id).then((response) => {
        this.product = response.data;
      });
    },
  },
  mounted() {
    this.eachProduct();
  },
};
</script>

<style></style>
