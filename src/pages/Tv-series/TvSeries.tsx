import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import SearchBar from "../../element/SearchBar";
import { usePosts } from "../../PostProvider";
import { FaTv } from "react-icons/fa";
import TopMedia from "../../element/TopMedia";
import Loading from "../../element/Loading";
const topTvSeries = [
  "tt0903747", // Breaking Bad
  "tt5491994", // Planet Earth II
  "tt0795176", // Planet Earth
  "tt0185906", // Band of Brothers
  "tt7366338", // Chernobyl
  "tt0306414", // The Wire
  "tt0417299", // Avatar: The Last Airbender
  "tt6769208", // Blue Planet II
  "tt0141842", // The Sopranos
  "tt2395695", // Cosmos: A Spacetime Odyssey
  "tt0081846", // Cosmos
  "tt9253866", // Our Planet
  "tt0944947", // Game of Thrones
  "tt7678620", // Bluey
  "tt0071075", // The World at War
  "tt1355642", // Fullmetal Alchemist: Brotherhood
  "tt1533395", // Life
  "tt2861424", // Rick and Morty
  "tt8420184", // The Last Dance
  "tt0052520", // The Twilight Zone
  "tt1877514", // The Vietnam War
  "tt2560140", // Attack on Titan
  "tt1475582", // Sherlock
  "tt0103359", // Batman: The Animated Series
  "tt11126994", // Arcane
  "tt14986406", // Bleach: Thousand-Year Blood War
  "tt10233448", // Vinland Saga
  "tt10530900", // Gullak
  "tt9432978", // Kota Factory
  "tt0121955", // South Park
];
export default function TvSeries() {
  const { searchTopEntertainments, isLoading } = usePosts();
  useEffect(function () {
    searchTopEntertainments(topTvSeries);
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        padding: { sm: "15px", xxs: "7px 0" },
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
            padding: { sm: "0 50px", xxs: "0 5px" },
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
                <FaTv fontSize={"23px"} />
                <Typography
                  sx={{
                    fontSize: { sm: "18px", xxs: "15px" },
                    fontWeight: { sm: "500",xxs:"600" },
                  }}
                >
                  Tv Recommendation
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
