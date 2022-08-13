export function render(movies) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Filmliste</title>
</head>
<body>
<h1>Filmliste</h1>
    <table>
        <thead><tr><th>ID</th><th>Title</th><th>Jahr</th><th>Löschen</th><th>Bearbeiten</th></tr></thead>
        <tbody>
            ${movies
              .map(
                (movie) =>
                  `<tr>
                    <td>${movie.id}</td>
                    <td>${movie.title}</td>
                    <td>${movie.year}</td>
                    <td><a href="/movie/delete/${movie.id}">löschen<a/></td>
                    <td><a href="/movie/form/${movie.id}">bearbeiten<a/></td>
                </tr>`
              )
              .join("")}
            </tbody>
            </table>
        <a href="/movie/form">neu</a>
</body>
</html>
`;
}
