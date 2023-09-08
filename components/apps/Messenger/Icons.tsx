import { memo } from "react";

export const Avatar = memo(() => (
  <svg
    style={{ backgroundColor: "#cacdd2" }}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M256 281.602c-151.55 0-204.8 76.796-204.8 128v76.796h409.6v-76.796c0-51.204-53.25-128-204.8-128ZM371.2 140.8c0 63.622-51.575 115.2-115.2 115.2s-115.2-51.578-115.2-115.2c0-63.624 51.575-115.198 115.2-115.198S371.2 77.176 371.2 140.8Zm0 0"
      fill="#fff"
      transform="translate(0, 50)"
    />
  </svg>
));

export const Write = memo(() => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.1 2.9c-1.1-1.1-3-1.1-4.2 0l-8.1 7.9c-.7.7-1.2 1.6-1.4 2.6L7 15.6c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l2.2-.4c1-.2 1.9-.7 2.6-1.4l8.1-8c.6-.5.9-1.3.9-2.1s-.3-1.5-.9-2zm-9.4 10.6c-.4.4-1 .7-1.6.8l-.8.2.2-.7c.1-.6.4-1.1.9-1.6l6.2-6.1L18 7.4l-6.3 6.1zm8-7.9-.4.4-1.4-1.3.4-.4c.2-.2.5-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.6 0 .2 0 .5-.3.7z" />
    <path d="M20 9.9c-.6 0-1 .4-1 1V16c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h5c.6 0 1-.4 1-1s-.4-1-1-1H8C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5v-5.1c0-.5-.4-1-1-1z" />
  </svg>
));

export const Send = memo(() => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m16.692 12.474-13.186.786c-.314 0-.47.157-.47.314l-1.884 6.441c-.314.786-.162 1.875.627 2.505.631.47 1.727.58 2.355.323l17.58-8.798c.942-.47 1.413-1.413 1.256-2.356a2.496 2.496 0 0 0-1.255-1.571L4.134 1.163c-.785-.263-1.727-.157-2.355.315-.784.628-.941 1.57-.627 2.513l1.883 6.441c0 .157.314.314.471.314l13.186.786s.47 0 .47.471-.47.471-.47.471Z" />
  </svg>
));

export const Back = memo(() => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M244 400 100 256l144-144M120 256h292"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "50px",
      }}
    />
  </svg>
));