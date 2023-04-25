<?php

// Polymorphisme
// interface voiture {
//     public function rouler(): string;
//     public function klaxonner(): string;
// }

// class bmw implements voiture{
//     public function rouler():string {
//         return "La voiture roule";
//     }
//     public function klaxonner():string{
//         return "Tut tut";
//     }
// }


class Character
{
    public int $pv;
    protected string $name;
    public int $atk = 20;

    public function __construct($name, $pv)
    {
        $this->name = $name;
        $this->pv = $pv;
    }

    public function coupDePoing(Character $character)
    {
        $character->pv -= $this->atk;
        echo $character->name . " à " . $character->pv . " pv ! <br>";
    }

    public function superSaiyan()
    {
        $this->atk += 60;
        echo "L'attaque de " . $this->name . " augmente à 80 ! <br>";
    }

    public function direBonjour(character $character)
    {
        echo "Bonjour " . $character->name . "<br>";
    }

    public function getname()
    {
        return $this->name;
    }

    public function getPV()
    {
        return $this->pv;
    }

    public function setname(string $param)
    {
        return $this->name = $param;
    }
}

class Enemy extends Character
{
    public string $power = "Super Nova";

    public function getNameEnnemy(){
        echo $this->name;
    }
}

$cloud = new Character("Cloud", 4000);
$sephiroth = new Enemy("Sephiroth", 13000);

// $vegeta = new Character("Vegeta", 100);
// $goku = new Character("Goku", 100);
// $freezer = new Enemy("Freezer", 5000);

echo $sephiroth->getNameEnnemy() . " à " . $sephiroth->getPV() . " pv !<br>";
$cloud->coupDePoing($sephiroth);

$cloud->superSaiyan();
$cloud->coupDePoing($sephiroth);
$cloud->direBonjour($sephiroth);
echo $sephiroth->getNameEnnemy() . " lance " . $sephiroth->power;





// class Personnage {
//     public static int $vie = 100;
//     protected static string $prenom;
//     public static int $atk = 20;

//     const DBNAME = "database";

//     public static function getPrenom(){
//         echo self::$prenom;
//     }
// }

// $pikachu = new Personnage();
// $pikachu::DBNAME;