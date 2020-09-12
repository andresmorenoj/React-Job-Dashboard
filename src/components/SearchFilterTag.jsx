import React from "react";

import "../assets/styles/components/SearchFilterTag.scss";

const SearchFilterTag = ({ title }) => {
  return (
    <div className="filter__tag">
      <p>{title}</p>
      <span>x</span>
    </div>
  );
};
export default SearchFilterTag;
