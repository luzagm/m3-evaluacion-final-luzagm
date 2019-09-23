import React from "react";
import "../stylesheets/App.scss";

const Filter = props => {
  return (
    <form>
      <input
        onChange={props.filterByName}
        className="input"
        type="text"
        id="input-text"
        placeholder="Buscar por nombre"
      />
    </form>
  );
};

export default Filter;
