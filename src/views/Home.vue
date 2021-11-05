<template>
  <div class="about">
    <h1>This is an home page</h1>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import { onMounted } from "vue";

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  setup() {
    onMounted(() => {
      console.log("Component is mounted!");
    });
  }
};
</script>
