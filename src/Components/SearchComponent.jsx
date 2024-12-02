import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { searchResultsState, searchTextState } from "../state/atoms";

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    timeout = clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const SearchComponent = () => {
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  async function fetchResults(query) {
    try {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${query}&limit=10`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const debouncedFetchResults = useCallback(
    debounce((query) => {
      if (query.trim() !== "") {
        fetchResults(query);
      }
    }, 500),
    []
  );

  function handelChange(e) {
    let query = e.target.value;
    setSearchText(query);
    debouncedFetchResults(query);
  }

  return (
    <input
      type="text"
      placeholder="Search iTunes..."
      value={searchText}
      onChange={handelChange}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchComponent;
