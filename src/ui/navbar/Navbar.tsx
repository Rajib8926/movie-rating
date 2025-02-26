import { Box, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegBookmark,
  FaTv,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdCatchingPokemon, MdMovie } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import { Turn as Hamburger } from "hamburger-react";
import {
  NavigateFunction,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router";
import TemporaryDrawer from "../../element/Drawer";

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

const MotionBox = motion(Box);
export default function Navbar() {
  const [navCurrentLocation, setNavCurrentLocation] = useState<number>(1);
  const parentRef = useRef<HTMLDivElement>();
  // const childRef = useRef<HTMLDivElement>();
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
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  useEffect(
    function () {
      assignLocation();
    },
    [location]
  );
  const navigate: NavigateFunction = useNavigate();
  return (
    <Box
      sx={{
        width: { xl: "16%", md: "20%" },
        background: "#ffffff16",
        borderRadius: "10px",
        flexFlow: { md: "column" },
        display: { md: "flex", xxs: "flex" },
        alignItems: "center",
        gap: { md: "110px" },
        paddingTop: { md: "100px" },
        padding: { md: "", xxs: "5px 10px" },
        position: "relative",
        justifyContent: { md: "flex-start", xxs: "space-between" },
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{
          height: { md: "110px", xxs: "60px" },
          width: { md: "110px", xxs: "60px" },
          bgcolor: "#ffffff16",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <MdMovie fontSize={"30px"} color="#d8a900" />
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
          display: { md: "flex", xxs: "none" },
          gap: { lg: "12px", md: "8px" },
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
}
