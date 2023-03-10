<?php
	// Connexion à la base de données
	require_once 'action/db.php';

	// Récupération de la dernière position
	$sql = "SELECT MAX(position) AS max_position FROM tasks";
	$statement = $pdo->query($sql);
	$row = $statement->fetch(PDO::FETCH_ASSOC);
	$max_position = $row['max_position'];

	// Insertion de la tâche dans la base de données
	$sql = "INSERT INTO tasks (task, position) VALUES (?, ?)";
	$statement = $pdo->prepare($sql);
	$statement->execute([$_POST['task'], $max_position + 1]);

	// Redirection vers la page principale
	header('Location: index.php');
	exit();
?>
