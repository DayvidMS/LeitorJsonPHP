const jsonObjt = { "pessoas": [] };

//Carrega o json a primeira vez que entra na página
window.onload = createJSON();

function enviarNome() {
    let nome = document.getElementById("nome").value;

    if (!nome) {
        Swal.fire({
            title: 'Ops',
            text: "Não foi encontrado um nome para incluir",
            icon: 'warning',
            confirmButtonText: 'ok'
        }).then((result) => {
            if (result.isConfirmed) {
                return;
            }
        })
    } else {
        createJSON(nome);
    }

}

function adicionarFilho(idx) {



    let nomeFiho =  window.prompt("Nome do Filho");
    jsonObjt.pessoas[idx].filhos.push(nomeFiho);
    // let nome = document.getElementById("nome").value;

    if (!nome) {
        Swal.fire({
            title: 'Ops',
            text: "Não foi encontrado um nome para incluir",
            icon: 'warning',
            confirmButtonText: 'ok'
        }).then((result) => {
            if (result.isConfirmed) {
                return;
            }
        })
    } else {
        jsonTextArea();
    }

}

function createJSON(nome) {
    console.log(jsonObjt);
    if (!nome) {
        jsonTextArea();
        return;
    }
    jsonObjt.pessoas.push({ "nome": nome, "filhos": [] });

    let idx = jsonObjt.pessoas.length - 1;
    let pessoa = jsonObjt.pessoas[jsonObjt.pessoas.length - 1];

    // inputText.innerHTML = "<pre>" + JSON.stringify(jsonObj) + "</pre>";
    jsonTextArea();
    montaTabela(pessoa, idx);
}

function montaTabela(pessoa, idx) {

    // console.log(arrayObj);


    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Creating and adding data to first row of the table
    // let row_1 = document.createElement('tr');
    // let heading_1 = document.createElement('th');
    // heading_1.innerHTML = pessoa.nome;
    // row_1.appendChild(heading_1);
    // thead.appendChild(row_1);

    // Creating and adding data to second row of the table
    //Button que chama a função para remover o dado do objeto
    let buttonRemovePai = document.createElement('button');
    buttonRemovePai.innerHTML = "Remover";
    buttonRemovePai.onclick = () => deletar(idx);


    //Botão adicionar filho
    let button = document.createElement('button');
    button.innerHTML = "Adicionar Filho";
    button.onclick = () => adicionarFilho(idx);


    let row_2 = document.createElement('tr');
    // row_2.setAttribute("colspan","2");
    let row_3 = document.createElement('tr');
    // row_3.setAttribute("colspan","2");
    

    let row_2_data_1 = document.createElement('td');
    row_2_data_1.setAttribute("colspan","2");
    row_2_data_1.innerHTML = pessoa.nome;

    let row_2_data_2 = document.createElement('td');
    row_2_data_2.appendChild(buttonRemovePai);

    let row_3_data_3 = document.createElement('td');
    row_3_data_3.setAttribute("colspan","3");
    row_3_data_3.appendChild(button);



    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_2);
    tbody.appendChild(row_3);

    // Adding the entire table to the body tag
    document.getElementById('pessoas').appendChild(table);
}

function gravar() {

    let dados = JSON.stringify(jsonObjt);
    //monta complemento da url
    let url = `requisicao=gravarDados&pessoas=${dados}`;
    //url completa para requisição
    let requisicao = `classes/main.php?${url}`;


    //Requisição
    fetch(requisicao)
        .then(response => response.json())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.log(error);
        });


    // $.ajax({
    //     method: "POST",
    //     url: "classes/main.php",
    //     dataType: 'json',
    //     data: { gravarDados : JSON.stringify(jsonObjt)}
    // })
}

function deletar(idx) {
    console.log(jsonObjt.pessoas[idx]);
    // delete jsonObjt.pessoas[idx];


    jsonObjt.pessoas = jsonObjt.pessoas.splice(idx + 1, 1);

    console.log(jsonObjt);
    //chama a função sem passar nenhum parametro para reconstruir a tabela e o json mostrado.
    createJSON();
}

function jsonTextArea()
{
    document.getElementById("retornoJson").value = JSON.stringify(jsonObjt, undefined, 4);
    document.getElementById("retornoJson").readOnly = true;
}
