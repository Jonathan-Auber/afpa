<?php

$thirst = 19;
$hunger = 17;
$shape = 59;
$island = ['ZTTWF_WWTRA_', 'YRAFWWF', 'YWTYRYAWF', 'FZFAZWFA', 'WAFWTA_', 'WRWZFYAYWEEF', 'TZYTZTEZF_R'];

foreach ($island as $region) {
    for ($i = 0; $i <= strlen($region); $i++) {
        if ($thirst === 0 || $hunger === 0 || $shape === 0) {
            echo "Game Over -> Soif = " . $thirst . " Faim = " . $hunger . " Forme = " . $shape;
            exit;
        } else {
            if ($i == strlen($region)) {
                $shape = floor($shape + (($thirst + $hunger) / 2));
                $hunger -= 5;
                $thirst -= 5;
            } else {
                if ($region[$i] == "W") {
                    $thirst++;
                    $shape--;
                } elseif ($region[$i] == "F") {
                    $hunger++;
                    $shape--;
                } elseif ($region[$i] == "_") {
                    $shape -= 3;
                } else {
                    $shape--;
                }
            }
        }
    }
}

echo "Bien joué";


