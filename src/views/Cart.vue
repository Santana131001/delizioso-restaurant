<template>
  <div class="root">
    <div
      v-if="store.state.items.length ===0"
      style="align-items: center; justify-content: center; display: flex; height: 60vh;"
    >No items in cart, shop now</div>
    <div v-else class="row no-gutter">
      <div class="col-2">
        <div>
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Cart' || currentRouteName === 'Payment')?'wizzard-circle active':'wizzard-circle'"
            >i</div>
          </div>
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Cart' || currentRouteName === 'Payment')?'wizzard-divider active':'wizzard-divider'"
            ></div>
          </div>
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Payment')?'wizzard-circle active':'wizzard-circle'"
            >i</div>
          </div>
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Payment')?'wizzard-divider active':'wizzard-divider'"
            ></div>
          </div>
        </div>
      </div>
      <div class="col">
        <div
          class="no-gutters"
          style="margin-bottom: 1.25rem;"
          v-for="(item, index) in store.state.cart"
          :key="index"
        >
          <div stlye="width: 100%;">
            <div class="card-container" style="height: 100%;">
              <div class="card-header" style="text-align: center; padding: 0;"></div>
              <div class="card-body d-flex" style="position: relative;">
                <div>
                  <img :src="item.imagePath" style="border-radius: 5px; height: 140px;">
                </div>
                <div style="padding: 0 3rem;">
                  <div style="margin-bottom: 0.5rem;">
                    <span style="font-size: 20px; font-weight: bold;">{{item.name}}</span>
                  </div>
                  <div>
                    <span style="font-family: 'ProductSans'">Description: -</span>
                  </div>
                  <div style="position: absolute; bottom: 18px;">
                    <span style="font-family: 'ProductSans'">Price: -</span>
                  </div>
                </div>
                <div class="d-flex center-v" style="margin-left: auto;">
                  <button class="button bg-primary" @click="handleDeleteItemsInCart(item.name, store)">
                    <span class="text-white">-</span>
                  </button>
                  <div style="margin: 0 1rem;">
                    <span>{{item.total}}</span>
                  </div>
                  <button class="button bg-primary" @click="handleAddItemsToCart(item.name, store)">
                    <span class="text-white">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex" style="justify-content: flex-end; font-family: 'ProductSans'">
          <span>Total Price</span>
          <span style="font-weight: bold; margin-left: 0.5rem;">-</span>
        </div>
        <div
          class="d-flex"
          style="justify-content: flex-end; font-family: 'ProductSans'; margin: 1rem 0;"
        >
          <button class="button bg-primary">
            <span class="text-white">Checkout Now</span>
          </button>
        </div>
      </div>
    </div>
    <!-- <div v-for="(item, index) in store.state.cart" :key="index">
      <span>{{item.name}}</span>
      <span>{{item.total}}</span>
    </div>-->
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Cart",
  methods: {
    handleAddItemsToCart(item, store) {
      const itemDetail = store.state.items.filter(o => o.strMeal === item);
      console.log(item, store, itemDetail[0]);
      store.methods.handleAddToCart({
        strMeal: itemDetail[0].strMeal,
        idMeal: itemDetail[0].idMeal,
        strMealThumb: itemDetail[0].strMealThumb
      });
    },
    handleDeleteItemsInCart(item, store){
        
    }
  },
  setup() {
    const store = inject("store");

    return {
      store
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
