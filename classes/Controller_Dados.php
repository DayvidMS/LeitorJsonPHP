<?php
ini_set('error_reporting', E_ALL);


class Cep_Controller
{
    public $model;
    public $ws;

    public function __construct()
    {
        $this->model = new Cep_Model();
        $this->ws = new Ws_Cep();
    }

    public function verificaCep($cep)
    {
        $cep = preg_replace('/[^0-9]/', '', $cep);

        $modelCep = $this->model->verificaCep($cep);
        if (!empty($modelCep)) {

            return $modelCep;
        }
        $wscep = $this->ws->searchCep($cep);

        $this->model->save($wscep);

        //transforma os dados xml em Json
        $json = json_encode($wscep);
        $array = json_decode($json, TRUE);


        return $array;
    }
}