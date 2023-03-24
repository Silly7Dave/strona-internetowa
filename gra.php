<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Symulator ?arneckiego</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" type="image/x-icon" href="klapek.jpg">
  </head>
  <body>

    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <h1>Witaj <u><?php echo $_SESSION['username']; ?></u>!</h1>
      <a href="#" id="myBtn">Inwestorzy</a>
      <a href="#" onclick="setValue()">Zapisz grę<br><i>(autozapis co 5 min)</i></a>
      <br><br>
      <a href="https://drive.google.com/file/d/1u6pMti3fL0PDGWW90BAJBqL42dOu4Zoj/view?usp=sharing" target="_blank">Developer Team</a>
      <a href="https://youtu.be/qqniosoaXCA" target="_blank">Jak wygrać gre?</a>
      <br><br>
      <a href="logout.php" onclick="setValue()">Wyloguj</a>
      <a href="reset-password.php" onclick="setValue()">Ustaw nowe hasło</a>
    </div>

    <span style="font-size:30px;color:white;cursor:pointer;position:fixed;top:20px;left:20px;" onclick="openNav()">&#9776;</span>

    <div id="main">
      <div class="sekcjaLewo brakZaznaczenia">
        <div class="klapunio">
          <div class="sekcjaWynik">
            Zarobione pieniądze: $<span id="wynik">0</span><br>
            $<span id="wynikNaSekunde">0</span> na sekundę
          </div>
          <div class="sekcjaClicker" onclick="gra.dodajWynik(1)">
            <img src="images/klapekV2.png">
            <img src="images/klapekV2usmiech.png">
            <img src="images/klapekV2happy.png">
          </div>
        </div>
      </div>

      <div class="sekcjaSrodek">
        <div id="sekcjaUpgrade"></div>
        <div class="rozwijaneMenu">
          <div class="klikable brakZaznaczenia" onclick="rozwijanie()">Osiągnięcia <span id="ikonka">▲</span></div>
          <div style="display: none" id="sekcjaOsiagniec"></div>
        </div>
      </div>

      <div class="sekcjaPrawo brakZaznaczenia">
        <div id="sekcjaSklepu"></div>
      </div>

      

      <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Podhalańscy Inwestorzy</h2>
          </div>
          <div class="modal-body">
            <p>Turyści chcą na zawał te drożdzówki</p>
            <p>
              Im więcej pieniędzy zarabiasz, tym większą uwagę przyciągniesz Podhalańskich Inwestorów.
              Zwiększają oni Twoje przychody, ale musisz sprzedać wszystkie swoje interesy i zacząć wszystko od nowa.
              (Psst! Jest warto!)
            </p>
            <p>Suma inwestorów: <span id="sumaInwest"></span></p>
            <p>Zdobyci za restart: <span id="restartInwest"></span></p>
            <p>Bonus za każdego: <span id="bonusInwest"></span></p>
            <button type="button" class="btnAniolki" onclick="dajAniolki()">Zgarnij Podhalańskich Inwestorów</button>
          </div>
        </div>

      </div>
    </div>

    <form id="formZapis" method="post" name="zapis" action="zapis.php">
      <input type="hidden" name="aniolki" id="form_1">
      <input type="hidden" name="start_sumaWyniku" id="form_2">
      <input type="hidden" name="sumaWyniku" id="form_3">
      <input type="hidden" name="wynik" id="form_4">
      <input type="hidden" name="budynekIlosc" id="form_5">
      <input type="hidden" name="budynekMnoznik" id="form_6">
      <input type="hidden" name="budynekKoszt" id="form_7">
      <input type="hidden" name="upgradeKupione" id="form_8">
      <input type="hidden" name="lodziarnia" id="form_9">
      <input type="hidden" name="piekarnia" id="form_10">
      <input type="hidden" name="cukiernia" id="form_11">
      <input type="hidden" name="kawiarnia" id="form_12">
      <input type="hidden" name="galeria_handlowa" id="form_13">
      <input type="hidden" name="przemysl_alkoholowy" id="form_14">
      <input type="hidden" name="wytwornia_anime" id="form_15">
      <input type="hidden" name="druzyna_esportowa" id="form_16">
      <input type="hidden" name="plantacja_ziola" id="form_17">
      <input type="hidden" name="fabryka_broni_palnej" id="form_18">
    </form>
    
    

    <?php

      include("config.php");

      $query = "SELECT * FROM dane WHERE id_user={$_SESSION['id']} LIMIT 1";
      $row = mysqli_fetch_assoc($link->query($query));
      ?>
      <script>
        var graVar = {
          wynik: <?php echo $row['wynik'] ?? 0; ?>,
          sumaWyniku: <?php echo $row['sumaWyniku'] ?? 0; ?>,
          start_sumaWyniku: <?php echo $row['start_sumaWyniku'] ?? 0; ?>,
          aniolki: <?php echo $row['aniolki'] ?? 0; ?>,
        };
        var budynekVar = {
          ilosc: [<?php echo  $row['budynekIlosc'] ?? '0,0,0,0,0,0,0,0,0,0'; ?>],
          koszt: [<?php echo $row['budynekKoszt'] ?? '4,60,720,8640,103680,1244160,14929920,179159040,2149908480,25798901760'; ?>],
          mnoznik: [<?php echo $row['budynekMnoznik'] ?? '1,1,1,1,1,1,1,1,1,1'; ?>]
        };
        var upgradeVar = {
          kupione: [<?php echo $row['upgradeKupione'] ?? 'false,false,false,false,false,false,false,false,false,false,false'; ?>]
        };
        var osiagnieciaVar = {
          lodziarnia: {
          zyskane: [<?php echo $row['lodziarnia'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          piekarnia: {
          zyskane: [<?php echo $row['piekarnia'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          cukiernia: {
          zyskane: [<?php echo $row['cukiernia'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          kawiarnia: {
          zyskane: [<?php echo $row['kawiarnia'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          galeria_handlowa: {
          zyskane: [<?php echo $row['galeria_handlowa'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          przemysl_alkoholowy: {
          zyskane: [<?php echo $row['przemysl_alkoholowy'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          wytwornia_anime: {
          zyskane: [<?php echo $row['wytwornia_anime'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          druzyna_esportowa: {
          zyskane: [<?php echo $row['druzyna_esportowa'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          plantacja_ziola: {
          zyskane: [<?php echo $row['plantacja_ziola'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          },
          fabryka_broni_palnej: {
          zyskane: [<?php echo $row['fabryka_broni_palnej'] ?? 'false,false,false,false,false,false,false,false,false,false'; ?>],
          }
        };
      </script>

    <script src="script.js"></script>

  </body>
</html>