import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true; // Add 'xxs' as a valid breakpoint
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400, // Extra-small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 1000, // Medium devices (desktops)
      lg: 1200, // Large devices (large desktops)
      xl: 1600, // Extra-large devices
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
