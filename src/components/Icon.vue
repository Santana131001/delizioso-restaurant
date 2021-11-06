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
  <svg
    v-else-if="name === 'wallet-icon'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 135.12 121.68"
  >
    <path
      d="M92.88,127.2H88.8a9.6,9.6,0,0,1-9.6-9.6v-4.08A13.67,13.67,0,0,0,92.88,127.2Z"
      transform="translate(-76.2 -8.52)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="6"
    ></path>
    <path
      d="M146.84,21.12l-39.06,15.6H79.2v-7.8a7.8,7.8,0,0,1,7.8-7.8Z"
      transform="translate(-76.2 -8.52)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="6"
    ></path>
    <path
      d="M195.84,30.72v6.06a11.9,11.9,0,0,0-1.2-.06H180.49l-6-15.6h11.7A9.6,9.6,0,0,1,195.84,30.72Z"
      transform="translate(-76.2 -8.52)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="6"
    ></path>
    <path
      d="M195.84,36.78c-.39,0-116.24-.06-116.64-.06v76.8A13.67,13.67,0,0,0,92.88,127.2H194.64a13.67,13.67,0,0,0,13.68-13.68V50.4A13.66,13.66,0,0,0,195.84,36.78Zm11,54.18h-13a9,9,0,0,1,0-18h13Z"
      transform="translate(-76.2 -8.52)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="6"
    ></path>
    <path
      d="M206.82,73V91h-13a9,9,0,0,1,0-18Z"
      transform="translate(-76.2 -8.52)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="6"
    ></path>
    <polygon
      points="104.29 28.2 31.58 28.2 70.64 12.6 94.68 3 98.34 12.6 104.29 28.2"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="6"
    ></polygon>
    <path
      d="M206.82,73V91h-13a9,9,0,0,1,0-18Z"
      transform="translate(-76.2 -8.52)"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="6"
    ></path>
    <rect
      x="119.91"
      y="73.17"
      width="0.54"
      height="0.54"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="4"
    ></rect>
  </svg>
  <svg v-else-if="name==='empty-cart-icon'" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 100.88 102.72"><ellipse cx="48.82" cy="92.4" rx="42.66" ry="10.32" fill="#5966d8" opacity="0.24"/><rect x="1" y="24.48" width="98.88" height="18.72" rx="5.16" fill="#ffcd35" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><path d="M175.44,115.68a430.54,430.54,0,0,1-72.72.72L94.44,65.28H183Z" transform="translate(-88.28 -22.08)" fill="#7c83fd" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><line x1="36.76" y1="57.84" x2="38.92" y2="76.56" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><line x1="50.44" y1="58.32" x2="50.44" y2="76.56" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><line x1="64.96" y1="58.32" x2="62.2" y2="76.56" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><line x1="6.16" y1="33.84" x2="13.72" y2="33.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline points="9.94 33.84 22.36 5.04 37.84 5.04 78.76 5.04 91.48 33.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line x1="86.68" y1="33.84" x2="94.72" y2="33.84" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><rect x="37.84" width="24.36" height="10.08" rx="1.14"/><path d="M134.59,116.6c-9.61,0-19.3-.33-28.84-1,7.13-4.13,17.83-6.14,32.55-6.14h.78c15.19.07,26.09,1.87,33.17,5.48-12.6,1.09-25.25,1.64-37.65,1.64Z" transform="translate(-88.28 -22.08)" fill="#5966d8"/><path d="M138.31,110.48h.76c12.64.06,22.26,1.31,29.11,3.81-11.25.87-22.52,1.31-33.59,1.31-8.35,0-16.76-.25-25.08-.75,6.85-2.93,16.36-4.37,28.8-4.37m0-2c-18.61,0-29.14,3.16-35.59,7.92q15.89,1.2,31.87,1.2,20.35,0,40.85-1.92c-6.39-4.32-17.34-7.11-36.36-7.2Z" transform="translate(-88.28 -22.08)"/></svg>
</template>

<script>
export default {
  props: ["name", "color"]
};
</script>
