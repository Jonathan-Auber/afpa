<?php
	// Connexion à la base de données
	require_once 'action/db.php';

	// Récupération des informations de la tâche à modifier
	$sql = "SELECT * FROM tasks WHERE id = ?";
	$statement = $pdo->prepare($sql);
	$statement->execute([$_POST['id']]);
	$row = $statement->fetch(PDO::FETCH_ASSOC);

	// Modification de la position de la tâche
	if ($_POST['action'] == 'up' && $row['position'] > 1) {
		$previous_position = $row['position'] - 1;

		// Mise à jour de la position de la tâche précédente
		$sql = "UPDATE tasks SET position = ? WHERE position = ?";
		$statement = $pdo->prepare($sql);
		$statement->execute([$row['position'], $previous_position]);

		// Mise à jour de la position de la tâche
		$sql = "UPDATE tasks SET position = ? WHERE id = ?";
		$statement = $pdo->prepare($sql);
		$statement->execute([$previous_position, $_POST['id']]);
	} elseif ($_POST['action'] == 'down') {
		$next_position = $row['position'] + 1;

		// Mise à jour de la position de la tâche suivante
		$sql = "UPDATE tasks SET position = ? WHERE position = ?";
		$statement = $pdo->prepare($sql);
		$statement->execute([$row['position'], $next_position]);

		// Mise à jour de la position de la tâche
		$sql = "UPDATE tasks SET position = ? WHERE id = ?";
		$statement = $pdo->prepare($sql);
		$statement->execute([$next_position, $_POST['id']]);
	}

	// Redirection vers la page principale
	header('Location: index.php');
	exit();
?>
