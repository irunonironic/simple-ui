import React from 'react';
import { FiSearch } from 'react-icons/fi'; 

const Search = () => {
  return (
    <div className="flex items-center bg-gray-200 px-3 py-2 h-9 rounded-none">
      <FiSearch className="text-black text-lg mr-2" />
      <input
        type="search"
        placeholder="Search"
        className="bg-transparent text-black placeholder-black outline-none border-none w-full"
      />
    </div>
  );
};

export default Search;
