import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
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
      sx={{
        backgroundColor: "transparent",
        padding: { sm: "15px", xxs: "7px 0" },
        height: "100%",
      }}
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
              width: { sm: "94%", xxs: "96%" },
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
                  <Typography
                    sx={{
                      fontSize: { sm: "18px", xxs: "15px" },
                      fontWeight: { sm: "500", xxs: "600" },
                    }}
                  >
                    Bookmarks
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
