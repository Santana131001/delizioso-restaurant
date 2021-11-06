<template>
  <svg
    v-if="name==='delizioso-logo'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 222.47 109.89"
  >
    <text
      transform="translate(0 84.86)"
      font-size="98.91"
      font-family="ProductSans-Regular, Product Sans"
    >
      <tspan letter-spacing="-0.01em">D</tspan>
      <tspan x="67.36" y="0">’</tspan>
    </text>
    <text
      transform="translate(69.38 84.86)"
      font-size="34.84"
      font-family="ProductSans-Regular, Product Sans"
    >Li</text>
    <text
      transform="translate(100.13 84.86)"
      font-size="51.97"
      font-family="ProductSans-Regular, Product Sans"
    >
      Z
      <tspan x="29.31" y="0" letter-spacing="0em">io</tspan>
      <tspan x="69.33" y="0" letter-spacing="0em">s</tspan>
      <tspan x="93.24" y="0">o</tspan>
    </text>
    <circle cx="104.89" cy="40.78" r="2.27"></circle>
    <circle cx="125.51" cy="40.78" r="2.27"></circle>
  </svg>
  <svg
    v-else-if="name==='cart-icon'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 133.91 114.73"
  >
    <polygon
      points="129.91 18.34 119.29 72.34 39.9 72.34 39.28 69.4 28.57 18.34 129.91 18.34"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="8"
    ></polygon>
    <polyline
      points="39.9 72.34 42.61 85.25 115.69 85.25"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="8"
    ></polyline>
    <polyline
      points="29.43 22.45 25.56 4 4 4"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="8"
    ></polyline>
    <circle cx="52.92" cy="104.87" r="9.85"></circle>
    <circle cx="102.92" cy="104.87" r="9.85"></circle>
  </svg>
</template>

<script>
export default {
  props: ["name"]
};
</script>
