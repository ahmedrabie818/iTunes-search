import React from "react";
import { RecoilRoot } from "recoil";
import SearchComponent from "./Components/SearchComponent";
import ResultsComponent from "./Components/ResultsComponent";

const App = () => {
  return (
    <RecoilRoot>
      <div className="max-w-xl mx-auto mt-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">iTunes Search</h1>
        <SearchComponent />
        <ResultsComponent />
      </div>
    </RecoilRoot>
  );
};

export default App;
