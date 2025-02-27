import { Outlet } from "react-router";

import Navbar from "./navbar/Navbar";
import { Box } from "@mui/material";
import PostProvider from "../PostProvider";

export default function AppLayout() {
  return (
    <PostProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xxs: "column" },
          height: "100vh",
          padding: { sm: "12px", xxs: "7px" },
          gap: { sm: "12px", xxs: "7px" },
          background: "#1c1e2f",
        }}
      >
        <Navbar />
        <Box
          sx={{
            borderRadius: "10px",
            // flexGrow: "1",

            width: { xl: "85%", md: "80%", xxs: "100%" },
            height:"100%",
            background: "#ffffff16",
            overflow: "scroll",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </PostProvider>
  );
}
