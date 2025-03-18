import { Box } from "@mui/material";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiUpwork } from "react-icons/si";
const aTagStyle = {
  color: "#B7B7B8",
  fontSize: "19px",
};
export default function ContentSection() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { lg: "12px", xxs: "8px" },
      }}
    >
      <a
        href="https://www.linkedin.com/in/rajib-roy-888087304/"
        style={aTagStyle}
        target="blank"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/Rajib8926" style={aTagStyle} target="blank">
        <FaGithub />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01c4288e84ba0becad"
        style={aTagStyle}
        target="blank"
      >
        <SiUpwork />
      </a>
      <a href="mailto:rajibroy89265@gmail.com" target="blank" style={aTagStyle}>
        <IoIosMail />
      </a>
      <a
        href="https://www.instagram.com/rajibroy8926/"
        style={aTagStyle}
        target="blank"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100049178316585"
        style={aTagStyle}
        target="blank"
      >
        <FaFacebook />
      </a>
    </Box>
  );
}
