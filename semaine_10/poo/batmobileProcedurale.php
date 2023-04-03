<?php

$ennemis = ['x:14 pv:18', 'x:26 pv:33', 'x:9 pv:13', 'x:16 pv:33', 'x:29 pv:20'];
$ennemis_tri = [];
foreach ($ennemis as $ennemi) {
    sscanf($ennemi, "x:%d pv:%d", $position, $pv);
    $ennemis_tri[$position] = $pv;
}
ksort($ennemis_tri);
var_dump([$ennemis_tri]);

$batmobile = 0;

var_dump($ennemis_tri[26]);

foreach ($ennemis_tri as $ennemi_position) {
    while ($batmobile < $ennemi_position) {
        $batmobile ++;
        echo "D";
    }
}