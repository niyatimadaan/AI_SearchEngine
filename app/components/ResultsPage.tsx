import React, { useState } from "react";

interface ResultsPageProps {
  searchData: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  summaryText: string;
  resultsUsedToSummarize: any[];
  results: any[];
}

export default function ResultsPageFunction({
  searchData,
  input,
  setInput,
  summaryText,
  resultsUsedToSummarize,
  results,
}: ResultsPageProps) {
  const [inputFocused, setInputFocused] = useState(false);

  const clipTextByWords = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const clipDisplayLink = (displayLink: string) => {
    if (displayLink.length > 50) {
      return displayLink.slice(0, 50) + "...";
    }
    return displayLink;
  };

  return (
    <div className="">
      <div className="flex items-center gap-10 px-10 pt-5 pb-1">
        <div className="w-full">
          <div
            className={`w-1/3 bg-white h-12 items-center flex rounded-full ${
              inputFocused ? "border border-myBorder" : ""
            } hover:border-myBorder hover:border`}
          >
            <form
              onSubmit={searchData}
              className="w-full flex items-center justify-center"
            >
              <input
                type="text"
                value={input}
                className="w-full ml-5 hover:outline-none focus:outline-none text-lg"
                onChange={(e) =>
                  setInput( e.target.value)
                }
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="Search something on HUSHH Search Engine!!"
              />
              <button type="submit">
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  stroke=""
                  className="stroke-black hover:stroke-myBorder w-6 h-6 mr-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <img src="" alt="" className="w-48" />
        </div>
      </div>

      <div className="flex justify-between mx-10 gap-20">
        <div className="bg-darkBG h-max w-1/3 flex-2 rounded-xl">
          <p className="p-3">{summaryText}</p>
        </div>
        <div className="text-mytext flex-1 h-full flex justify-between gap-5">
          {resultsUsedToSummarize.map((result, index) => (
            <a
              key={index}
              href={result.link}
              className="flex-1 flex flex-col h-64 bg-darkBG rounded-lg shadow-lg"
            >
              <div className="flex-1 flex flex-col h-64 bg-darkBG rounded-lg shadow-lg">
                <div className="h-32">
                  <img
                    src={result.pagemap.metatags[0]["og:image"]}
                    alt=""
                    className="rounded-t-xl w-full h-full"
                  />
                </div>
                <h2 className="p-2">{clipTextByWords(result.title, 6)}</h2>
                <p className="mt-auto p-2">
                  {clipDisplayLink(result.displayLink)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="">
        <div className="w-2/3 flex flex-col gap-5 mt-10">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-darkBG  flex rounded-xl gap-0 ml-10 py-3 px-2 justify-between"
            >
              <div className="flex flex-col justify-between w-full">
                <div className="">
                  <div className="group">
                    <a href={result.link} className="group-hover:text-myBorder">
                      <h1 className="font-medium text-2xl">{result.title}</h1>
                    </a>
                    <hr className="w-11/12 border-gray group group-hover:border-myBorder" />
                  </div>
                  <p className="mt-5 w-3/4">{result.snippet}</p>
                </div>
                <p className="">{result.displayLink}</p>
              </div>
              <div className="">
                <img
                  src={result.pagemap.metatags[0]["og:image"]}
                  alt=""
                  className="rounded-xl h-40 max-w-40 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
