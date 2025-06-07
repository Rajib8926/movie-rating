import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/pagination-element.css";

import "./slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
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
        spaceBetween={20}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
                  cursor: "pointer",
                  position: "relative",
                  overflow:"hidden",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to right, rgba(0, 0, 0, 0.904),rgba(0, 0, 0, 0.363), rgba(0, 0, 0, 0.897))",
                    // borderRadius: "10px",
                    zIndex: 1
                  }
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    zIndex: 2,
                   
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      height: "100%",
                      padding: { lsm: "70px", xxs: "20px", sm: "30px" },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          fontSize: { lsm: "30px", sm: "20px", xxs: "17px" },
                          fontWeight: { lsm: "500", xxs: "600" },
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
                          sx={{
                            fontSize: { lsm: "13px", xxs: "11px" },
                            fontWeight: "600",
                          }}
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
                          sx={{
                            fontSize: { lsm: "13px", xxs: "11px" },
                            fontWeight: "600",
                          }}
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
                          sx={{
                            fontSize: { lsm: "13px", xxs: "11px" },
                            fontWeight: "600",
                          }}
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
                          marginTop: { sm: "20px", xxs: "10px" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { lsm: "16px", xxs: "14px" },
                            fontWeight: "600",
                          }}
                        >
                          Plot,
                        </Typography>

                        <Typography
                          textAlign={"left"}
                          fontSize={{ lsm: "13px", xxs: "11px" }}
                          fontWeight={"600"}
                          lineHeight={"1.3"}
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
                              fontSize: { lsm: "17px", xxs: "14px" },
                              fontWeight: "550",
                              color: "#FDD23C",
                            }}
                          >
                            IMDB
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { lsm: "16px", xxs: "14px" },
                              fontWeight: "600",
                            }}
                          >
                            Rating
                          </Typography>
                        </Box>
                        <Box
                          fontSize={{ lsm: "14px", xxs: "12px" }}
                          fontWeight={"600"}
                        >
                          <FaStar
                            style={{ marginRight: "2px", color: "#FDD23C" }}
                          />
                          {data?.imdbRating}/10
                        </Box>
                        <Typography fontSize={{ lsm: "12px", xxs: "10px" }}>
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
      </Swiper>
    </>
  );
}
