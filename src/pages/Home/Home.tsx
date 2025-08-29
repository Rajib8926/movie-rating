import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "../../element/SearchBar";
import { usePosts } from "../../PostProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { mediaType } from "../media/Media";
import { FaStar } from "react-icons/fa";
import ImageSlider from "../../element/imageSlider/ImageSlider";
import Loading from "../../element/Loading";

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
export default function Home() {
  const { searchTopEntertainments, topMedia } = usePosts();
  useEffect(
    function () {
      // setTopMedia(null);
      searchTopEntertainments(topMovieWebSeries, "");
    },
    [topMovieWebSeries]
  );

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        padding: { lg: "15px", xxs: "7px" },
      }}
    >
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
        {topMedia ? (
          <>
            <Box
              sx={{
                width: { lg: "95%", xxs: "100%" },
                height: {
                  lg: "430px",
                  md: "320px",
                  lsm: "320px",
                  sm: "300px",
                  xs: "230px",
                  xxs: "180px",
                },
                marginTop: { sm: "40px", xxs: "15px" },
              }}
            >
              <ImageSlider />
            </Box>
            <Box
              sx={{
                width: { lg: "96%", md: "98%" },
                marginTop: { lg: "80px", xxs: "30px" },
              }}
            >
              <Box sx={{ marginBottom: { sm: "30px", xxs: "15px" } }}>
                <Typography
                  sx={{
                    fontSize: { lsm: "18px", sm: "17px", xxs: "15px" },
                    fontWeight: { sm: "400", xxs: "600" },
                  }}
                >
                  Movie and web series suggestion
                </Typography>
              </Box>
              <Grid
                container
                rowGap={2}
                sx={{ marginTop: { md: "50px", xxs: "30px" } }}
              >
                {topMedia?.map((data) => (
                  <MovieWebItem data={data} />
                ))}
              </Grid>
            </Box>
          </>
        ) : (
          <Loading />
        )}
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
    <Grid item xl={3} md={4} sm={4} xxs={6} sx={{ justifyItems: "center" }}>
      <Box
        onClick={() => mediaClickFn(data.imdbID)}
        sx={{
          background: `url(${data.Poster})`,
          position: "relative",
          width: { lg: "250px", lsm: "200px", sm: "180px", xxs: "90%" },
          height: {
            lg: "370px",
            lsm: "296px",
            sm: "266px",
            xs: "270px",
            xxs: "250px",
          },
          backgroundSize: "cover",
          borderRadius: "7px",
          cursor: "pointer",
          overflow: "hidden",
          // "&::after": {
          //   content: '""',
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   width: "100%",
          //   height: "100%",
          //   background:
          //     "linear-gradient(to right, rgba(0, 0, 0, 0.904),rgba(0, 0, 0, 0.363), rgba(0, 0, 0, 0.897))",
          //   zIndex: 0,
          // },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            padding: "15px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100px",
              bottom: "50px",
              transform: "rotate(32deg)",
              boxShadow: "0 0 100px 50px black",
            }}
          ></Box>
          <Box sx={{ zIndex: "1" }}>
            <Box sx={{ display: "flex", gap: "3px" }}>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "600", color: "aliceblue" }}
              >
                IMDB
              </Typography>
              <Typography
                sx={{ fontSize: "15px", fontWeight: "600", color: "aliceblue" }}
              >
                Rating
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <FaStar color="#fde03c" />
                <Box sx={{ display: "flex" }}>
                  <Typography
                    fontSize={"15px"}
                    fontWeight={"600"}
                    sx={{ color: "aliceblue" }}
                  >
                    {data.imdbRating}/
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    fontWeight={"600"}
                    sx={{ color: "aliceblue" }}
                  >
                    10
                  </Typography>
                </Box>
              </Box>
              <Typography fontSize={"10px"} sx={{ color: "aliceblue" }}>
                {data.imdbVotes}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "600", color: "aliceblue" }}
              >
                {data.Year}
              </Typography>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "aliceblue",
                }}
              ></Box>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "600", color: "aliceblue" }}
              >
                {data.Rated}
              </Typography>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "aliceblue",
                }}
              ></Box>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "600", color: "aliceblue" }}
              >
                {data.Runtime}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
