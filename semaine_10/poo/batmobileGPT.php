<?php

$ennemis = ['x:14 pv:18', 'x:26 pv:33', 'x:9 pv:13', 'x:16 pv:33', 'x:29 pv:20'];

// Extraction des données importantes
$ennemis_tri = [];
foreach ($ennemis as $ennemi) {
  sscanf($ennemi, "x:%d pv:%d", $position, $pv);
  $ennemis_tri[$position] = $pv;
}

// Tri des ennemis par position
ksort($ennemis_tri);

// Initialisation de la position de la batmobile
$position_batmobile = 0;

// Parcours des ennemis triés
$instructions = '';
foreach ($ennemis_tri as $position => $pv) {
  // Calcul du nombre de déplacements nécessaires
  $deplacements = $position - $position_batmobile;
  $instructions .= str_repeat('D', $deplacements);

  // Calcul du nombre de coups de feu nécessaires
  $coups_de_feu = ceil($pv / 10);
  $instructions .= str_repeat('F', $coups_de_feu);

  // Mise à jour de la position de la batmobile
  $position_batmobile = $position;
}

echo $instructions; // Affichage des instructions
?>