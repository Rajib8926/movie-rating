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
          height: "100vh",
          padding: "12px",
          gap: "12px",
          background: "#1c1e2f",
        }}
      >
        <Navbar />
        <Box
          sx={{
            borderRadius: "10px",
            // flexGrow: "1",
            width: "85%",
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
