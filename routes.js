const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("./db.json");
const url = "http://localhost:8080/interlace";

router.get("/interlace", (req, res) => {
    res.json({ db });
})

const getIntervalos =  async () => {
    try {
        return await axios.get(url)
    } catch(e) {
        console.error(e);
    }
}

const getIntervalosAsync = async () =>{
    const inter = await getIntervalos()
    if(inter.data.db){
        const intervalos = inter.data;
        //recebe o valor do intervaloA
        var A = intervalos.db.intervaloA;
        //recebe o valor do intervaloA
        var B = intervalos.db.intervaloB;
        
        //recebe a divisão de A
        const divA = A.reduce((partial_sum, a) =>
        a / partial_sum
        );

        //recebe a divisão de B
        const divB = B.reduce((partial_sum, a) =>
        a / partial_sum

        );

         /*subtrai A[1] por A[0] para verificar se 
            A[1] é igual a B[0]
            */
        const seqA = A.reduce((partial_sum, a) =>
                a - partial_sum
        );

        //verifica se  interlaçam ou sobrepõe
        var verificandoInterla = divA === divB ? 
        true : B[0] === A[1] && B[1] === B[0] + seqA ? 
        true : false;

       router.get("/", function (req, res) {
        getIntervalosAsync()
    
        res.render("index.ejs", {intervaloA: A, 
            intervaloB: B,getInterval: verificandoInterla});
    })
}
}

//chamando o get '/'
getIntervalosAsync();

router.post('/ordenaLista', (req, res) => {
    const salaS = JSON.stringify(req.body.listas.salaS);
    var respS = [];
    const salaJson = JSON.parse(salaS);

    for (var i in salaJson) {
        respS.push(salaJson[i].toLowerCase());
    }
    var apresentarS = respS.sort();
    console.log(apresentarS);
    
    const salaN = JSON.stringify(req.body.listas.salaN);
    var respN = [];
    const salaN1 = JSON.parse(salaN);
    for (let i in salaN1) {
        respN.push(salaN1[i]);
    }

    var arraydeNumeros = respN.map(Number);
    const compararNumeros = (a, b) => a - b;
    var apresentarN = arraydeNumeros.sort(compararNumeros);

    res.render("ordenaLista.ejs", { dadosS: apresentarS, dadosN: apresentarN });
    res.end();
})

module.exports = router;