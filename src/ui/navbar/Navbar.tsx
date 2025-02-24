import { Box, Typography } from "@mui/material";
import { FaRegBookmark, FaTv } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdCatchingPokemon, MdMovie } from "react-icons/md";
import { NavigateFunction, NavLink, useNavigate } from "react-router";

const navLinkStyle = {
  color: "#B7B7B8",
  textDecoration: "none",
  // border: "1px solid",
  height: "50px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "0 20px",
  borderRadius: "5px",
  zIndex: "2",
};

export default function Navbar() {
  const navigate: NavigateFunction = useNavigate();
  return (
    <Box
      sx={{
        width: "16%",
        background: "#ffffff16",
        borderRadius: "10px",
        flexFlow: "column",
        display: "flex",
        alignItems: "center",
        gap: "110px",
        paddingTop: "100px",
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{
          height: "110px",
          width: "110px",
          bgcolor: "#ffffff16",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <MdMovie fontSize={"40px"} color="#d8a900" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          width: "100%",
          gap: "110px",
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
          <NavLink to={"/"} style={navLinkStyle}>
            <IoHome fontSize={"20px"} />
            <Typography sx={{ fontSize: "18px" }}>Home</Typography>
          </NavLink>
          <NavLink to={"/movie"} style={navLinkStyle}>
            <MdMovie fontSize={"22px"} />{" "}
            <Typography sx={{ fontSize: "18px" }}>Movies</Typography>
          </NavLink>
          <NavLink to={"/anime"} style={navLinkStyle}>
            <MdCatchingPokemon fontSize={"22px"} />{" "}
            <Typography sx={{ fontSize: "18px" }}>Anime</Typography>
          </NavLink>

          <NavLink to={"/tvSeries"} style={navLinkStyle}>
            <FaTv fontSize={"20px"} />
            <Typography sx={{ fontSize: "18px" }}>Tv series</Typography>
          </NavLink>
        </Box>
        <Box sx={{ width: "94%" }}>
          <NavLink to={"/bookmark"} style={navLinkStyle}>
            <FaRegBookmark fontSize={"20px"} />{" "}
            <Typography sx={{ fontSize: "18px" }}>Bookmark</Typography>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
