<template>
  <div class="root">
    <div style="align-items: center; justify-content: center; display: flex; height: 60vh;">
      <div>
        <div class="d-flex center-v" style="margin-bottom: 1rem;">
          <Icon name="thanks-icon" style="height: 250px;"/>
        </div>
        <div style="margin-bottom: 2rem;">
          <span>Yay! Your payment is being processed, thank you :)</span>
        </div>
        <div class="d-flex center-v">
          <router-link to="/">
            <button class="button bg-primary">
              <span class="text-white" style="font-family: 'ProductSans-Medium';">Home</span>
            </button>
          </router-link>
        </div>
      </div>
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
