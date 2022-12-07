import { components } from "./components"
import { globalStyles } from "./global-styles"
import { layerStyles } from "./layer-styles"
import { textStyles } from "./text-styles"
import { extendTheme } from "@chakra-ui/react"
// import "focus-visible/dist/focus-visible"
import { theme as proTheme } from "@chakra-ui/pro-theme"
// import "@fontsource/dm-sans"

const theme = {
  // fonts: {
  //   heading: "'DM Sans', sans-serif",
  //   body: "'DM Sans', sans-serif",
  // },
  colors: {
    dark: "#1b1f21",
    yellow: "#dcff1c",
    mirror: {
      base: "#dcff1c",
      50: "#faffdb",
      100: "#f2ffae",
      200: "#ebff7d",
      300: "#e3ff4b",
      400: "#dcff1a",
      500: "#c2e600",
      600: "#97b300",
      700: "#6b8000",
      800: "#404d00",
      900: "#151b00",
    },
    green: {
      50: "#EBFFFA",
      100: "#D1FFF4",
      200: "#A1FFE9",
      300: "#5FFFD9",
      400: "#00FFC2",
      500: "#00E4AE",
      600: "#00C294",
      700: "#009B75",
      800: "#007559",
      900: "#004D3A",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#FF6A6A",
      500: "#FF4747",
      600: "#C90000",
      700: "#980000",
      800: "#770000",
      900: "#590005",
    },
    orange: {
      50: "#FFF6ED",
      100: "#FFE7D0",
      200: "#FFD2A9",
      300: "#FFB36D",
      400: "#FFA048",
      500: "#FF891C",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    fontColor: {
      base: "rgb(255, 255, 255)",
      4: "rgba(255, 255, 255, 0.04)",
      6: "rgba(255, 255, 255, 0.06)",
      8: "rgba(255, 255, 255, 0.08)",
      16: "rgba(255, 255, 255, 0.16)",
      24: "rgba(255, 255, 255, 0.24)",
      36: "rgba(255, 255, 255, 0.36)",
      48: "rgba(255, 255, 255, 0.48)",
      64: "rgba(255, 255, 255, 0.64)",
      80: "rgba(255, 255, 255, 0.8)",
      92: "rgba(255, 255, 255, 0.92)",
    },
  },
  // config: {
  //   useSystemColorMode: false,
  //   initialColorMode: "light" as ColorMode,
  // },
  styles: {
    global: globalStyles,
  },

  // layerStyles,
  // textStyles,
  // components,
}

type ColorMode = "light"
export default extendTheme(proTheme, theme)
