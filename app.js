const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

const middlewares = [
    express.json(),
    express.urlencoded({extended: true}),
    express.static(path.join(__dirname, "src/js")),
    express.static(path.join(__dirname, "src/public"))
];

app.use(middlewares);

app.listen(process.env.PORT || 8080);

app.use("/", routes);
