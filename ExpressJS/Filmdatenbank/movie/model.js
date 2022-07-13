const data = [
  { id: 1, title: "Iron Man", year: 2008 },
  { id: 2, title: "Star Wars: A New Hope", year: 1977 },
  { id: 3, title: "The Northman", year: 2021 },
];

export function getAll() {
  return Promise.resolve(data);
}
