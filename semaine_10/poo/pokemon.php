<?php

$types = ['Herbe', 'Eau', 'Feu', 'Eau', 'Feu', 'Feu', 'Herbe', 'Feu', 'Herbe', 'Herbe', 'Feu', 'Herbe', 'Eau', 'Psychique', 'Eau', 'Herbe','Herbe', 'Poison', 'Feu', 'Feu', 'Eau', 'Eau', 'Herbe', 'Psychique', 'Feu', 'Herbe', 'Herbe', 'Herbe', 'Eau', 'Eau', 'Eau', 'Feu','Feu', 'Feu', 'Poison', 'Air', 'Eau', 'Eau', 'Herbe', 'Feu', 'Feu', 'Psychique', 'Herbe', 'Feu', 'Poison', 'Herbe', 'Herbe', 'Feu','Feu', 'Eau', 'Feu', 'Herbe', 'Feu', 'Eau', 'Feu', 'Glace', 'Feu', 'Eau', 'Eau', 'Herbe', 'Feu', 'Feu', 'Insecte', 'Eau'];

// var_dump(array_count_values($types));

$feu = 0;
$eau = 0;
$herbe = 0;
$rare = 0;
$teams = 0;


foreach ($types as $type) {
    if ($type == 'Feu') {
        $feu++;
    } elseif ($type == 'Eau') {
        $eau++;
    } elseif ($type == 'Herbe') {
        $herbe++;
    } else {
        $rare++;
    }
}

// while ($feu > 0 && $eau > 0 && $herbe > 0 && $rare > 0) {
//     $feu --;
//     $eau --;
//     $herbe --;
//     $rare --;
//     $teams++;
// }

// echo $teams;

echo "Le nombre maximum d'équipes composable est de " . " " .min($feu, $eau, $herbe, $rare);
