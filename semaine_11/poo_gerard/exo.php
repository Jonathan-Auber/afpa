<?php

// Exo 1
class Personne
{
    private string $nom;
    private int $age;

    public function __construct($nom, $age)
    {
        $this->nom = $nom;
        $this->age = $age;
    }

    public function presentation()
    {
        echo "Je m'appelle " . $this->nom . " et j'ai " . $this->age . " ! <br>";
    }
}

$patrick = new Personne("Patrick", 52);
$patrick->presentation();

// Exo 2
class CompteBancaire
{
    private string $titulaire;
    private int $solde;

    public function __construct($titulaire, $solde)
    {
        $this->titulaire = $titulaire;
        $this->solde = $solde;
    }

    public function crediter($credit)
    {
        $this->solde += $credit;
        echo "Nouveau solde :" . $this->solde . " Crédits <br>";
    }

    public function debiter($debit)
    {
        if (($this->solde - $debit) > 0) {
            $this->solde -= $debit;
            echo "Nouveau solde :" . $this->solde . " Crédits <br>";
        } else {
            echo "Solde insuffisant ! <br>";
        }
    }
}

$cloud = new CompteBancaire("Cloud", 12349);
$tifa = new CompteBancaire("Tifa", 200);

$cloud->crediter(500);
$cloud->debiter(3000);
$tifa->debiter(600);

// Exo 3
class Mammifere
{
    private string $nom;
    private int $age;

    public function __construct($nom, $age)
    {
        $this->nom = $nom;
        $this->age = $age;
    }
}

class Chien extends Mammifere
{
    public function aboyer()
    {
        echo "wouaff <br>";
    }
}

$garfield = new Mammifere("Garfield", 13);
$milou = new Chien("Milou", 11);
$milou->aboyer();

// Exo 4

abstract class Forme
{
    abstract protected function aire();
}

class Rectangle extends Forme
{
    private int $longueur;
    private int $largeur;

    public function __construct($longueur, $largeur)
    {
        $this->longueur = $longueur;
        $this->largeur = $largeur;
    }

    public function aire()
    {
        Echo "L'aire de ce rectangle est "  . $this->longueur * $this->largeur . "<br>";
    }
}

$rectangle = new Rectangle(20, 10);
$rectangle->aire();

class Cercle extends Forme
{
    private int $diametre;

    public function __construct($diametre)
    {
        $this->diametre = $diametre;
    }

    public function aire()
    {
        Echo "L'aire de ce cercle est " . (($this->diametre/2)*($this->diametre/2))*pi() . "<br>";
    }
}

$cercle = new Cercle(10);
$cercle->aire();
