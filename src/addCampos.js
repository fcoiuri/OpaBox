document.getElementById ("botaoSalaN").addEventListener ("click", add_campoN, false);
function add_campoN(){
  
    var formu = document.getElementById("form");
    // criando um input pra inserir
    var novo_campo = document.createElement("input");
    // colocando o tipo do input
    novo_campo.setAttribute("type", "number");
    // colocando o nome do input e especificacoes
    novo_campo.setAttribute("name", "listas[salaN][]");
    novo_campo.setAttribute("class", "form-control ");
    novo_campo.setAttribute("placeholder", "Sala N");
    novo_campo.setAttribute("required", "required");
    // insere o elemento na penúltima posição
    var pos = formu.childElementCount;

    // insere o elemento
    formu.insertBefore(novo_campo, formu.childNodes[pos]);
}

document.getElementById ("botaoSalaS").addEventListener ("click", add_campoNS, false);

function add_campoNS() {

    var formu = document.getElementById("form1");
    // criando um input pra inserir
    var novo_campo = document.createElement("input");
    // colocando o tipo do input
    novo_campo.setAttribute("type", "text");
    // colocando o nome do input e especificacoes
    novo_campo.setAttribute("name", "listas[salaS][]");
    novo_campo.setAttribute("class", "form-control ");
    novo_campo.setAttribute("placeholder", "Sala S");
    novo_campo.setAttribute("required", "required");
    // insere o elemento na penúltima posiçã
    var pos = formu.childElementCount;

    // insere o elemento
    formu.insertBefore(novo_campo, formu.childNodes[pos]);
}
