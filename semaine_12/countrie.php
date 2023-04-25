<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=countries;', 'root', 'root');
} catch (Exception $err) {
    die('Erreur : ' . $err->getMessage());
}

if (isset($_POST['search'])) {
    $research = htmlspecialchars($_POST['search']);
    $searchCountries = $pdo->prepare("SELECT country_name FROM apps_countries WHERE country_name LIKE ?");
    $searchCountries->execute(["%$research%"]);
    $results = $searchCountries->fetchAll(PDO::FETCH_OBJ);
    foreach ($results as $result) {
        $countrie[] = $result->country_name;
    }
    echo json_encode($countrie);
}
