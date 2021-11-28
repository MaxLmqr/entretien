import express from "express";
import { createConnection } from "mysql2";

var app = express();
var connection = createConnection({
  host: "db",
  port: 3306,
  user: "root",
  password: "password",
});
connection.connect();

app.get("/", function (_, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
