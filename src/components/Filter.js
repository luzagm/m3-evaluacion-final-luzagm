import React from "react";
import "../stylesheets/App.scss";

const Filter = props => {
  return (
    <form>
      <label className="label" htmlFor="input-text">
        Buscar
      </label>
      <input
        onChange={props.filterByName}
        className="input"
        type="text"
        id="input-text"
      />
    </form>
  );
};

export default Filter;
