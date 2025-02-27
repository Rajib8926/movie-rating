import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true; // Add 'xxs' as a valid breakpoint
    xs: true;
    sm: true;
    lsm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      lsm: 800,
      md: 1000,
      lg: 1200,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      light: "#a2aab8",
      main: "#a2aab8",
      dark: "#a2aab8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffff",
    },
  },
});
