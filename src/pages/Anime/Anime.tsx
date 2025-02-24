import { Box, Typography } from "@mui/material";
import  { useEffect } from "react";
import SearchBar from "../../element/SearchBar";
import { usePosts } from "../../PostProvider";
import { MdCatchingPokemon } from "react-icons/md";
import TopMedia from "../../element/TopMedia";
import Loading from "../../element/Loading";
const topAnime = [
  "tt2560140",
  "tt0388629",
  "tt9335498",
  "tt12343534",
  "tt5607616",
  "tt10233448",
  "tt30217403",
  "tt0409591",
  "tt0266697",
  "tt0877057",
  "tt0988824",
  "tt5626028",
  "tt14986406",
  "tt0434665",
  "tt2098220",
  "tt1355642",
  "tt22248376",
  "tt33175825",
  "tt2359704",
  "tt0378194",
  "tt5311514",
  "tt9679542",
  "tt0434706",
  "tt5847454",
  "tt26743760",
  "tt0168366",
  "tt12590266",
  "tt11657662",
  "tt13616990",
  "tt4508902",
];

export default function Anime() {
  const { searchTopEntertainments, isLoading } = usePosts();
  useEffect(function () {
    searchTopEntertainments(topAnime);
  }, []);
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
        <Box
          sx={{
            padding: "0 50px",
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
                <MdCatchingPokemon fontSize={"23px"} />
                <Typography sx={{ fontSize: "18px" }}>
                  Anime Recommendation
                </Typography>
              </Box>
              <></>
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
