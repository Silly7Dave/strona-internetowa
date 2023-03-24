-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 30 Lis 2021, 19:07
-- Wersja serwera: 10.4.18-MariaDB
-- Wersja PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `docker`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dane`
--

CREATE TABLE `dane` (
  `id_user` int(11) NOT NULL,
  `aniolki` bigint(20) NOT NULL,
  `start_sumaWyniku` bigint(20) UNSIGNED NOT NULL,
  `sumaWyniku` bigint(20) UNSIGNED NOT NULL,
  `wynik` bigint(20) UNSIGNED NOT NULL,
  `budynekIlosc` text COLLATE utf8_polish_ci NOT NULL,
  `budynekMnoznik` text COLLATE utf8_polish_ci NOT NULL,
  `budynekKoszt` text COLLATE utf8_polish_ci NOT NULL,
  `upgradeKupione` text COLLATE utf8_polish_ci NOT NULL,
  `lodziarnia` text COLLATE utf8_polish_ci NOT NULL,
  `piekarnia` text COLLATE utf8_polish_ci NOT NULL,
  `cukiernia` text COLLATE utf8_polish_ci NOT NULL,
  `kawiarnia` text COLLATE utf8_polish_ci NOT NULL,
  `galeria_handlowa` text COLLATE utf8_polish_ci NOT NULL,
  `przemysl_alkoholowy` text COLLATE utf8_polish_ci NOT NULL,
  `wytwornia_anime` text COLLATE utf8_polish_ci NOT NULL,
  `druzyna_esportowa` text COLLATE utf8_polish_ci NOT NULL,
  `plantacja_ziola` text COLLATE utf8_polish_ci NOT NULL,
  `fabryka_broni_palnej` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `dane`
--

INSERT INTO `dane` (`id_user`, `aniolki`, `start_sumaWyniku`, `sumaWyniku`, `wynik`, `budynekIlosc`, `budynekMnoznik`, `budynekKoszt`, `upgradeKupione`, `lodziarnia`, `piekarnia`, `cukiernia`, `kawiarnia`, `galeria_handlowa`, `przemysl_alkoholowy`, `wytwornia_anime`, `druzyna_esportowa`, `plantacja_ziola`, `fabryka_broni_palnej`) VALUES
(1, 0, 0, 1719988824, 400506384, '181,50,50,26,25,7,7,5,0,0', '8,4,4,2,2,1,1,1,1,1', '2260121,67849,506408,207362,1762626,2583079,29094195,275658393,2149908480,25798901760', 'true,true,true,true,true,true,false,false,false,false,false', 'true,true,true,false,false,false,false,false,false,false', 'true,true,false,false,false,false,false,false,false,false', 'true,true,false,false,false,false,false,false,false,false', 'true,false,false,false,false,false,false,false,false,false', 'true,false,false,false,false,false,false,false,false,false', 'false,false,false,false,false,false,false,false,false,false', 'false,false,false,false,false,false,false,false,false,false', 'false,false,false,false,false,false,false,false,false,false', 'false,false,false,false,false,false,false,false,false,false', 'false,false,false,false,false,false,false,false,false,false');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'dawid', '$2y$10$NT/vLqavcfYNms/MUrywrufJvCW1GwTQlFAzn/5nkr92qp7ianVu.', '2021-11-23 15:41:42');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `dane`
--
ALTER TABLE `dane`
  ADD PRIMARY KEY (`id_user`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `dane`
--
ALTER TABLE `dane`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
