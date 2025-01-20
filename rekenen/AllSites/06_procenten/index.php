<?php
session_start(); // Start the session to store previous row ID

include "db/dbconnection.class.php";
$dbconnect = new dbconnection();

// Check if there's a stored previous row ID
$previousRowId = isset($_SESSION['previous_row_id']) ? $_SESSION['previous_row_id'] : null;

// Generate SQL query to get a random row excluding the previous one
if ($previousRowId !== null) {
    $sql = "SELECT * FROM sommen WHERE id != :previousRowId ORDER BY RAND() LIMIT 1";
    $query = $dbconnect->prepare($sql);
    $query->bindParam(':previousRowId', $previousRowId, PDO::PARAM_INT);
} else {
    $sql = "SELECT * FROM sommen ORDER BY RAND() LIMIT 1";
    $query = $dbconnect->prepare($sql);
}

$query->execute();
$recset = $query->fetchAll(PDO::FETCH_ASSOC);

// Store the current row ID in session as previous for next iteration
if (!empty($recset)) {
    $_SESSION['previous_row_id'] = $recset[0]['id'];
}
?>


<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="header.css">
</head>
<body>

<header>
  <h1>Dion Kooi procenten</h1>
  <nav>
    <center style="gap: 20%;">
      <ul>
          <li><a href="https://dionkooi.nl/" target="_blank">portfolio</a></li>
          <li><a href="../../index.html">RekenHub</a></li>
          <li><a href="../index1.html">Tafels</a></li>
          <li><a href="../index2.html">random Tafels</a></li>
          <li><a href="../index3.html">eenheden</a></li>
          <li><a href="../index4.html">som som magie</a></li>      
          <li><a href="../index5.html">sudoku</a></li>
          <li><a href="/AllSites/06_procenten/index.php">procenten</a></li>
      </ul>
    </center>
  </nav>  
</header>

<div class="vraag-container">
  <h5>Inleiding</h5>
  <div id="inleiding"><?= htmlspecialchars($recset[0]['inleiding'] ?? 'No data', ENT_QUOTES, 'UTF-8') ?></div>
  <h5>Vraag</h5>
  <div id="vraag"><?= htmlspecialchars($recset[0]['vraag'] ?? 'No data', ENT_QUOTES, 'UTF-8') ?></div>
  <h5>Antwoord</h5>
  <div class="input-group mb-3">
    <span class="input-group-text" id="eenheid"><?= $recset[0]['eenheid'] ?? '' ?></span>
    <input id="inp_ant" type="text" class="form-control antwoord">
    <input type="hidden" id="hidden_antwoord" value="<?= htmlspecialchars($recset[0]['antwoord'] ?? 'No data', ENT_QUOTES, 'UTF-8') ?>">
  </div>
  <div class="buttons mb-3">
    <button id="checkAntwoord" class="btn btn-success">Controleer</button>
    <a href="index.php">
      <button id="new-som-btn" class="btn btn-success">Nieuwe som</button>
    </a>
  </div>
  <div>
  <?php if (!empty($recset[0]['afbeelding'])): ?>
    <img id="images" src="images/<?= htmlspecialchars($recset[0]['afbeelding'], ENT_QUOTES, 'UTF-8') ?>" alt="">
  <?php endif; ?>
</div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-3">
      <div id="cards" class="card mb-3">
        <div class="card-header">Oud</div>
        <div class="card-body">
          <ul class="list-unstyled">
            <li>zonder of exclusief BTW</li>
            <li>zonder of exclusief korting</li>
          </ul>
        </div>
        <div class="card-footer text-body-secondary">
          <input id="inp_oud" class="form-control is-invalid" onchange="checkInformation()">
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="custom-container">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4"></div>
          <div class="col-4"></div>
        </div>
        <div class="row">
          <div class="col">
            <select id="select_soort" class="form-select mt-4 mb-3 is-invalid" onchange="checkInformation()">
              <option value="" selected>Kies....</option>
              <option value="1">van</option>
              <option value="2">toename</option>
              <option value="3">afname</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">Percentage</span>
              <input id="inp_perc" type="text" class="form-control is-invalid" onchange="checkInformation()">
              <span class="input-group-text">%</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">Vermenigvuldigingsfactor</span>
              <input id="inp_factor" type="text" class="form-control" disabled>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="db/pijlen.avif" alt="" class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">Deelfactor</span>
              <input id="inp_deler" type="text" class="form-control" disabled>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="d-grid">
              <button id="losop_btn" type="button" class="btn btn-success" disabled onClick="solveProblem()">Los op</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div id="cards" class="card mb-3">
        <div class="card-header">Nieuw</div>
        <div class="card-body">
          <ul class="list-unstyled">
            <li>met of inclusief BTW</li>
            <li>met of inclusief korting</li>
          </ul>
        </div>
        <div class="card-footer text-body-secondary">
          <input id="inp_nieuw" class="form-control is-invalid" onchange="checkInformation()">
        </div>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script>
<script>
  document.getElementById('checkAntwoord').addEventListener('click', function() {
    // Get the user input value
    var userInput = document.getElementById('inp_ant');
    // Get the hidden antwoord value
    var correctAntwoord = document.getElementById('hidden_antwoord').value;

    // Check if the user input matches the correct antwoord
    if (userInput.value == correctAntwoord) {
      userInput.classList.remove("is-invalid");
      userInput.classList.add("is-valid");
    } else {
      userInput.classList.remove("is-valid");
      userInput.classList.add("is-invalid");
    }
  });
</script>
</body>
</html>
