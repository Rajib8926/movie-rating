import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { styled, Typography } from "@mui/material";
import { MdCatchingPokemon, MdMovie } from "react-icons/md";
import { NavLink, useLocation } from "react-router";
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
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
interface drawerType {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

const navLinkStyle = {
  color: "#B7B7B8",
  textDecoration: "none",
  height: "50px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "0 20px",
  borderRadius: "5px",
  zIndex: "2",
};

const aTagStyle = {
  color: "#B7B7B8",
  fontSize: "19px",
};
const CustomDrawer = styled(Drawer)(() => ({
  // [theme.breakpoints.up("sm")]: {
  //   ".css-cyqh1t-MuiPaper-root-MuiDrawer-paper": {
  //     width: "50%",
  //     background: "#0000004e",
  //     backdropFilter: "blur(15px)",
  //   },
  // },
  // [theme.breakpoints.down("sm")]: {
  //   ".css-cyqh1t-MuiPaper-root-MuiDrawer-paper": {
  //     width: "80%",
  //     background: "#0000004e",
  //     backdropFilter: "blur(15px)",
  //   },
  // },
  // ".css-4nmryk-MuiBackdrop-root-MuiModal-backdrop": {
  //   backdropFilter: "blur(1px)",
  //   background: "#0000001a",
  // },
}));
const MotionBox = motion(Box);
export default function TemporaryDrawer({ open, toggleDrawer }: drawerType) {
  const [navCurrentLocation, setNavCurrentLocation] = useState<number>(1);
  const parentRef = useRef<HTMLDivElement>();
  const homeRef = useRef<HTMLDivElement | undefined>();
  const tvRef = useRef<HTMLDivElement>();
  const movieRef = useRef<HTMLDivElement>();
  const animeRef = useRef<HTMLDivElement>();
  const bookmarkRef = useRef<HTMLDivElement>();

  const getPositionRelativeToParent = (
    current: React.MutableRefObject<HTMLDivElement | undefined>
  ) => {
    const parentElement = parentRef.current;
    const childElement = current.current;
    if (parentElement && childElement) {
      const parentRect = parentElement.getBoundingClientRect();
      const childRect = childElement.getBoundingClientRect();

      // navCurrentLocation = childRect.top - parentRect.top;
      setNavCurrentLocation(childRect.top - parentRect.top);
      console.log(navCurrentLocation);
    }
  };
  const location = useLocation();
  function assignLocation() {
    if (location.pathname == "/") {
      getPositionRelativeToParent(homeRef);
    } else if (location.pathname == "/movie") {
      getPositionRelativeToParent(movieRef);
    } else if (location.pathname == "/anime") {
      getPositionRelativeToParent(animeRef);
    } else if (location.pathname == "/tvSeries") {
      getPositionRelativeToParent(tvRef);
    } else if (location.pathname == "/bookmark") {
      getPositionRelativeToParent(bookmarkRef);
    }
  }

  useEffect(
    function () {
      assignLocation();
    },
    [location]
  );
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
        // onClick={() => navigate("/")}
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
        ref={parentRef}
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          width: "100%",
          gap: "110px",
          position: "relative",
        }}
      >
        <MotionBox
          animate={{ top: `${navCurrentLocation}px` }}
          sx={{
            position: "absolute",
            height: "50px",
            top: "0",
            width: "94%",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px 2px#4c5279",
          }}
        ></MotionBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "94%",
            gap: "10px",
            position: "relative",
          }}
        >
          <Box ref={homeRef}>
            <NavLink to={"/"} style={navLinkStyle}>
              <IoHome fontSize={"20px"} />
              <Typography sx={{ fontSize: "18px" }}>Home</Typography>
            </NavLink>
          </Box>
          <Box ref={movieRef}>
            <NavLink to={"/movie"} style={navLinkStyle}>
              <MdMovie fontSize={"22px"} />{" "}
              <Typography sx={{ fontSize: "18px" }}>Movies</Typography>
            </NavLink>
          </Box>
          <Box ref={animeRef}>
            <NavLink to={"/anime"} style={navLinkStyle}>
              <MdCatchingPokemon fontSize={"22px"} />{" "}
              <Typography sx={{ fontSize: "18px" }}>Anime</Typography>
            </NavLink>
          </Box>
          <Box ref={tvRef}>
            <NavLink to={"/tvSeries"} style={navLinkStyle}>
              <FaTv fontSize={"20px"} />
              <Typography sx={{ fontSize: "18px" }}>Tv series</Typography>
            </NavLink>
          </Box>
        </Box>
        <Box sx={{ width: "94%", zIndex: "0" }} ref={bookmarkRef}>
          <NavLink to={"/bookmark"} style={navLinkStyle}>
            <FaRegBookmark fontSize={"20px"} />{" "}
            <Typography sx={{ fontSize: "18px" }}>Bookmark</Typography>
          </NavLink>
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
    <CustomDrawer
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        "& .css-1krrxmk ": {
          width: { sm: "50%", xxs: "80%" },
          background: "#00000024",
          backdropFilter: "blur(15px)",
        },
        "& .css-4nmryk-MuiBackdrop-root-MuiModal-backdrop": {
          backdropFilter: "blur(1px)",
          background: "#00000014",
        },
      }}
    >
      {DrawerList}
    </CustomDrawer>
  );
}
