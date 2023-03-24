<?php
session_start();

include("config.php");

$id = $_SESSION['id'];

$aniolki = $_POST['aniolki'];
$start_sumaWyniku = $_POST['start_sumaWyniku'];
$sumaWyniku = $_POST['sumaWyniku'];
$wynik = $_POST['wynik'];
$budynekIlosc = $_POST['budynekIlosc'];
$budynekMnoznik = $_POST['budynekMnoznik'];
$budynekKoszt = $_POST['budynekKoszt'];
$upgradeKupione = $_POST['upgradeKupione'];
$lodziarnia = $_POST['lodziarnia'];
$piekarnia = $_POST['piekarnia'];
$cukiernia = $_POST['cukiernia'];
$kawiarnia = $_POST['kawiarnia'];
$galeria_handlowa = $_POST['galeria_handlowa'];
$przemysl_alkoholowy = $_POST['przemysl_alkoholowy'];
$wytwornia_anime = $_POST['wytwornia_anime'];
$druzyna_esportowa = $_POST['druzyna_esportowa'];
$plantacja_ziola = $_POST['plantacja_ziola'];
$fabryka_broni_palnej = $_POST['fabryka_broni_palnej'];

$sql = "INSERT INTO dane (id_user, aniolki, start_sumaWyniku, sumaWyniku, wynik, budynekIlosc, budynekMnoznik, budynekKoszt, 
upgradeKupione, lodziarnia, piekarnia, cukiernia, kawiarnia, galeria_handlowa, przemysl_alkoholowy, wytwornia_anime, 
druzyna_esportowa, plantacja_ziola, fabryka_broni_palnej) VALUES ($id, $aniolki, $start_sumaWyniku, $sumaWyniku, $wynik, 
'$budynekIlosc', '$budynekMnoznik', '$budynekKoszt', '$upgradeKupione', '$lodziarnia', '$piekarnia', '$cukiernia', 
'$kawiarnia', '$galeria_handlowa', '$przemysl_alkoholowy', '$wytwornia_anime', '$druzyna_esportowa', '$plantacja_ziola', 
'$fabryka_broni_palnej') ON DUPLICATE KEY UPDATE id_user=$id, aniolki=$aniolki, start_sumaWyniku=$start_sumaWyniku, 
sumaWyniku=$sumaWyniku, wynik=$wynik, budynekIlosc='$budynekIlosc', budynekMnoznik='$budynekMnoznik', budynekKoszt='$budynekKoszt', 
upgradeKupione='$upgradeKupione', lodziarnia='$lodziarnia', piekarnia='$piekarnia', cukiernia='$cukiernia', 
kawiarnia='$kawiarnia', galeria_handlowa='$galeria_handlowa', przemysl_alkoholowy='$przemysl_alkoholowy', 
wytwornia_anime='$wytwornia_anime', druzyna_esportowa='$druzyna_esportowa', plantacja_ziola='$plantacja_ziola', 
fabryka_broni_palnej='$fabryka_broni_palnej'";

$zapytanie = $link -> query($sql);

if($zapytanie) {
    header("Location: gra.php");
} else {
    echo "Cos jeblo w trakcie zapisywania danych";
}

?>