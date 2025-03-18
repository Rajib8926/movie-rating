import { Box } from "@mui/material";
import ContentSection from "../../element/ContentSection";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "60px",
        display: { md: "none", xxs: "flex" },
        alignItems: "end",
        paddingLeft: "1rem",
        background: "#3d3f51",
        paddingBottom: ".5rem",
        marginTop: "30px",
      }}
    >
      <ContentSection />
    </Box>
  );
}
