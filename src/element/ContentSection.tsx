import { Box, styled } from "@mui/material";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiUpwork } from "react-icons/si";

const StyledLink = styled("a")({
  color: "white",
  fontSize: "19px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#d8a900",
  },
});

export default function ContentSection() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { lg: "12px", xxs: "8px" },
      }}
    >
      <StyledLink
        href="https://www.linkedin.com/in/rajib-roy-888087304/"
        target="blank"
      >
        <FaLinkedinIn />
      </StyledLink>
      <StyledLink href="https://github.com/Rajib8926" target="blank">
        <FaGithub />
      </StyledLink>
      <StyledLink
        href="https://www.upwork.com/freelancers/~01c4288e84ba0becad"
        target="blank"
      >
        <SiUpwork />
      </StyledLink>
      <StyledLink href="mailto:rajibroy89265@gmail.com" target="blank">
        <IoIosMail />
      </StyledLink>
      <StyledLink href="https://www.instagram.com/rajibroy8926/" target="blank">
        <FaInstagram />
      </StyledLink>
      <StyledLink
        href="https://www.facebook.com/profile.php?id=100049178316585"
        target="blank"
      >
        <FaFacebook />
      </StyledLink>
    </Box>
  );
}
