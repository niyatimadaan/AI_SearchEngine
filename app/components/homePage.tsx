'use client';

import { useState } from 'react'
import SearchBar from './searchBar'
import ResultsPageFunction from './ResultsPage'
import { SearchData } from './searchData';

const HomePage = () => {
    const [state, setState] = useState({
        input: '',
        results: [],
        resultsUsedToSummarize: [],
        summaryText: '',
        loading: false,
    })

  const searchData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState((prevState) => ({ ...prevState, loading: true }))
    debugger;
    const data = await SearchData(state.input);
    const resultData = data.results;
    const summaryData = data.summary.summary_text;
    const firstFiveResults = resultData.slice(0, 5);
    setState((prevState) => ({ ...prevState,results: resultData, resultsUsedToSummarize:firstFiveResults, summaryText: summaryData, loading: false }));
    console.log(resultData);
    console.log(summaryData);
  }
  
  return (
    <>
      <div className={!state.results ? "h-screen w-full bg-myBG font-mulish" : "w-full h-full bg-myBG font-mulish"}>
        {state.loading ? (
        //   <LoadingOverlay />
        <></>
        ) : (
          <div className=""></div>
        )
        }
        {!state.results ? (
          <SearchBar searchData={searchData} input={state.input} setState={setState} />
        ) : (
          <ResultsPageFunction searchData={searchData} input={state.input} setState={setState} summaryText={state.summaryText} resultsUsedToSummarize={state.resultsUsedToSummarize} results={state.results} />
        )
        }
      </div >
    </>
  )
}

export default HomePage;