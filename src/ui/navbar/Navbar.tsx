import { Box, Typography, styled } from "@mui/material";

import { useRef, useState } from "react";
import { FaRegBookmark, FaTv } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdCatchingPokemon, MdMovie } from "react-icons/md";
import { Turn as Hamburger } from "hamburger-react";
import {
  NavigateFunction,
  NavLink,
 
  useNavigate,
} from "react-router";
import TemporaryDrawer from "../../element/Drawer";
import ContentSection from "../../element/ContentSection";

const StyledNavLink = styled(NavLink)({
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
  "&:hover":{
    color:"#d8a900"
  },
  "&.active": {
    color: "#d8a900",
    background:"#d8a90029",
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
});


export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
 
  const navigate: NavigateFunction = useNavigate();
  const webLogoSize = window.innerWidth > 1000 ? "36" : "26";

  return (
    <Box
      sx={{
        width: { xl: "16%", md: "20%" },
        background: "#ffffff16",
        borderRadius: "10px",
        flexFlow: { md: "column" },
        display: { md: "flex", xxs: "flex" },
        alignItems: "center",
        padding: { md: "50px 0 20px", xxs: "5px 10px" },
        position: "relative",
        justifyContent: { md: "space-around", xxs: "space-between" },
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{
          height: { md: "110px", xxs: "50px" },
          width: { md: "110px", xxs: "50px" },
          bgcolor: "#ffffff16",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <MdMovie fontSize={`${webLogoSize}px`} color="#d8a900" />
      </Box>
      <Box sx={{ display: { md: "none", xxs: "block" } }}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </Box>
      <TemporaryDrawer open={isOpen} toggleDrawer={toggleDrawer} />
      <Box
        ref={parentRef}
        sx={{
          display: { md: "flex", xxs: "none" },
          flexFlow: "column",
          alignItems: "center",
          width: "100%",
          flex:"1",
          justifyContent:"space-around",
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
          <Box >
            <StyledNavLink to={"/"} className={({ isActive }) => isActive ? "active" : ""}>
              <IoHome fontSize={"20px"} />
              <Typography sx={{ fontSize: "18px" }}>Home</Typography>
            </StyledNavLink>
          </Box>
          <Box >
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
          <Box >
            <StyledNavLink to={"/tvSeries"} className={({ isActive }) => isActive ? "active" : ""}>
              <FaTv fontSize={"20px"} />
              <Typography sx={{ fontSize: "18px" }}>Tv series</Typography>
            </StyledNavLink>
          </Box>
        </Box>
        <Box sx={{ width: "94%", zIndex: "0" }} >
          <StyledNavLink to={"/bookmark"} className={({ isActive }) => isActive ? "active" : ""}>
            <FaRegBookmark fontSize={"20px"} />{" "}
            <Typography sx={{ fontSize: "18px" }}>Bookmark</Typography>
          </StyledNavLink>
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "block", xxs: "none" },
          // position: "absolute",
          bottom: "20px",
        }}
      >
        <ContentSection />
      </Box>
    </Box>
  );
}
