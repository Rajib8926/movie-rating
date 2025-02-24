import { Box, Typography } from "@mui/material";
import  { useEffect } from "react";
import SearchBar from "../../element/SearchBar";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import TopMedia from "../../element/TopMedia";
import { usePosts } from "../../PostProvider";
import Loading from "../../element/Loading";

export default function Bookmark() {
  const { searchTopEntertainments, bookmark, isLoading } = usePosts();
  useEffect(
    function () {
      if (bookmark) {
        searchTopEntertainments(bookmark);
      }
    },
    [bookmark]
  );
  return (
    <Box
      sx={{ backgroundColor: "transparent", padding: "15px", height: "100%" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "95%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <SearchBar />
        {bookmark ? (
          <Box
            sx={{
              // padding: "0 50px",
              width: "94%",
              height: "100%",

              marginTop: "30px",
            }}
          >
            {!isLoading ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginBottom: "20px",
                  }}
                >
                  <FaRegBookmark fontSize={"23px"} />
                  <Typography sx={{ fontSize: "18px" }}>
                    Movie Recommendation
                  </Typography>
                </Box>

                <></>
                <TopMedia />
              </>
            ) : (
              <Loading />
            )}
          </Box>
        ) : (
          <Box
            sx={{
              width: "95%",
              height: "94%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <FaBookmark fontSize={"27px"} color="#7486eb" />{" "}
              <Typography sx={{ fontSize: "23px" }}>No bookmark</Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
