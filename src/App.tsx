import { RouterProvider } from "react-router";
import { router } from "./router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./them";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
