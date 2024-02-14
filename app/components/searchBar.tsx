import React, { useState } from "react";

interface MyComponentState {
  input: string;
  results: never[];
  resultsUsedToSummarize: never[];
  summaryText: string;
  loading: boolean;
}

interface SearchBarProps {
  searchData: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  setState: React.Dispatch<React.SetStateAction<MyComponentState>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchData,
  input,
  setState,
}) => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, input: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    searchData(e);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="" alt="Logo" className="w-20 mb-10" />
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full shadow-lg p-3"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className={`border-none outline-none w-full p-2 ${
            inputFocused ? "rounded-l-none" : ""
          }`}
          placeholder="Search for anything..."
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-r-full"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
