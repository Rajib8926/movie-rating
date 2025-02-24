import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePosts } from "../../PostProvider";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../element/SearchBar";
import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
import Loading from "../../element/imageSlider/Loading";
interface Ratings {
  Source: string;
  Value: string;
}

export interface mediaType {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string | null;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Ratings[];
  Metascore: string | null;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
  BoxOffice: string;
}

export default function Media() {
  const { idOfMedia } = useParams();
  const { searchMediaById, addAndRemoveBookMark, bookmark } = usePosts();
  const [mediaInfo, setMediaInfo] = useState<mediaType | null>(null);
  let isInBookmark = false;
  if (bookmark && mediaInfo) {
    isInBookmark = bookmark.includes(mediaInfo.imdbID);
  }
  console.log(idOfMedia);
  useEffect(
    function () {
      async function dataCall() {
        const data = await searchMediaById(idOfMedia);
        console.log(data);
        setMediaInfo(data);
      }
      dataCall();
    },
    [idOfMedia]
  );
  return (
    <Box
      sx={{ backgroundColor: "transparent", padding: "15px", height: "100%" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <SearchBar />
        <Box
          sx={{
            display: "flex",
            gap: "25px",
            width: "80%",
            height: "80%",
            padding: "15px 25px",
            marginTop: "40px",
            position: "relative",
          }}
        >
          {mediaInfo ? (
            <>
              <Box
                onClick={() =>
                  addAndRemoveBookMark(mediaInfo?.imdbID as string)
                }
                sx={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  cursor: "pointer",
                }}
              >
                {isInBookmark ? (
                  <FaBookmark fontSize={"23px"} />
                ) : (
                  <FaRegBookmark fontSize={"23px"} />
                )}
              </Box>
              <Box
                sx={{
                  background: `url(${mediaInfo?.Poster})`,
                  height: "500px",
                  width: "340px",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "26px" }}>
                    {mediaInfo?.Title}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                      {mediaInfo?.Year}
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
                      {mediaInfo?.Rated}
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
                      {mediaInfo?.Runtime}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-end", gap: "5px" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontWeight: "550",
                        color: "#FDD23C",
                      }}
                    >
                      IMDB
                    </Typography>
                    <Typography sx={{ fontSize: "17px", fontWeight: "500" }}>
                      Rating
                    </Typography>
                  </Box>
                  <Box>
                    <FaStar style={{ marginRight: "2px", color: "#FDD23C" }} />
                    {mediaInfo?.imdbRating}/10
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{ display: "flex", gap: "5px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Type:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Type}
                    </Typography>
                  </Box>
                  {mediaInfo?.totalSeasons && (
                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                        Total seasons:
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>
                        {mediaInfo?.totalSeasons}
                      </Typography>
                    </Box>
                  )}

                  <Box
                    sx={{ display: "flex", gap: "5px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Released:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Released}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "5px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Language:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Language}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "5px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Genre:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Genre}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "5px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Country:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Country}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "5px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Director:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Director}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "2px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Writer:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Writer}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "2px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Actors:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Actors}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "2px", alignItems: "flex-end" }}
                  >
                    <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                      Awards:
                    </Typography>
                    <Typography sx={{ fontSize: "15px" }}>
                      {mediaInfo?.Awards}
                    </Typography>
                  </Box>
                  {mediaInfo?.BoxOffice && (
                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                        Box office collection:
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>
                        {mediaInfo?.BoxOffice}
                      </Typography>
                    </Box>
                  )}
                </Box>
                <Box sx={{ gap: "2px" }}>
                  <Typography sx={{ fontSize: "17px", fontWeight: "550" }}>
                    Plot:
                  </Typography>
                  <Typography sx={{ width: "380px", fontSize: "13px" }}>
                    {mediaInfo?.Plot}
                  </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <Loading />
          )}

          {/* <Button
            onClick={() => addAndRemoveBookMark(mediaInfo?.imdbID)}
            sx={{ fontSize: "23px" }}
          >
            <FaRegBookmark />
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}
