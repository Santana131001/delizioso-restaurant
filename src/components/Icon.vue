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
  <svg
    v-else-if="name==='empty-cart-icon'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 100.88 102.72"
  >
    <ellipse cx="48.82" cy="92.4" rx="42.66" ry="10.32" fill="#5966d8" opacity="0.24"></ellipse>
    <rect
      x="1"
      y="24.48"
      width="98.88"
      height="18.72"
      rx="5.16"
      fill="#ffcd35"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="2"
    ></rect>
    <path
      d="M175.44,115.68a430.54,430.54,0,0,1-72.72.72L94.44,65.28H183Z"
      transform="translate(-88.28 -22.08)"
      fill="#7c83fd"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="2"
    ></path>
    <line
      x1="36.76"
      y1="57.84"
      x2="38.92"
      y2="76.56"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="2"
    ></line>
    <line
      x1="50.44"
      y1="58.32"
      x2="50.44"
      y2="76.56"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="2"
    ></line>
    <line
      x1="64.96"
      y1="58.32"
      x2="62.2"
      y2="76.56"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="2"
    ></line>
    <line
      x1="6.16"
      y1="33.84"
      x2="13.72"
      y2="33.84"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    ></line>
    <polyline
      points="9.94 33.84 22.36 5.04 37.84 5.04 78.76 5.04 91.48 33.84"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    ></polyline>
    <line
      x1="86.68"
      y1="33.84"
      x2="94.72"
      y2="33.84"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    ></line>
    <rect x="37.84" width="24.36" height="10.08" rx="1.14"></rect>
    <path
      d="M134.59,116.6c-9.61,0-19.3-.33-28.84-1,7.13-4.13,17.83-6.14,32.55-6.14h.78c15.19.07,26.09,1.87,33.17,5.48-12.6,1.09-25.25,1.64-37.65,1.64Z"
      transform="translate(-88.28 -22.08)"
      fill="#5966d8"
    ></path>
    <path
      d="M138.31,110.48h.76c12.64.06,22.26,1.31,29.11,3.81-11.25.87-22.52,1.31-33.59,1.31-8.35,0-16.76-.25-25.08-.75,6.85-2.93,16.36-4.37,28.8-4.37m0-2c-18.61,0-29.14,3.16-35.59,7.92q15.89,1.2,31.87,1.2,20.35,0,40.85-1.92c-6.39-4.32-17.34-7.11-36.36-7.2Z"
      transform="translate(-88.28 -22.08)"
    ></path>
  </svg>
  <svg
    v-else-if="name==='like-icon'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 110.81 133.36"
  >
    <rect
      x="82.47"
      y="64.7"
      width="24.84"
      height="65.16"
      rx="4.38"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="7"
    ></rect>
    <path
      d="M181.08,75.4v51.08c-58.32,16.44-67.8-1.44-67.8-1.44-24.72-58.56-.71-56.68-.71-56.68,19.19,1.12,19.19-1.88,19.19-1.88a36.32,36.32,0,0,1,3.6-26.64c7.68-13.2,14.88,0,14.88,0C147.86,64.15,168.71,72.56,181.08,75.4Z"
      transform="translate(-98.61 -3.7)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="7"
    ></path>
    <line
      x1="13.23"
      y1="19.58"
      x2="24.51"
      y2="27.26"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="7"
    ></line>
    <line
      x1="42.99"
      y1="3.5"
      x2="42.99"
      y2="17.18"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="7"
    ></line>
    <line
      x1="72.03"
      y1="21.02"
      x2="60.99"
      y2="27.26"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="7"
    ></line>
  </svg>
  <svg
    v-else-if="name==='user-icon'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 80.08 101.1"
  >
    <circle
      cx="40.04"
      cy="23.48"
      r="19.98"
      fill="none"
      stroke="#FFF"
      stroke-miterlimit="10"
      stroke-width="7"
    ></circle>
    <path
      d="M179.63,114.34a37.37,37.37,0,0,1-.54,6.3h-72a37.37,37.37,0,0,1-.54-6.3,36.54,36.54,0,1,1,73.08,0Z"
      transform="translate(-103.05 -23.04)"
      fill="none"
      stroke="#FFF"
      stroke-miterlimit="10"
      stroke-width="7"
    ></path>
  </svg>
  <svg
    v-else-if="name==='add-icon'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 71.88 71.88"
  >
    <line
      x1="4.5"
      y1="35.94"
      x2="67.38"
      y2="35.94"
      fill="none"
      stroke="#FFF"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="9"
    ></line>
    <line
      x1="36.23"
      y1="67.38"
      x2="36.23"
      y2="4.5"
      fill="none"
      stroke="#FFF"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="9"
    ></line>
  </svg>
  <svg
    v-else-if="name==='thanks-icon'"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 101.09 96.53"
  >
    <path
      d="M166.89,63l-.06.05-.05,0-1,.62Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M166.78,63.09a4.32,4.32,0,0,1-1,.62Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M167,63l-.12.07.1-.09Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M166.89,63l-.06.05-.05,0-1,.62Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M172.09,71.72,150.82,85.1h0l19.49-12.65h0A4.84,4.84,0,0,1,172.09,71.72Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M177,68.61a4.32,4.32,0,0,1-1,.62Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M177.18,68.51l-.12.07.1-.09Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <polygon
      points="59.8 66.23 59.81 66.24 58.29 67.21 59.8 66.23"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></polygon>
    <path
      d="M172.09,71.72,150.82,85.1h0l19.49-12.65h0A4.84,4.84,0,0,1,172.09,71.72Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M176.32,80.7a4.32,4.32,0,0,1-1,.62Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M176.49,80.6l-.12.07.1-.09Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M173.11,71.61a4.31,4.31,0,0,0-1,.11L150.82,85.1h0l19.49-12.65h0a4.84,4.84,0,0,1,1.8-.74L176,69.23l1-.62.05,0,.1-.09a5.06,5.06,0,0,0,1.76-3.85,5.12,5.12,0,0,0-5.12-5.12,5.06,5.06,0,0,0-2.82.85h0L166.89,63l-.06.05-.05,0-1,.62,1.08-.7,0,0a5.06,5.06,0,0,0,1.76-3.85A5.12,5.12,0,0,0,163.57,54a5.06,5.06,0,0,0-2.82.85h0l-13.2,8.56h0c-.71.42-23.7,14.1-25.12,13.75S125.07,59,125.07,59s-.27-7.08-5.91-6.48-5.64,9-5.64,9-16.29,40.18,3.12,52c21.6,13.11,55.82-18.36,55.82-18.36l0,0,.1-.09a5.06,5.06,0,0,0,1.76-3.85,5.12,5.12,0,0,0-5.12-5.12,5.05,5.05,0,0,0-2.44.62l8.54-5.37,1-.62.05,0,.1-.09a5.06,5.06,0,0,0,1.76-3.85A5.12,5.12,0,0,0,173.11,71.61Zm-25.89,3.8,18.46-11.62-18.47,12Zm17.69,12.48,1.51-1h0Z"
      transform="translate(-106.62 -20.68)"
      fill="#f7ffbb"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <polygon
      points="59.81 66.24 44.98 75.7 59.8 66.23 59.81 66.24"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></polygon>
    <path
      d="M172.46,95.16a4.32,4.32,0,0,1-1,.62Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M172.63,95.06l-.12.07.1-.09Z"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M166.63,51.07"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M166.63,51.07,175,45.61h0a5.06,5.06,0,0,1,2.82-.85A5.12,5.12,0,0,1,183,49.89a5.06,5.06,0,0,1-1.76,3.85s0,0,0,0h0s0,0,0,0l0,0-1,.62-.13.08-.09.06-2.95,1.85"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M177,56.5l2.9-1.88.09-.06.13-.08,1.06-.69h0l4.08-2.65h0a5.06,5.06,0,0,1,2.82-.85,5.12,5.12,0,0,1,5.12,5.12,5.06,5.06,0,0,1-1.76,3.85l-.1.09-.05,0-1,.62-4,2.49-3.53,2.22-.16-.27"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M182.86,64.71l-.16-.27,1.88-1.22h0a4.84,4.84,0,0,1,1.8-.74,4.31,4.31,0,0,1,1-.11,5.12,5.12,0,0,1,5.12,5.12,5.06,5.06,0,0,1-1.76,3.85l-.1.09,0,0-1,.62L182,76.93"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M181.93,77.1A5.13,5.13,0,0,1,188.67,82a5.06,5.06,0,0,1-1.76,3.85l-.1.09-.05,0-1,.62L180.34,90"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M179.21,78.66"
      transform="translate(-106.62 -20.68)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
    ></path>
    <path
      d="M155.83,47c11.75-7.88,12.89-14.51,12.89-14.51s1.2-11.91-5.19-11.84c-5.37.06-8,5.6-8,5.6S151,17.46,145.26,22s-1.44,12.78-1.44,12.78,7.15,10,11.2,11.75Z"
      transform="translate(-106.62 -20.68)"
      fill="#ff004f"
    ></path>
    <line
      x1="25.86"
      y1="3.08"
      x2="29.46"
      y2="6.56"
      stroke="#4853bc"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
    <line
      x1="29.46"
      y1="12.2"
      x2="25.86"
      y2="16.16"
      fill="none"
      stroke="#8fe2d8"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
    <line
      x1="71.82"
      y1="3.08"
      x2="68.58"
      y2="6.56"
      stroke="#82ad9f"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
    <line
      x1="72.59"
      y1="16.16"
      x2="68.58"
      y2="12.2"
      fill="#a3e260"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
    <line
      x1="8.46"
      y1="12.2"
      x2="8.46"
      y2="18.92"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
    <line
      x1="4.05"
      y1="15.56"
      x2="12.63"
      y2="15.56"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
    <circle
      cx="31.71"
      cy="35.09"
      r="3.18"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></circle>
    <line
      x1="96.42"
      y1="49.55"
      x2="96.42"
      y2="56.27"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
    <line
      x1="92.01"
      y1="52.91"
      x2="100.59"
      y2="52.91"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-miterlimit="10"
    ></line>
  </svg>
</template>

<script>
export default {
  props: ["name"]
};
</script>
