<?php

class civil
{
    protected int $argent;
    protected string $prenom;
    protected string $age;
    protected string $genre;

    public function __construct($argent, $prenom, $age, $genre)
    {
        $this->argent = $argent;
        $this->prenom = $prenom;
        $this->age = $age;
        $this->genre = $genre;
    }

    public function direBonjour(civil $civil)
    {
        echo $this->prenom . " dis bonjour à " . $civil->prenom . "<br>";
    }

    public function marche()
    {
        echo $this->prenom . " marche dans la rue! <br>";
    }
}

class employe extends civil
{
    public function travaille()
    {
        echo $this->prenom . " travaille a son rythme ! <br>";
    }

    public function rale()
    {
        echo $this->prenom . " râle beaucoup aujourd'hui !!! <br>";
    }
}

class patron extends civil
{
    public function crier(employe $employe)
    {
        echo $this->prenom . " crie sur " . $employe->prenom . "<br>";
    }
    public function payer(employe $employe, int $argent)
    {
        echo $this->prenom . " paye " . $employe->prenom . "<br>";
        $this->argent -= $argent;
        $employe->argent += $argent;
        echo $employe->prenom . " à maintenant " . $employe->argent . " euro sur son compte ! <br>";
    }
}

$matthieu = new civil(2300, "Matthieu", 73, "Transgenre");
$wissem = new employe(30, "Wissem", 14, "Inconnu");
$zaid = new patron(16493, "Zaid", 10573, "Homme");

$matthieu->marche();
$matthieu->direBonjour($wissem);
$wissem->travaille();
$wissem->rale();
$zaid->crier($wissem);
$zaid->payer($wissem, 1);
$wissem->rale();
$zaid->payer($wissem, 2);



