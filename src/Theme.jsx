import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgDark: "#1F1D2B",
    lightDark: "#252836",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
