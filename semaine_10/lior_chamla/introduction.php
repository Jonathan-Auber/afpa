<?php

class employe {
    public $nom;
    public $prenom;
    public $age;

    public function __construct($prenom, $nom, $age)
    {
        $this->prenom = $prenom;
        $this->nom = $nom;
        $this->age = $age;
    }

    public function presentation() {
        echo "Bonjour je suis $this->prenom $this->nom et j'ai $this->age ans !";

    }
}

$employe1 = new employe("Lior", "Chamla", 34);

$employe2 = new employe("Magali", "Pernin", 32);
// $employe2->prenom = "Magali";
// $employe2->nom = "Pernin";
// $employe2->age = 32;  

$employe1->presentation();