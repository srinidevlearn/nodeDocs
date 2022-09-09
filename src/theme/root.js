import React from "react";
import { ThemeProvider,createTheme,createPalette} from "@mui/material/styles";
import App from "../components/App";

export const themeOptions = {
  palette: {
    primary: {
      main: '#2e8555',
      dark: '#2e8555',
      light: '#2e8555',

    },
    secondary: {
      main: '#30927d',
      dark: '#2e8555',
      light: '#2e8555',

    },

  },
};
export const theme = createTheme(themeOptions);
export default function Root({ children }) {
    return (
        <>
          <ThemeProvider theme={theme}>
            <App children={children}></App>
          </ThemeProvider>
        </>
      )
}