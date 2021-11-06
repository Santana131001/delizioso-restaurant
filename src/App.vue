<template>
  <div>
    <Navbar />
    <div class="container layout">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
@import "./assets/styles/style.scss";
</style>
