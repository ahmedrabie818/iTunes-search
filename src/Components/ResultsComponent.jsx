import React from "react";
import { useRecoilValue } from "recoil";
import { searchResultsState } from "../state/atoms";

const ResultsComponent = () => {
  const searchResults = useRecoilValue(searchResultsState);

  return (
    <div className="mt-6">
      {searchResults.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <ul className="space-y-4">
          {searchResults.map((result) => (
            <li
              key={result.trackId}
              className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4 hover:bg-gray-50"
            >
              <img
                src={result.artworkUrl100}
                alt={result.trackName}
                className="w-16 h-16 rounded-lg"
              />

              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  {result.trackName}
                </h2>
                <p className="text-gray-600">{result.artistName}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsComponent;
