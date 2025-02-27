import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import SearchBar from "../../element/SearchBar";
import { usePosts } from "../../PostProvider";
import TopMedia from "../../element/TopMedia";
import { MdMovie } from "react-icons/md";
import Loading from "../../element/Loading";

const TopMovieId = [
  "tt15239678",
  "tt8999762",
  "tt30321095",
  "tt5040012",
  "tt29623480",
  "tt12037194",
  "tt17526714",
  "tt21823606",
  "tt28491891",
  "tt20215234",
  "tt26446278",
  "tt24216998",
  "tt11687002",
  "tt28607951",
  "tt1262426",
  "tt16426418",
  "tt28479262",
  "tt1684562",
  "tt32086077",
  "tt5177114",
];
export default function Movie() {
  const { searchTopEntertainments, isLoading } = usePosts();
  useEffect(function () {
    async function getData() {
      searchTopEntertainments(TopMovieId);
    }
    getData();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        padding: { sm: "15px", xxs: "7px" },
        width: "100%",
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
        <Box
          sx={{
            padding: { lg: "0 50px", md: "0px" },
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
                <MdMovie fontSize={"23px"} />
                <Typography
                  sx={{
                    fontSize: { sm: "18px", xxs: "15px" },
                    fontWeight: { xxs: "600", sm: "500" },
                  }}
                >
                  Movie Recommendation
                </Typography>
              </Box>

              <TopMedia />
            </>
          ) : (
            <Loading />
          )}
        </Box>
      </Box>
    </Box>
  );
}
