import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "../../element/SearchBar";
import { usePosts } from "../../PostProvider";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { mediaType } from "../media/Media";
import { FaStar } from "react-icons/fa";
import ImageSlider from "../../element/imageSlider/ImageSlider";

const topMovieWebSeries = [
  "tt0111161", // The Shawshank Redemption
  "tt0068646", // The Godfather
  "tt0903747", // Breaking Bad
  "tt0944947", // Game of Thrones
  "tt1375666", // Inception
  "tt0468569", // The Dark Knight
  "tt0816692", // Interstellar
  "tt4574334", // Stranger Things
  "tt5180504", // The Witcher
  "tt0386676", // The Office (US)
  "tt0108778", // Friends
  "tt0167260", // The Lord of the Rings: The Return of the King
  "tt4154796", // Avengers: Endgame
  "tt6468322", // Money Heist
  "tt10919420", // Squid Game
  "tt2442560", // Peaky Blinders
  "tt0137523", // Fight Club
  "tt0133093", // The Matrix
  "tt1475582", // Sherlock
  "tt8111088", // The Mandalorian
];
interface dataType {
  data: mediaType;
}
const MotionBox = motion(Box);
export default function Home() {
  const { testValue, searchTopEntertainments, topMedia } = usePosts();
  useEffect(function () {
    // setTopMedia(null);
    searchTopEntertainments(topMovieWebSeries);
  }, []);
  console.log(testValue);

  return (
    <Box sx={{ backgroundColor: "transparent", padding: "15px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <SearchBar />
        <Box
          sx={{
            width: "95%",
            height: "590px",
            marginTop: "40px",
          }}
        >
          <ImageSlider />
        </Box>
        <Box sx={{ width: "96%", marginTop: "50px" }}>
          <Box sx={{ marginBottom: "30px" }}>
            <Typography sx={{ fontSize: "22px" }}>
              Movie and web series suggestion
            </Typography>
          </Box>
          <Grid container rowGap={4}>
            {topMedia?.map((data) => (
              <MovieWebItem data={data} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

function MovieWebItem({ data }: dataType) {
  const navigate = useNavigate();
  function mediaClickFn(id: string) {
    navigate(`/media/${id}`);
  }

  return (
    <Grid item xs={3} sx={{ justifyItems: "center" }}>
      <Box
        onClick={() => mediaClickFn(data.imdbID)}
        sx={{
          background: `url(${data.Poster})`,
          width: "250px",
          height: "370px",
          backgroundSize: "cover",
          borderRadius: "7px",
          cursor: "pointer",
        }}
      >
        <MotionBox
          whileHover={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.932),rgba(0, 0, 0, 0.212), rgba(0, 0, 0, 0.938))",
          }}
          sx={{
            width: "100%",
            height: "100%",
            // background: "#02020252",
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.726),rgba(0, 0, 0, 0.068), rgba(0, 0, 0, 0.897))",
            backdropFilter: "blur(1px)",
            borderRadius: "7px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
              {data.Title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                {data.Year}
              </Typography>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#B7B7B8",
                }}
              ></Box>
              <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                {data.Rated}
              </Typography>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#B7B7B8",
                }}
              ></Box>
              <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                {data.Runtime}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: "3px" }}>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "600", color: "#fde03c" }}
              >
                IMDB
              </Typography>
              <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
                Rating
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <FaStar color="#fde03c" />
                <Box sx={{ display: "flex" }}>
                  <Typography fontSize={"15px"} fontWeight={"600"}>
                    {data.imdbRating}/
                  </Typography>
                  <Typography fontSize={"15px"} fontWeight={"600"}>
                    10
                  </Typography>
                </Box>
              </Box>
              <Typography fontSize={"10px"}>{data.imdbVotes}</Typography>
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </Grid>
  );
}
