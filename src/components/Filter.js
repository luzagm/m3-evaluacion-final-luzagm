import React from "react";
import "../stylesheets/App.scss";

const Filter = props => {
  return (
    <form className="form">
      <div className="input-search">
        <i className="material-icons input-search-icon">search</i>
        <input
          onChange={props.filterByName}
          className="input-search-input"
          type="text"
          id="input-text"
          placeholder="Search by name"
        />
      </div>

      <div>
        <label className="label" htmlFor="Human">
          <input
            onClick={props.filterByType}
            id="Human"
            type="radio"
            value="Human"
            name="species"
          />
          Human
        </label>
        <label className="label" htmlFor="Alien">
          <input
            onClick={props.filterByType}
            id="Alien"
            type="radio"
            value="Alien"
            name="species"
          />
          Alien
        </label>
      </div>
    </form>
  );
};

export default Filter;
