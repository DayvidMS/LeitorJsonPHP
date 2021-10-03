<?php
require_once "database.php";
class Model_Dados extends Database
{

    public function __construct()
    {
    }

  
    public function salvarDados($json)
    {
        
        $conn = Database::conexao();

        var_dump($json);
        die;
        $sql = <<<SQL
        INSERT INTO cep(
            cep,logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi
        )
        VALUES (?,?,?,?,?,?,?,?,?,?)
        SQL;
        $stmt = $conn->prepare($sql);
        $stmt->execute($data);
    }
}
