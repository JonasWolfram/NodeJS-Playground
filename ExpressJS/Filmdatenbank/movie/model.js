let data = [
  { id: 1, title: "Iron Man", year: 2008 },
  { id: 2, title: "Star Wars: A New Hope", year: 1977 },
  { id: 3, title: "The Northman", year: 2021 },
  { id: 4, title: "The Witch", year: 2015 },
  { id: 5, title: "Prey", year: 2022 },
];

// Interne Funktionen

function getNextID() {
  return Math.max(...data.map((movie) => movie.id)) + 1;
}

function insert(movie) {
  movie.id = getNextID();
  data.push(movie);
}

function update(movie) {
  movie.id = parseInt(movie.id, 10);
  const index = data.findIndex((item) => item.id === movie.id);
  data[index] = movie;
}

// Exportierbare Funktionen

export function getAll() {
  return Promise.resolve(data);
}

export function get(id) {
  return Promise.resolve(data.find((movie) => movie.id === movie.id));
}

export function remove(id) {
  data = data.filter((movie) => movie.id !== id);
  return Promise.resolve();
}

export function save(movie) {
  if (movie.id == "") {
    insert(movie);
  } else {
    update(movie);
  }
  return Promise.resolve();
}
