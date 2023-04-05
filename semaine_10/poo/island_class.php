<?php 
$island = ['ZTTWF_WWTRA_', 'YRAFWWF', 'YWTYRYAWF', 'FZFAZWFA', 'WAFWTA_', 'WRWZFYAYWEEF', 'TZYTZTEZF_R'];

class stats {
    private $thirst;
    private $hunger;
    private $shape;
    private $island;

    public function __construct($thirst, $hunger, $shape, $island)
    {
        $this->thirst = $thirst;
        $this->hunger = $hunger;
        $this->shape = $shape;
        $this->island = $island;
    }

    public function game() {
        foreach ($this->island as $region) {
            for ($i = 0; $i <= strlen($region); $i++) {
                if ($this->thirst === 0 || $this->hunger === 0 || $this->shape === 0) {
                    echo "Game Over => Soif = " . $this->thirst . " Faim = " . $this->hunger . " Forme = " . $this->shape;
                    exit;
                } else {
                    if ($i == strlen($region)) {
                        $this->shape = floor($this->shape + (($this->thirst + $this->hunger) / 2));
                        $this->hunger -= 5;
                        $this->thirst -= 5;
                    } else {
                        if ($region[$i] == "W") {
                            $this->thirst++;
                            $this->shape--;
                        } elseif ($region[$i] == "F") {
                            $this->hunger++;
                            $this->shape--;
                        } elseif ($region[$i] == "_") {
                            $this->shape -= 3;
                        } else {
                            $this->shape--;
                        }
                    }
                }
            }
        }
        
        echo "Bien joué";
    }
}

$stats1 = new Stats(19, 17, 59, $island);
$stats1-> game();


