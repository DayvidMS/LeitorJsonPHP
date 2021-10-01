/**
 * Verifica se algum nome foi inserido no input
 * Se foi inserido chama a função para inserir o nome em um Json
 * se não foi inserido, retorna mensagem na tela do usuario.
 */
function verificaNome()
{
    var nome = document.getElementById("nome").value;

    if(!nome)
    {
        Swal.fire({
            title: 'Digite um Nome',
            confirmButtonText: 'OK',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                return;
            } else {
                return;
            }
          })
    }else{
        incluirNomeJson(nome);
    }
}

function incluirNomeJson(nome)
{
    var nomes = [{nome}];
        nomes.push(nome);

console.log(nomes); 

}

function prettyPrint() {
    var ugly = document.getElementById('myTextArea').value;
    var obj = JSON.parse(ugly);
    var pretty = JSON.stringify(obj, undefined, 4);
    document.getElementById('myTextArea').value = pretty;
}