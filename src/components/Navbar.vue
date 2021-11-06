<template>
  <div class="navbar-container bg-white">
    <div class="container">
      <nav class="navbar d-flex">
        <div class="d-flex center-v">
          <Icon style="height: 50px;" name="delizioso-logo"/>
        </div>
        <ul class="navbar-wrapper">
          <li class="navbar-item d-flex center-v" style="position: relative;">
            <div class="d-flex">
              <router-link to="/">
                <span class="test">Home</span>
              </router-link>
            </div>
            <div
              v-bind:class="(currentRouteName === 'Home')?'navbar-item-marker active':'navbar-item-marker'"
            ></div>
          </li>
          <li class="navbar-item d-flex center-v">
            <router-link to="/gallery">
              <span class="test">Gallery</span>
            </router-link>
            <div
              v-bind:class="(currentRouteName === 'Gallery')?'navbar-item-marker active':'navbar-item-marker'"
            ></div>
          </li>
        </ul>
        <ul class="navbar-wrapper right" style="margin-left: auto;">
          <li class="navbar-item d-flex center-v" style="position: relative;">
            <div class="d-flex">
              <button class="button d-flex center-v bg-transparent">
                <Icon name="cart-icon" style="height: 18px;"/>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Navbar",
  components: {
    Icon
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
