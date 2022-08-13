let data = [
  { id: 1, title: "Iron Man", year: 2008 },
  { id: 2, title: "Star Wars: A New Hope", year: 1977 },
  { id: 3, title: "The Northman", year: 2021 },
  { id: 4, title: "The Witch", year: 2015 },
  { id: 5, title: "Prey", year: 2022 },
];

export function getAll() {
  return Promise.resolve(data);
}

export function get(id) {
  return Promise.resolve(data.find((movie) => movie.id === id));
}

export function remove(id) {
  data = data.filter((movie) => movie.id !== id);
  return Promise.resolve();
}
