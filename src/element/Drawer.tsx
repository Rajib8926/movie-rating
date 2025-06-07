import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography, styled } from "@mui/material";
import { MdCatchingPokemon, MdMovie } from "react-icons/md";
import { NavLink } from "react-router";
import { IoHome } from "react-icons/io5";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegBookmark,
  FaTv,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

interface drawerType {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

const StyledNavLink = styled(NavLink)(() => ({
  color: "#B7B7B8",
  textDecoration: "none",
  height: "50px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "0 20px",
  borderRadius: "5px",
  zIndex: 2,
  position: "relative",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#d8a900"
  },
  "&.active": {
    color: "#d8a900",
    background: "#d8a90029",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "4px",
      height: "70%",
      backgroundColor: "#d8a900",
      borderRadius: "0 4px 4px 0",
      animation: "slideIn 0.3s ease forwards"
    }
  }
}));

const aTagStyle = {
  color: "#B7B7B8",
  fontSize: "19px",
};

export default function TemporaryDrawer({ open, toggleDrawer }: drawerType) {
  const DrawerList = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10vh",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          height: { md: "110px", xxs: "60px" },
          width: { md: "110px", xxs: "60px" },
          bgcolor: "#ffffff16",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          marginTop: "10vh",
        }}
      >
        <MdMovie fontSize={"30px"} color="#d8a900" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          width: "100%",
          gap: "110px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "94%",
            gap: "10px",
            position: "relative",
          }}
        >
          <Box>
            <StyledNavLink to={"/"} className={({ isActive }) => isActive ? "active" : ""}>
              <IoHome fontSize={"20px"} />
              <Typography sx={{ fontSize: "18px" }}>Home</Typography>
            </StyledNavLink>
          </Box>
          <Box>
            <StyledNavLink to={"/movie"} className={({ isActive }) => isActive ? "active" : ""}>
              <MdMovie fontSize={"22px"} />{" "}
              <Typography sx={{ fontSize: "18px" }}>Movies</Typography>
            </StyledNavLink>
          </Box>
          <Box>
            <StyledNavLink to={"/anime"} className={({ isActive }) => isActive ? "active" : ""}>
              <MdCatchingPokemon fontSize={"22px"} />{" "}
              <Typography sx={{ fontSize: "18px" }}>Anime</Typography>
            </StyledNavLink>
          </Box>
          <Box>
            <StyledNavLink to={"/tvSeries"} className={({ isActive }) => isActive ? "active" : ""}>
              <FaTv fontSize={"20px"} />
              <Typography sx={{ fontSize: "18px" }}>Tv series</Typography>
            </StyledNavLink>
          </Box>
        </Box>
        <Box sx={{ width: "94%", zIndex: "0" }}>
          <StyledNavLink to={"/bookmark"} className={({ isActive }) => isActive ? "active" : ""}>
            <FaRegBookmark fontSize={"20px"} />{" "}
            <Typography sx={{ fontSize: "18px" }}>Bookmark</Typography>
          </StyledNavLink>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          display: "flex",
          gap: "15px",
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
        <a
          href="mailto:rajibroy89265@gmail.com"
          target="blank"
          style={aTagStyle}
        >
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
    </Box>
  );

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        "& .css-1krrxmk ": {
          width: { sm: "50%", xxs: "80%" },
          background: "#00000011",
          backdropFilter: "blur(15px)",
        },
        "& .css-4nmryk-MuiBackdrop-root-MuiModal-backdrop": {
          backdropFilter: "blur(1px)",
          background: "transparent",
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
