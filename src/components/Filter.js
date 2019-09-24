import React from "react";
import "../stylesheets/App.scss";

const Filter = props => {
  return (
    <form className="form">
      <i className="material-icons search-icon">search</i>
      <input
        onChange={props.filterByName}
        className="input"
        type="text"
        id="input-text"
        placeholder="Search by name"
      />
    </form>
  );
};

export default Filter;
