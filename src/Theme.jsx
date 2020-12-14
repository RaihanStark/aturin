import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgDark: "#1F1D2B",
    lightDark: "#252836",
    green: "#23B17E",
    purple: "#B548C6",
    orange: "#FFBF47",
  },
  sizes: {
    borderRadius: "20px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
