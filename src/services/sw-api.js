const baseUrl = 'https://swapi.co/api/';

export function getStarships() {
  const response = window.fetch(`${baseUrl}starships`, {mode: 'cors'}).then(res => res.json());
  return response;
}

export function getPilots(ship) {
  const foundShip = window.fetch(`${ship.url}`, {mode: 'cors'}).then(res => res.json());
  const pilots = foundShip.pilots;
  return pilots;
}

export function getPilotName(pilot) {
  return window.fetch(`${pilot}`, {mode: 'cors'}).then(res => res.json());
}