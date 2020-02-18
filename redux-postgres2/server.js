const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const withAuth = require("./server/middleware/withAuth");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const authRouter = require("./server/router/auth");
const usersRouter = require("./server/router/users")

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/home", function (req, res) {
  res.send("Welcome!");
});

app.get("/api/secret", withAuth, function (req, res) {
  console.log(req.email)
  res.send("I'am private");
});

app.get("/api/check/token", withAuth, function (req, res) {
  console.log(req.email)
  res.send({ email: req.email });
});

app.get('/ping', (req, res) => {
  res.send('prout')
})
app.use("/api/auth", authRouter);
app.use("/api", usersRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(process.env.PORT || 8080);
