<?php

class Employe
{
    public $nom;
    public $prenom;
    protected $age;

    public function __construct($prenom, $nom, $age)
    {
        $this->prenom = $prenom;
        $this->nom = $nom;
        $this->setAge($age);
    }

    public function setAge($age)
    {
        if (is_int($age) && $age >= 1 && $age < 120) {
            $this->age = $age;
        } else {
            throw new Exception("L'âge d'un employé devrait être un entier entre 1 et 120");
        }
    }

    public function getAge($age)
    {
        return $this->age;
    }

    public function presentation()
    {
        echo "Salut, je suis $this->prenom $this->nom et j'ai $this->age ans !";
    }
}

class Patron extends Employe {
    public $voiture;

    public function __construct($prenom, $nom, $age, $voiture) {
        parent::__construct($prenom, $nom, $age);
        $this->voiture = $voiture;
    }

    public function presentation() {
        echo "Bonjour, je suis $this->prenom $this->nom et j'ai $this->age ans, et j'ai une voiture !";

    }

    public function rouler(){
        var_dump("Bonjour, je roule avec ma $this->voiture !");
    }
}

$employe1 = new Employe("Lior", "Chamla", 34);
$employe2 = new Employe("Magali", "Pernin", 32);
$employe1->presentation();

$patron = new Patron("Joseph", "Durand", 55, "Mercedes");
$patron->presentation();
$patron->rouler();
