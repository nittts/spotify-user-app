import React from "react";
import { ThemeProvider } from "styled-components";

export const baseTheme = {
  colors: {
    accent: "#1db954",
    dark_1: "#212121",
    dark_2: "#121212",
    gray_1: "#535353",
    gray_2: "#b3b3b3",
  },
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    half: "50%",
    quarter: "25%",
    oneFifth: "20%",
    tenth: "10%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
};

export interface ITheme {
  [key: string]: any;
}

interface IProvider {
  children: React.ReactNode;
}

const Theme = ({ children }: IProvider) => <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;

export default Theme;
