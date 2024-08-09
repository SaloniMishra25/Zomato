import React from "react";
import "./filter.css";
import FilterItems from "./FilterItems";

function Filter({ filterList }) {
  return (
    <div className="filter">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItems filter={filter} key={filter.id}/>
        })}
    </div>
  );
}

export default Filter;
