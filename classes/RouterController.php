<?php
class RouterController
{
    public function __construct($requisicao, $json)
    {
        switch ($requisicao['requisicao']) {
            case 'gravarDados':
                $this->gravarDados($json);
                break;
            
            default:
                # code...
                break;
        }
    }

    public function gravarDados($requisicao)
    {
        var_dump($requisicao);
    }
}