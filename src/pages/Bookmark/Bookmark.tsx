import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "../../element/SearchBar";
import { FaRegBookmark } from "react-icons/fa";
import TopMedia from "../../element/TopMedia";
import { usePosts } from "../../PostProvider";
import Loading from "../../element/imageSlider/Loading";

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
        {bookmark ? (
          <Box
            sx={{
              // padding: "0 50px",
              width: "94%",
              height:"100%",
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
          <Typography>No bookmark</Typography>
        )}
      </Box>
    </Box>
  );
}
