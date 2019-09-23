const url =
  "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const fetchCharacters = () => fetch(url).then(response => response.json());

export default fetchCharacters;
