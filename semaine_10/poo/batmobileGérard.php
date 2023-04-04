<?php

$reponse = '';

$ennemisDetails = ['x:14 pv:18', 'x:26 pv:33', 'x:9 pv:13', 'x:16 pv:33', 'x:29 pv:20'];

//on récupère un tableau avec les positions et les nombres de vie

foreach ($ennemisDetails as $ennemi) {
	[$position, $pv] = sscanf($ennemi, 'x:%d pv:%d');
	$ennemisDetails[$position] = $pv;
}

// On ordonne le tableau par position croissante
ksort($ennemisDetails);
print_r($ennemisDetails);


$batmobile = 0;
// on parcourt le tableau pour calculer, pour chaque ennemi, l'avancement de la batmobile jusaqu'à
// la position de l'ennemi et  le nombre de tirs nécessaires 

foreach ($ennemisDetails as $position => $pv) {
	// calcul du nombre de déplacement = difference entre position de l'ennemi et batmobile
	$nbDeplacements = ($position - $batmobile);
	// On met en réponse le nombre de D pour déplacement
	$reponse .= str_repeat('D', $nbDeplacements);//
	// je positionne la batmobile sur l'ennemi : ce sera sa nouvelle position au tour suivant de 
	// la boucle
	$batmobile = $position;

	// je force $pv en integer pour pouvoir utiliser ceil et l'opérateur /divise
    $pvi = intval($pv);
	$nbFire = ceil($pvi / 10); //nbre de tirs

	// me^me méthode que supra pour répéter les F
	$reponse .= str_repeat('F', $nbFire);
}
print $reponse;