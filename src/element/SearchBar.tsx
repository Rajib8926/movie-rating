import { Box, styled, TextField, Typography } from "@mui/material";
import { usePosts } from "../PostProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
interface SearchItemType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
interface SearchResult {
  Search: SearchItemType[];
  totalResults: string;
  Response: string;
}
interface searchItemType {
  data: SearchItemType;
  closeOverlay: () => void;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
}
const CustomDialog = styled(TextField)({
  "& .MuiInputBase-root": {
    // height: "45px",
    color: "#a8acb4",
  },
  "& .MuiInputLabel-root": {
    color: "#a8acb4", // Change this to your desired label color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #5c6372",
      // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#4f5766", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#808591", // Border color when focused
    },
  },
});
const MotionBox = motion(Box);
export default function SearchBar() {
  const [searchResult, setSearchResult] = useState<SearchItemType[]>();
  const [searchContent, setSearchContent] = useState("");
  const { searchOperation, openOverlay, closeOverlay, searchOverlay } =
    usePosts();
  useEffect(
    function () {
      async function searchFn() {
        const MovData: SearchResult = await searchOperation(searchContent);

        setSearchResult(MovData.Search);
      }
      searchFn();
    },
    [searchContent]
  );
  return (
    <Box sx={{ width: { lg: "65%" ,xs:"75%"} }}>
      <Box
        onClick={closeOverlay}
        sx={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          top: "0",
          left: "0",
          zIndex: "3",
          display: `${searchOverlay ? "block" : "none"}`,
        }}
      ></Box>
      <Box sx={{ width: "100%", position: "relative" }}>
        <CustomDialog
          onClick={() => {
            openOverlay();
          }}
          value={searchContent}
          onChange={(e) => {
            // searchFn(e);
            setSearchContent(e.target.value);
          }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ width: "100%", zIndex: "5", background: "#2f3143" }}
        />
        <AnimatePresence>
          <MotionBox
            sx={{
              position: "absolute",
              background: "#1c1e2f",
              top: "65px",
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
              overflow: "auto",
              zIndex: "5",
            }}
            // initial={{ height: "0" }}
            animate={searchResult && { maxHeight: "70vh" }}
            transition={{ duration: 0.5 }}
            exit={{ height: "0" }}
          >
            {searchOverlay &&
              searchResult?.map((data) => (
                <SearchItem
                  data={data}
                  setSearchContent={setSearchContent}
                  closeOverlay={closeOverlay}
                />
              ))}
            {}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Box>
  );
}

function SearchItem({ data, setSearchContent, closeOverlay }: searchItemType) {
  const navigate = useNavigate();
  function itemClickHandler(id: string) {
    navigate(`/media/${id}`);
  }
  const { addAndRemoveBookMark, bookmark } = usePosts();
  let isInBookmark = false;
  if (bookmark) {
    isInBookmark = bookmark.includes(data.imdbID);
  }
  return (
    <Box
      key={data.imdbID}
      onClick={() => {
        itemClickHandler(data.imdbID);
        setSearchContent("");
        closeOverlay();
      }}
      sx={{
        cursor: "pointer",
        padding: "7px",
        display: "flex",
        gap: "10px",
        position: "relative",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${data.Poster})`,
          backgroundSize: "cover",
          width: "70px",
          height: "100px",
        }}
      ></Box>
      <Box>
        <Typography sx={{ color: "#D6D6D6", fontSize: "17px" }}>
          {data.Title}
        </Typography>
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Typography
            sx={{
              color: "#78879b",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Type:
          </Typography>
          <Typography sx={{ color: "#78879b", fontSize: "14px" }}>
            {" "}
            {data.Type}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Typography
            sx={{
              color: "#78879b",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Year:
          </Typography>
          <Typography sx={{ color: "#78879b", fontSize: "14px" }}>
            {" "}
            {data.Year}
          </Typography>
        </Box>
      </Box>
      <Box
        onClick={(e) => {
          e.stopPropagation();
          addAndRemoveBookMark(data.imdbID);
        }}
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "20px",
        }}
      >
        {isInBookmark ? <FaBookmark /> : <FaRegBookmark color="#8b8ca1" />}
      </Box>
    </Box>
  );
}
