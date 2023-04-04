<?php

$types = ['Feu', 'Feu', 'Poison', 'Air', 'Eau', 'Eau', 'Herbe', 'Feu', 'Feu', 'Psychique', 'Herbe', 'Feu', 'Poison', 'Herbe', 'Herbe', 'Feu'];

$pokemons = array_count_values($types);

$feu = $pokemons['Feu'];
$eau = $pokemons['Eau'];
$herbe = $pokemons['Herbe'];
$rare = array_sum($pokemons) - ($feu + $eau + $herbe);

echo "Vous pouvez composer " .min($feu, $eau, $herbe, $rare). " équipes." ; 