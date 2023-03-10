<?php
	// Connexion à la base de données
	require_once 'action/db.php';

	// Suppression de la tâche
	$sql = "DELETE FROM tasks WHERE id = ?";
	$statement = $pdo->prepare($sql);
	$statement->execute([$_POST['id']]);

	// Mise à jour des positions des tâches suivantes
	$sql = "UPDATE tasks SET position = position - 1 WHERE position > ?";
	$statement = $pdo->prepare($sql);
	$statement->execute([$_POST['position']]);

	// Redirection vers la page principale
	header('Location: index.php');
	exit();
?>
