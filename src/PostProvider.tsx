import React, { createContext, useContext, useState } from "react";
import { mediaType } from "./pages/media/Media";

interface childrenType {
  children: React.ReactNode;
}
interface contextType {
  testValue: number;
  searchOperation(searchName: string): Promise<any>;
  searchMediaById(id: string): Promise<any>;
  addAndRemoveBookMark(id: string): void;
  openOverlay(): void;
  closeOverlay(): void;
  searchOverlay: boolean;
  searchTopEntertainments(dataList: string[]): void;
  topMedia: mediaType[] | null;
  bookmark: string[] | null;
  setTopMedia: React.Dispatch<React.SetStateAction<mediaType[] | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const PostContext = createContext({} as contextType);
export default function PostProvider({ children }: childrenType) {
  const [bookmark, setBookmark] = useState<string[] | null>(null);
  const [searchOverlay, setSearchOverlay] = useState<boolean>(false);
  const [topMedia, setTopMedia] = useState<mediaType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const testValue: number = 10;

  function openOverlay() {
    setSearchOverlay(true);
  }
  function closeOverlay() {
    setSearchOverlay(false);
  }
  function searchTopEntertainments(dataList: string[]) {
    setIsLoading(true);
    const dataArr = dataList.map(async (mediaId) => {
      let returnVal;
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${mediaId}&apikey=c892d3a9`
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

    Promise.all(dataArr)
      .then((value) => setTopMedia(value))
      .then(() => setIsLoading(false));
  }

  async function searchOperation(searchName: string) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchName}&apikey=c892d3a9`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
  function addAndRemoveBookMark(id: string) {
    if (bookmark) {
      const result = bookmark.includes(id);

      if (result) {
        const filteredArray = bookmark.filter((number) => number !== id);
        if (filteredArray.length === 0) {
          setBookmark(null);
        } else {
          setBookmark(filteredArray);
        }
      } else {
        setBookmark([...bookmark, id]);
      }
    } else {
      setBookmark([id]);
    }
  }

  
  async function searchMediaById(id: string) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=c892d3a9`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
  return (
    <PostContext.Provider
      value={{
        testValue,
        searchOperation,
        searchMediaById,
        addAndRemoveBookMark,
        openOverlay,
        closeOverlay,
        searchOverlay,
        searchTopEntertainments,
        topMedia,
        bookmark,
        setTopMedia,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
export function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
