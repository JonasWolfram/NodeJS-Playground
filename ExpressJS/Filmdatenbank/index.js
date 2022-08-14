import express from "express";
import { createWriteStream } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import { router as movieRouter } from "./movie/index.js";

const app = express();
const port = 8080;

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));

const accessLogStream = createWriteStream("access.log", { flags: "a" });
app.use(morgan("common", { immediate: true, stream: accessLogStream }));

app.use(express.urlencoded({ extended: false }));

app.use("/movie", movieRouter);

app.get("/", (request, response) => response.redirect("/movie"));

app.listen(8080, () => {
  console.log(`Filmdatenbak erreichbar unter http://localhost:${port}`);
});
