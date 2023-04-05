<?php

$types = ['Feu', 'Feu', 'Poison', 'Air', 'Eau', 'Eau', 'Herbe', 'Feu', 'Feu', 'Psychique', 'Herbe', 'Feu', 'Poison', 'Herbe', 'Herbe', 'Feu'];

$types2 = ['Herbe', 'Eau', 'Feu', 'Eau', 'Feu', 'Feu', 'Herbe', 'Feu', 'Herbe', 'Herbe', 'Feu', 'Herbe', 'Eau', 'Psychique', 'Eau', 'Herbe'];class teams
{
    private $pokemons;
    private $feu;
    private $eau;
    private $herbe;
    private $rare;

    public function __construct($types)
    {
        $this->pokemons = $types;
    }

    private function countPerType()
    {
       $this->pokemons = array_count_values($this->pokemons);
    }


    private function totalPerType()
    {
        $this->feu = $this->pokemons['Feu'];
        $this->eau = $this->pokemons['Eau'];
        $this->herbe = $this->pokemons['Herbe'];
        $this->rare = array_sum($this->pokemons) - ($this->feu + $this->eau + $this->herbe);
    }

    public function totalTeams()
    {
        $this->countPerType();
        $this->totalPerType();
        return min($this->feu, $this->eau, $this->herbe, $this->rare);
    }
}

$pokemons1 = new teams($types);
echo "Vous pouvez composer " . $pokemonsmons1->totalTeams() . " équipes !";
?>

<br>

<?php
$pokemons2 = new teams($types2);
echo "Vous pouvez composer " . $pokemonsmons2->totalTeams() . " équipes !";

