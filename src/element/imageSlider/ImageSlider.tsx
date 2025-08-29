import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/modules/pagination-element.css";

import "./slider.css";

// import required modules
import { useNavigate } from "react-router";
import { Box, Skeleton, Typography } from "@mui/material";
import { mediaType } from "../../pages/media/Media";
import { FaStar } from "react-icons/fa";

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
          `https://www.omdbapi.com/?i=${mediaId}&apikey=16a181ac`
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
    if (!imgSliderMov) {
      searchTopEntertainments(imgSliderMovies);
    }
  }, []);

  return (
    <>
      {imgSliderMov ? (
        <Swiper
          pagination={{ clickable: true }}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          spaceBetween={-20}
        >
          {imgSliderMov.map((posterData) => (
            <SwiperSlide key={posterData.imdbID}>
              <div
                className="relative"
                style={{ height: "100%", cursor: "pointer" }}
                onClick={() => mediaClickFn(posterData.imdbID)}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: `url(${posterData.imdbID}.jpg)`,
                    backgroundSize: "cover",
                    borderRadius: "10px",
                    overflow: "hidden",
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
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: { md: "18px", xxs: "15px" },
                        }}
                      >
                        {posterData.Title}
                      </Typography>
                      <Box sx={{ display: "flex", gap: "3px" }}>
                        <Typography
                          sx={{
                            fontSize: { md: "15px", xxs: "12px" },
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          IMDB
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { md: "15px", xxs: "12px" },
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          Rating
                        </Typography>
                      </Box>
                      <Box>
                        <Box sx={{ display: "flex", gap: "5px" }}>
                          <FaStar color="#fde03c" />
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              fontSize={{ md: "15px", xxs: "12px" }}
                              fontWeight={"600"}
                              sx={{ color: "white" }}
                            >
                              {posterData.imdbRating}/
                            </Typography>
                            <Typography
                              fontSize={{ md: "15px", xxs: "12px" }}
                              fontWeight={"600"}
                              sx={{ color: "white" }}
                            >
                              10
                            </Typography>
                          </Box>
                        </Box>
                        <Typography fontSize={"10px"} sx={{ color: "white" }}>
                          {posterData.imdbVotes}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          {posterData.Year}
                        </Typography>
                        <Box
                          sx={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "white",
                          }}
                        ></Box>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          {posterData.Rated}
                        </Typography>
                        <Box
                          sx={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "white",
                          }}
                        ></Box>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "white",
                          }}
                        >
                          {posterData.Runtime}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Skeleton
            sx={{
              bgcolor: "grey.900",
              height: "75%",
              width: "10%",
              borderRadius: "0 10px 10px 0",
            }}
            variant="rectangular"
          />
          <Skeleton
            sx={{
              bgcolor: "grey.900",
              width: "70%",
              height: "100%",
              borderRadius: "10px",
            }}
            variant="rectangular"
          />
          <Skeleton
            sx={{
              bgcolor: "grey.900",
              height: "75%",
              width: "10%",
              borderRadius: "10px 0 0 10px",
            }}
            variant="rectangular"
          />
        </Box>
      )}
    </>
  );
}
