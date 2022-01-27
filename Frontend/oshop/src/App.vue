<template>
  <div class="id">
    <div class="container my-4">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <ul class="navbar-nav mx-auto">
          <router-link :to="{ name: 'ProductListing' }">
            <li
              class="nav-item text-center"
              @click="activeTab = 'all-products'"
            >
              <a class="nav-link" href="#">Show Products</a>
            </li>
          </router-link>
          <router-link :to="{ name: 'AddProduct' }">
            <li class="nav-item text-center" @click="activeTab = 'add-product'">
              <a class="nav-link" href="#">Add Products</a>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
};
</script>

<style></style>
