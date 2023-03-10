<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>challenge QuiZz-Js</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<div class="main-container ">
<h1>Bienvenu dans le challenge QuiZz-Js</h1>
      <header>

        <h2 class="title">Les Élèments disponibles</h2>
      </header>
      <section class="code-block">
        <p>Un fichier main.js</p>
      <pre><code class="code-block">
  <span class="code-keyword">const</span> questions = [
  {
    <span class="code-comment">// Texte de la question</span>
    question:
      <span class="code-string">"Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?"</span>,
    <span class="code-comment">// Réponses possibles</span>
    answers: [
      <span class="code-string">"Darth Vader"</span>,
      <span class="code-string">"Anakin Skywalker"</span>,
      <span class="code-string">"Les deux réponses"</span>,
      <span class="code-string">"Aucune réponse"</span>,
    ],
    <span class="code-comment">// Index de la réponse correcte</span>
    correctAnswerIndex: <span class="code-number">2</span>,
  },
  {
    question:
      <span class="code-string">'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?'</span>,
    answers: [<span class="code-string">"1967"</span>, <span class="code-string">"1974"</span>, <span class="code-string">"1962"</span>, <span class="code-string">"1980"</span>],
    correctAnswerIndex: <span class="code-number">0</span>,
  },
  {
    question:
      <span class="code-string">'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?'</span>,
    answers: [<span class="code-string">"Zelda"</span>, <span class="code-string">"Ganon"</span>, <span class="code-string">"Tom"</span>, <span class="code-string">"Link"</span>],
    correctAnswerIndex: <span class="code-number">3</span>,
  },
  {
    question:
      <span class="code-string">"Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?"</span>,
    answers: [<span class="code-string">"Apollo 9"</span>, <span class="code-string">"Mercury 1"</span>, <span class="code-string">"Apollo 13"</span>, <span class="code-string">"Gemini 2"</span>],
    correctAnswerIndex: <span class="code-number">2</span>,
  },
];

<span class="code-punctuation">document</span>.addEventListener("DOMContentLoaded", () => {
<span class="code-comment">// Code pour le quizz</span>
});
  </code></pre>
      </section>
      <section class="code-block">
        <p>Une template Html</p>
        <pre>
        <code class="code-block">
  <span class="code-tag">&lt;div</span> <span class="code-attribute">class</span>=<span class="code-value">"main-container"</span><span class="code-tag">&gt;</span>
    <span class="code-comment">&lt;!-- En-tête --&gt;</span>
    <span class="code-tag">&lt;header&gt;</span>
        <span class="code-tag">&lt;h2</span> <span class="code-attribute">class</span>=<span class="code-value">"title"</span><span class="code-tag">&gt;</span>Culture quiz<span class="code-tag">&lt;/h2&gt;</span>
    <span class="code-tag">&lt;/header&gt;</span>

    <span class="code-comment">&lt;!-- Section question--&gt;</span>
    <span class="code-tag">&lt;section</span> <span class="code-attribute">class</span>=<span class="code-value">"question-container"</span><span class="code-tag">&gt;</span>
        <span class="code-tag">&lt;p</span> <span class="code-attribute">id</span>=<span class="code-value">"question"</span><span class="code-tag">&gt;&lt;/p&gt;</span>
        <span class="code-tag">&lt;ul</span> <span class="code-attribute">id</span>=<span class="code-value">"answers"</span><span class="code-tag">&gt;&lt;/ul&gt;</span>
    <span class="code-tag">&lt;/section&gt;</span>

    <span class="code-comment">&lt;!-- Section résultat--&gt;</span>
    <span class="code-tag">&lt;section</span> <span class="code-attribute">class</span>=<span class="code-value">"result-container"</span><span class="code-tag">&gt;</span>
        <span class="code-tag">&lt;p&gt;</span>Votre score est de: <span class="code-tag">&lt;span</span> <span class="code-attribute">id</span>=<span class="code-value">"score"</span><span class="code-tag">&gt;</span>0<span class="code-tag">&lt;/span&gt;</span>/4<span class="code-tag">&lt;/p&gt;</span>
    <span class="code-tag">&lt;/section&gt;</span>
  <span class="code-tag">&lt;/div&gt;</span>
</code>

        </pre>
        <p>Ainsi qu'un fichier css que vous pouvez recuperer <a href="styleQuizz.css">En Cliquant ici</a></p>
      </section>
    </div>
    <div class="main-container">
      <header>
            <h2 class="title">Les Users Stories</h2>
        </header>
      <section>
        <form action="add-task.php" method="post">
          <label for="task">Ajouter une user story :</label>
          <input type="text" name="task" id="task">
          <button type="submit">Ajouter</button>
        </form>
        <hr>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Story</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <?php
              // Connexion à la base de données
              require_once 'action/db.php';

              // Récupération des tâches
              $sql = "SELECT * FROM tasks ORDER BY position ASC";
              $statement = $pdo->query($sql);

              // Affichage des tâches
              while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                echo '<tr>';
                echo '<td>' . $row['position'] . '</td>';
                echo '<td>' . htmlspecialchars($row['task']) . '</td>';
                echo '<td>';
                echo '<form action="update-task.php" method="post">';
                echo '<input type="hidden" name="id" value="' . $row['id'] . '">';
                echo '<input type="hidden" name="position" value="' . $row['position'] . '">';
                echo '<button type="submit" name="action" value="up" ' . ($row['position'] == 1 ? 'disabled' : '') . '>▲</button>';
                echo '<button type="submit" name="action" value="down" ' . ($row['position'] == $statement->rowCount() ? 'disabled' : '') . '>▼</button>';
                echo '</form>';
                echo '<form action="delete-task.php" method="post">';
                echo '<input type="hidden" name="id" value="' . $row['id'] . '">';
                echo '<input type="hidden" name="position" value="' . $row['position'] . '">';
                echo '<button type="submit" name="delete">Supprimer</button>';
                echo '</form>';
                echo '</td>';
                echo '</tr>';
              }
            ?>
          </tbody>
        </table>
      </section>
    </div>
    <div class="main-container">
        <!-- En-tête -->
        <header>
            <h2 class="title">Culture quiz</h2>
        </header>

        <!-- Section question-->
        <section class="question-container">
            <p id="question"></p>
            <ul id="answers"></ul>
        </section>

        <!-- Section résultat-->
        <section class="result-container">
            <p>Votre score est de: <span id="score">0</span>/4</p>
        </section>
    </div>
</body>

</html>