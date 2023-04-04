<?php

$ennemis = ['x:14 pv:18', 'x:26 pv:33', 'x:9 pv:13', 'x:16 pv:33', 'x:29 pv:20'];
$ennemis_tri = [];
foreach ($ennemis as $ennemi) {
    sscanf($ennemi, "x:%d pv:%d", $position, $pv);
    $ennemis_tri[$position] = $pv;
}
ksort($ennemis_tri);

$batmobile = 0;

foreach ($ennemis_tri as $position => $pv) {

    while ($batmobile < $position) {
        $batmobile ++;
        echo "D";
        if ($batmobile === $position) {
            $tir = 0;
            while ($tir < $pv) {
                $tir .= 10;
                echo "E";
            }
        }
    }
}

?>