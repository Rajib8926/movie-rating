import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/pagination-element.css";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { mediaType } from "../../pages/media/Media";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import Loading from "../Loading";
const imgSliderMovies = [
  "tt10078772",
  "tt26625693",
  "tt5822536",
  "tt13654226",
  "tt27714946",
  "tt10648342",
  "tt14513804",
];

export default function ImageSlider() {
  const [imgSliderMov, setImgSliderMov] = useState<mediaType[] | null>(null);
  const navigate = useNavigate();
  function mediaClickFn(id: string) {
    navigate(`/media/${id}`);
  }
  function searchTopEntertainments(dataList: string[]) {
    

    const dataArr = dataList.map(async (mediaId) => {
      let returnVal;
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${mediaId}&apikey=c892d3a9`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();

        returnVal = data;
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
      return returnVal;
    });

    
    
    Promise.all(dataArr).then((value) => setImgSliderMov(value));
  }
  useEffect(function () {
    searchTopEntertainments(imgSliderMovies);
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {imgSliderMov ? (
          imgSliderMov?.map((data) => (
            <SwiperSlide>
              <Box
                onClick={() => mediaClickFn(data.imdbID)}
                sx={{
                  backgroundImage: `url(${data.imdbID}.jpg)`,
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  // background: "red",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backdropFilter: "blur(2px)",
                    borderRadius: "10px",
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0.904),rgba(0, 0, 0, 0.363), rgba(0, 0, 0, 0.897))",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      height: "100%",
                      padding: "70px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          fontSize: "30px",
                          // fontWeight:"600"
                        }}
                      >
                        {data.Title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "13px", fontWeight: "600" }}
                        >
                          {data.Year}
                        </Typography>
                        <Box
                          sx={{
                            background: "#B7B7B8",
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                          }}
                        ></Box>
                        <Typography
                          sx={{ fontSize: "13px", fontWeight: "600" }}
                        >
                          {data.Rated}
                        </Typography>
                        <Box
                          sx={{
                            background: "#B7B7B8",
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                          }}
                        ></Box>
                        <Typography
                          sx={{ fontSize: "13px", fontWeight: "600" }}
                        >
                          {data.Runtime}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          maxWidth: "300px",
                          marginTop: "20px",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          Plot,
                        </Typography>

                        <Typography
                          textAlign={"left"}
                          fontSize={"13px"}
                          fontWeight={"600"}
                        >
                          {data.Plot}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "3px" }}>
                          <Typography
                            sx={{
                              fontSize: "17px",
                              fontWeight: "550",
                              color: "#FDD23C",
                            }}
                          >
                            IMDB
                          </Typography>
                          <Typography
                            sx={{ fontSize: "17px", fontWeight: "500" }}
                          >
                            Rating
                          </Typography>
                        </Box>
                        <Box fontSize={"14px"}>
                          <FaStar
                            style={{ marginRight: "2px", color: "#FDD23C" }}
                          />
                          {data?.imdbRating}/10
                        </Box>
                        <Typography fontSize={"10px"}>
                          {data.imdbVotes}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))
        ) : (
          <Loading />
        )}
        {imgSliderMov?.map((data) => (
          <SwiperSlide>
            <Box
              onClick={() => mediaClickFn(data.imdbID)}
              sx={{
                backgroundImage: `url(${data.imdbID}.jpg)`,
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                // background: "red",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(2px)",
                  borderRadius: "10px",
                  backgroundImage:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.904),rgba(0, 0, 0, 0.363), rgba(0, 0, 0, 0.897))",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "70px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        fontSize: "30px",
                        // fontWeight:"600"
                      }}
                    >
                      {data.Title}
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                        {data.Year}
                      </Typography>
                      <Box
                        sx={{
                          background: "#B7B7B8",
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                        }}
                      ></Box>
                      <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                        {data.Rated}
                      </Typography>
                      <Box
                        sx={{
                          background: "#B7B7B8",
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                        }}
                      ></Box>
                      <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                        {data.Runtime}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        maxWidth: "300px",
                        marginTop: "20px",
                      }}
                    >
                      <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                        Plot,
                      </Typography>

                      <Typography
                        textAlign={"left"}
                        fontSize={"13px"}
                        fontWeight={"600"}
                      >
                        {data.Plot}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ display: "flex", gap: "3px" }}>
                        <Typography
                          sx={{
                            fontSize: "17px",
                            fontWeight: "550",
                            color: "#FDD23C",
                          }}
                        >
                          IMDB
                        </Typography>
                        <Typography
                          sx={{ fontSize: "17px", fontWeight: "500" }}
                        >
                          Rating
                        </Typography>
                      </Box>
                      <Box fontSize={"14px"}>
                        <FaStar
                          style={{ marginRight: "2px", color: "#FDD23C" }}
                        />
                        {data?.imdbRating}/10
                      </Box>
                      <Typography fontSize={"10px"}>
                        {data.imdbVotes}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
