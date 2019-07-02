const baseUrl = 'https://swapi.co/api/';

export function getStarships() {
  const response = window.fetch(`${baseUrl}starships`, {mode: 'cors'}).then(res => res.json());
  return response;
}