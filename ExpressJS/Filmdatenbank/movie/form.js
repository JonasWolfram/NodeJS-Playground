export function render(movie) {
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
    <form action="/movie/save" method="post">
        <input type="hidden" id="id" name="id" value="${movie.id}" />
        <div>
            <label for="title">Titel:</label>
            <input type="text" id="title" name="title" value="${movie.title}" />
        </div>
        <div>
            <label for="id">Jahr:</label>
            <input type="text" id="year" name="year" value="${movie.year}" />
        </div>
        <div>
            <button type="submit">speichern</button>
        </div>
    </form>
</body>
</html>
`;
}
