import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import { theme } from "@dataware-tools/app-common";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseConfig from "@dataware-tools/dev-tools-for-react/configs/.storybook/preview"

export const parameters = {
  ...baseConfig.parameters
};

export const decorators = [
  (Story, context) => {
    return (
      <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer position="bottom-right" />
            <Story {...context} />
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  },
];
