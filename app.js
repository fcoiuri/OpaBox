const express = require("express");
const app = express();
// const bodyParser = require("body-parser")
const routes = require("./routes");
const flash = require("express-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");



//app.use(express.static(__dirname + '/resources'));
app.listen(process.env.PORT || 8080);

app.get("/", function (req, res) {
    res.render("index.ejs");
})

app.use(express.json());
app.use(express.urlencoded());
// app.use(express.urlencoded({
//     extended: true
// }))


app.post('/ordenaLista', (req, res) => {
    // const username = req.body.sala_n;
    console.log(req.body);
    // console.log(username);
    //...
    res.render("teste.ejs");
    res.end();
})



// const middlewares = [
//     layout(),
//     express.static(path.join(__dirname, "public")),
//     bodyParser.urlencoded({ extended: true }),
//     cookieParser(),
//     session({
//       secret: "super-secret-key",
//       key: "super-secret-cookie",
//       resave: false,
//       saveUninitialized: false,
//       cookie: { maxAge: 60000 }
//     }),
//     flash()
// ];

// app.use(middlewares);

// app.use("/", routes);

// app.use((req, res, next) => {
//     res.status(404).send("Não encontrado");
// })

// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send("Algo errado.");
// })

// app.listen(8080, () => {
//     console.log("Escutando porta 8080");
// })