import React from "react";

function Search() {
  return (
    <div className="search">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}
function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      placeholder="Search plants..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;
