import { Box } from "@mui/material";
import ContentSection from "../../element/ContentSection";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        alignItems: "end",
        paddingLeft: "1rem",
        paddingBottom: ".5rem",
      }}
    >
      <ContentSection />
    </Box>
  );
}
