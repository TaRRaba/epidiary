require("dotenv").config();
require("@babel/register");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const indexRouter = require("./src/routes/index");
const attackRouter = require("./src/routes/attack.routes");
const ssr = require("./src/middleware/ssr");

const app = express();

const PORT = process.env.PORT ?? 3000;

const sessionConfig = {
  name: "ECook",
  store: new FileStore(),
  secret: process.env.COOKIE,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: false,
  },
};

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public/")));
app.use("/pics", express.static("pics"));
app.use(ssr);
app.use(session(sessionConfig));

app.use("/", indexRouter);

app.use("/attack", attackRouter);

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Сервер инициализирован на порту: ${PORT}`));
