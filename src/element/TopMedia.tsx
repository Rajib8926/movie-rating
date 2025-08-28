import { Box, Grid, Typography } from "@mui/material";
import { usePosts } from "../PostProvider";
import { FaBookmark, FaRegBookmark, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { mediaType } from "../pages/media/Media";
type dataType = {
  data: mediaType;
};

export default function TopMedia() {
  const { topMedia } = usePosts();

  return (
    <Grid container spacing={2}>
      {topMedia?.map((data) => (
        <Cards data={data} key={data.imdbID} />
      ))}
    </Grid>
  );
}

const MotionBox = motion(Box);
function Cards({ data }: dataType) {
  const { addAndRemoveBookMark, bookmark } = usePosts();
  const navigate = useNavigate();
  function mediaClickFn(id: string) {
    navigate(`/media/${id}`);
  }
  let isInBookmark = false;
  if (bookmark) {
    isInBookmark = bookmark.includes(data.imdbID);
  }

  return (
    <Grid item xl={4} lsm={6} xxs={12}>
      <MotionBox
        onClick={() => mediaClickFn(data.imdbID)}
        whileHover={
          window.innerWidth >= 1000
            ? {
                scale: 1.2,
                zIndex: 3,
                background: "#1c1e2f9b",
                backdropFilter: "blur(4px)",
                boxShadow: "0px 0px 12px 5px #595c7c52",
              }
            : {}
        }
        whileTap={{ scale: 1 }}
        sx={{
          background: "#1C1E2F",
          width: "100%",

          borderRadius: "7px",
          position: "relative",
          cursor: "pointer",
          display: "flex",
        }}
      >
        <Box
          sx={{
            // width: "135px",
            width: { lsm: "140px", sm: "150px", xxs: "120px" },
            height: { lsm: "200px", sm: "230px", xxs: "180px" },
            backgroundImage: `url(${data.Poster})`,
            backgroundSize: "cover",
            borderRadius: "4px",
          }}
        ></Box>
        <Box
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            width: "70%",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
              {data.Title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography sx={{ fontSize: "11px", fontWeight: "600" }}>
                {data.Year}
              </Typography>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "white",
                }}
              ></Box>
              <Typography sx={{ fontSize: "11px", fontWeight: "600" }}>
                {data.Rated}
              </Typography>
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "white",
                }}
              ></Box>
              <Typography sx={{ fontSize: "11px", fontWeight: "600" }}>
                {data.Runtime}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: { sm: "13px", xxs: "12px" },
                    fontWeight: "600",
                  }}
                >
                  Director:{" "}
                </Typography>
                <Typography sx={{ fontSize: { sm: "13px", xxs: "12px" } }}>
                  {data.Director}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: { sm: "13px", xxs: "12px" },
                    fontWeight: "600",
                  }}
                >
                  Writer:{" "}
                </Typography>
                <Typography sx={{ fontSize: { sm: "13px", xxs: "12px" } }}>
                  {data.Writer}
                </Typography>
              </Box>
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
                  <Typography fontSize={"13px"} fontWeight={"600"}>
                    {data.imdbRating}/
                  </Typography>
                  <Typography fontSize={"13px"} fontWeight={"600"}>
                    10
                  </Typography>
                </Box>
              </Box>
              <Typography fontSize={"10px"}>{data.imdbVotes}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          onClick={(e) => {
            e.stopPropagation();

            addAndRemoveBookMark(data.imdbID);
          }}
          sx={{
            position: "absolute",
            top: "15px",
            right: "15px",
            cursor: "pointer",
          }}
        >
          {isInBookmark ? <FaBookmark /> : <FaRegBookmark fontSize={"17px"} />}
        </Box>
      </MotionBox>
    </Grid>
  );
}
