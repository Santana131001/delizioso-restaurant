<template>
  <div class="root">
    <div class="row no-gutter">
      <div class="col-md-2">
        <div class="wizard-container center-v">
          <div class="d-flex center-v">
            <div class="wizard-circle active">
              <Icon name="cart-icon" style="height: 15px;"/>
            </div>
          </div>
          <div class="d-flex center-v">
            <div class="wizard-divider active"></div>
          </div>
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Checkout')?'wizard-circle active':'wizard-circle'"
            >
              <Icon name="wallet-icon" style="height: 15px;"/>
            </div>
          </div>
          <div class="d-flex center-v">
            <div
              v-bind:class="(currentRouteName === 'Checkout')?'wizard-divider active':'wizard-divider'"
            ></div>
          </div>
          <div class="d-flex center-v">
            <div class="wizard-circle">
              <Icon name="like-icon" style="height: 15px;"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div style="width: 100%; margin-bottom: 2rem;">
          <button class="button bg-primary">
            <span class="text-white" style="font-family: 'ProductSans-Medium';">Mastercard</span>
          </button>
        </div>
        <div style="width: 100%; margin-bottom: 1.5rem;">
          <label class="field field_v2" style="width: 100%;">
            <input class="field__input" placeholder="BCA, Mandiri etc.">
            <span class="field__label-wrap">
              <span class="field__label text-primary">Cardholder Name</span>
            </span>
          </label>
        </div>
        <div style="margin-bottom: 1.5rem;">
          <label class="field field_v2" style="width: 100%;">
            <input class="field__input" placeholder="0941-5114-2223-5112">
            <span class="field__label-wrap">
              <span class="field__label text-primary">Card Number</span>
            </span>
          </label>
        </div>
        <div class="d-flex" style="margin-bottom: 3rem;">
          <div style="width: 100%; margin-right: 0.5rem;">
            <label class="field field_v2" style="width: 100%;">
              <input class="field__input" placeholder="October 13 2001">
              <span class="field__label-wrap">
                <span class="field__label text-primary">Date</span>
              </span>
            </label>
          </div>
          <div style="width: 100%; margin-left: 0.5rem;">
            <label class="field field_v2" style="width: 100%;">
              <input class="field__input" placeholder="CVV">
              <span class="field__label-wrap">
                <span class="field__label text-primary">CVV</span>
              </span>
            </label>
          </div>
        </div>
        <div class="d-flex" style="justify-content:flex-end; margin-bottom: 0.5rem;">
          <span
            class="d-flex center-v"
            style="font-family: 'ProductSans'; margin-right: 1rem;"
          >Total Product</span>
          <span style="font-size: 30px">{{store.state.items.length}}</span>
        </div>
        <div class="d-flex" style="justify-content:flex-end; margin-bottom: 2.5rem;">
          <span
            class="d-flex center-v"
            style="font-family: 'ProductSans'; margin-right: 1rem;"
          >Total Ammount</span>
          <span style="font-size: 30px">Rp 0</span>
        </div>
        <div class="d-flex" style="justify-content:flex-end;">
          <div class="d-flex center-v" style="margin-right: 3rem;">
            <router-link to="/cart">
              <span style="font-size: 14px">Back to cart</span>
            </router-link>
          </div>
          <router-link to="/thanks">
            <button class="button bg-primary" @click="resetData(store)">
              <span class="text-white" style="font-family: 'ProductSans-Medium';">Pay Now</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import Icon from "@/components/Icon";
export default {
  name: "Checkout",
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
  },
  methods: {
    resetData(store) {
      store.state.cart = [];
      store.state.items = [];
      store.state.lastNumberBuy = 0;
    }
  }
};
</script>
