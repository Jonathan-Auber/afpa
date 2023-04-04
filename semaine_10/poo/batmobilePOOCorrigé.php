<?php class Batmobile
{
    private $ennemis = []; // tableau privé qui contiendra les ennemis

    public function ajouterEnnemi($ennemi)
    {
        $position = sscanf($ennemi, "x:%d pv:%d")[0]; // extraire la position de l'ennemi avec sscanf
        $this->ennemis[$position] = $ennemi; // ajouter l'ennemi au tableau avec la position comme clé
    }

    public function vaincreEnnemis()
    {
        ksort($this->ennemis); // trier les ennemis selon leur position

        $batmobile_position = 0; // la batmobile démarre en position 0

        foreach ($this->ennemis as $ennemi) { // parcourir les ennemis
            $position = sscanf($ennemi, "x:%d pv:%d")[0]; // extraire la position de l'ennemi avec sscanf

            // calculer le nombre de déplacements nécessaires pour atteindre l'ennemi
            $deplacements = $position - $batmobile_position;
            $batmobile_position = $position; // mettre à jour la position de la batmobile
            $mouvements = str_repeat("D", $deplacements) . "F"; // mouvements nécessaires pour vaincre l'ennemi
            $coups_de_feu = ceil(sscanf($ennemi, "x:%d pv:%d")[1] / 10); // calculer le nombre de coups de feu nécessaires

            // répéter les mouvements nécessaires et ajouter les coups de feu
            echo str_repeat($mouvements, $coups_de_feu);
        }
    }
}

$batmobile = new Batmobile(); // créer une nouvelle instance de Batmobile

$ennemis = ['x:14 pv:18', 'x:26 pv:33', 'x:9 pv:13', 'x:16 pv:33', 'x:29 pv:20'];

foreach ($ennemis as $ennemi) {
    $batmobile->ajouterEnnemi($ennemi); // ajouter chaque ennemi à la Batmobile
}

$batmobile->vaincreEnnemis(); // vaincre les ennemis selon l'ordre de leur position