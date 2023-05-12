import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";

const app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));

// new Route to the TinyMCE node_module
app.use(
  "/tinymce",
  express.static(path.join(__dirname, "..", "node_modules", "tinymce"))
);

export default app;
