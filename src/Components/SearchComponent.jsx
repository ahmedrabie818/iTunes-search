import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { searchResultsState, searchTextState } from "../state/atoms";

const SearchComponent = () => {
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  async function fetchSearchResults(query) {
    try {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${query}&limit=10`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchSearchResults(searchText);
  }, [searchText]);

  return (
    <input
      type="text"
      placeholder="Search iTunes..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchComponent;
