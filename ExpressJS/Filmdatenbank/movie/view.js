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
        <thead><tr><th>ID</th><th>Title</th></tr></thead>
        <tbody>
            ${movies
              .map(
                (movie) =>
                  `<tr>
                    <td>${movie.id}</td>
                    <td>${movie.title}</td>
                </tr>`
              )
              .join("")}
            </tbody>
    </table>
</body>
</html>
`;
}
