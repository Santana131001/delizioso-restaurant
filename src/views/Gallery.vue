<template>
  <div class="container layout">
    <span>ss</span>
    <span>{{store.state.counter}}</span>
    <button @click="store.methods.handleAddToCart">Add</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const store = inject("store");
    return {
      store
    }
  },
  created: function() {},
  mounted: function() {},
  methods: {}
};
</script>
