<template>
  <div class="root">
    <div
      v-if="store.state.items.length ===0"
      style="align-items: center; justify-content: center; display: flex; height: 60vh;"
    >
      <div>
        <div class="d-flex center-v" style="margin-bottom: 1rem;">
          <Icon name="empty-cart-icon" style="height: 250px;"/>
        </div>
        <div>
          <span>It's feel empty inside, no items in cart, spend your money please :)</span>
        </div>
      </div>
    </div>
    <div v-else class="row no-gutter">
      <div class="col-md-2">
        <div class="wizzard-container">
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Cart')?'wizzard-circle active':'wizzard-circle'"
            >
              <Icon name="cart-icon" style="height: 15px;"/>
            </div>
          </div>
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Cart')?'wizzard-divider active':'wizzard-divider'"
            ></div>
          </div>
          <div class="d-flex center-v">
            <div class="wizzard-circle">
              <Icon name="wallet-icon" style="height: 15px;"/>
            </div>
          </div>
          <div class="d-flex center-v">
            <div class="wizzard-divider"></div>
          </div>
          <div class="d-flex center-v">
            <div class="wizzard-circle">
              <Icon name="wallet-icon" style="height: 15px;"/>
            </div>
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
                <div class="row no-gutters" style="width: 100%;">
                  <div class="col-md-2 d-flex center-v" style="margin: 1rem 0;">
                    <img :src="item.imagePath" style="border-radius: 5px; height: 140px;">
                  </div>
                  <div class="col-md-5 d-flex center-v" style="margin-bottom: 0.5rem;">
                    <div>
                      <div style="margin-bottom: 0.5rem;">
                        <span style="font-size: 20px; font-weight: bold;">{{item.name}}</span>
                      </div>
                      <div class="d-flex center-v">
                        <span style="font-family: 'ProductSans'">Description: -</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-flex center-v" style="margin-bottom: 0.5rem;">
                    <button class="button bg-primary" @click="handleDeleteItemsInCart(item, store)">
                      <span class="text-white">-</span>
                    </button>
                    <div style="margin: 0 1rem;">
                      <span>{{item.total}}</span>
                    </div>
                    <button
                      class="button bg-primary"
                      @click="handleAddItemsToCart(item.name, store)"
                    >
                      <span class="text-white">+</span>
                    </button>
                  </div>
                  <div class="col-md-1 d-flex center-v">
                    <span style="font-family: 'ProductSans'">Price: -</span>
                  </div>
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
  </div>
</template>

<script>
import { inject } from "vue";
import Icon from "@/components/Icon";
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
    handleDeleteItemsInCart(item, store) {
      store.state.popped = true;
      // Update Data Items
      const filteredData = store.state.items.filter(o => {
        return o.numberBuy !== item.numberBuy[0];
      });

      // Update Data Cart
      if (item.total - 1 === 0) {
        const filteredDataCart = store.state.cart.filter(o => {
          return o.name !== item.name;
        });
        store.state.cart = filteredDataCart;
      } else {
        const filteredDataCart = store.state.cart.filter(o => {
          return o.name !== item.name;
        });
        const payload = [
          {
            name: item.name,
            total: item.total - 1,
            numberBuy: item.numberBuy.slice(1, item.numberBuy.length),
            imagePath: item.imagePath
          }
        ];
        const finalData = store.state.cart.map(
          obj => payload.find(o => o.name === obj.name) || obj
        );

        // Set Data Cart
        store.state.cart = finalData;
      }
      //set Data Items
      store.state.items = filteredData;

      setInterval(() => {
        store.state.popped = false;
      }, 1200);
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
  },
  components: {
    Icon
  }
};
</script>
