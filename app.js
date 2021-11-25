const express = require("express");
const app = express();
const routes = require("./routes");
const flash = require("express-flash");
const path = require("path");
const jsdom = require('jsdom');
const $ = require( "jquery" )(new jsdom.JSDOM().window);

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + '/views/'));
// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/src/'));

//app.use(express.static(__dirname + '/resources'));
app.listen(process.env.PORT || 8080);

app.get("/", function (req, res) {
    var ab = "<h2>Ok1</h2>";
    $("#testando").html(ab);
    res.render("index.ejs", {teste1: ab});
})

app.use(express.json());
app.use(express.urlencoded());
// app.use(express.urlencoded({
//     extended: true
// }))

// function teste(){
//     return "função ok"
// }

// app.locals.teste = teste;


app.post('/ordenaLista', (req, res) => {
    // const salaN = parseInt(req.body.listas.salaN);
    console.log(req.body);
    //
    
    const texto = JSON.stringify(req.body.listas);
    const salaS = JSON.stringify(req.body.listas.salaS);
    console.log(salaS);
    var resp = [];
    const salaS1 = JSON.parse(salaS);

    for(var i in salaS1){
        resp.push(salaS1[i]);
    }
    var apresentar = resp.sort();

    //
    const salaN = JSON.stringify(req.body.listas.salaN);
    console.log(salaN);
    var respN = [];
    const salaN1 = JSON.parse(salaN);
    for(let i in salaN1){
        respN.push(salaN1[i]);
    }

    var apresentarN = respN.sort();
    console.log(apresentarN);

    /*
    console.log(salaN);
    // element.getElementById("testa")
    // .innerHTML =  req.body.listas;
    //...
    //salaS: [ “a”, “x”, “n” ]
    //retorna salaS: [ “a”, “n”, “x” ]
    
    const salaS = JSON.stringify(req.body.listas.salaS);
    // const salaS1 = salaS.split();
    const salaS1 = JSON.parse(salaS);
    var resp = [];
    // const salaS2 = salaS1.sort();
    for(var i in salaS1){
        resp.push(salaS1[i]);
    }
    var apresentar = resp.sort();

    // salaS.sort((a,b) => {
    //     return a
    // })

    console.log(`tipo: ${typeof salaS1}`);
    console.log(req.body.listas.salaS);

    function teste1(){
        return apresentar;
    }

    app.locals.teste1 = teste1;
    var a = "<h2>Ok</h2>";
    $("#testa").html(a);
    */
    // res.render("teste.ejs");
    res.render("ordenaLista.ejs", {dados: apresentar, dadosN: apresentarN});
    res.end();
})
