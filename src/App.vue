<template>
  <div>
    <div class="navbar-container bg-white">
      <div class="container">
        <nav class="navbar d-flex">
          <div class="d-flex center-v">
            <Icon style="height: 50px;"/>
          </div>
          <ul class="navbar-wrapper">
            <li class="navbar-item d-flex center-v">
              <div class="d-flex">
                <router-link to="/">
                  <span class="test">Home</span>
                </router-link>
              </div>
            </li>
            <li class="navbar-item d-flex center-v">
              <router-link to="/about">
                <span class="test">Gallery</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="container" style="margin-top: 6.5rem;">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon
  }
};
</script>


<style lang="scss">
@import "./assets/styles/style.scss";
</style>
