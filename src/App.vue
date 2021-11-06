<template>
  <div>
    <Navbar/>
    <div class="container layout">
      <router-view />
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import store from "@/store";
import Navbar from "@/components/Navbar";
export default {
  setup() {
    provide("store", store);
  },
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
@import "./assets/styles/style.scss";
</style>
