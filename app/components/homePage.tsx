'use client';

import { useState } from "react";
import SearchBar from "./searchBar";
import { SearchData } from "./searchData";
import { ResultsPage } from "./showResultsPage";
import LoadingOverlay from "./loading";

const HomePage = () => {
  const [input,setInput] = useState('');

  const [state, setState] = useState({
    results: [],
    resultsUsedToSummarize: [],
    summaryText: '',
    loading: false,
  });

  const searchData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, loading: true }));
    const data = await SearchData(input);
    const resultData = data.results;
    const summaryData = data.summary.summary_text;
    const startingResults = resultData.slice(0, 6);
    setState((prevState) => ({
      ...prevState,
      results: resultData,
      resultsUsedToSummarize: startingResults,
      summaryText: summaryData,
      loading: false,
    }));
    debugger;
    console.log(resultData);
    console.log(summaryData);
  };

  return (
    <>
      <div
        className={
          !state.results
            ? "h-screen w-full bg-myBG font-mulish"
            : "w-full h-full bg-myBG font-mulish"
        }
      >
        {state.loading ? (
            <LoadingOverlay />
        ) : (
          <div className=""></div>
        )}
        {!state.results ? (
          <SearchBar
            searchData={searchData}
            input={input}
            setInput={setInput}
          />
        ) : (
          <ResultsPage
            searchData={searchData}
            input={input}
            setInput={setInput}
            summaryText={state.summaryText}
            resultsUsedToSummarize={state.resultsUsedToSummarize}
            results={state.results}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
