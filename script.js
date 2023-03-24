var gra = {
  wynik: graVar.wynik,
  sumaWyniku: graVar.sumaWyniku,
  start_sumaWyniku: graVar.start_sumaWyniku,
  aniolki: graVar.aniolki,

  dodajWynik: function(ilosc) {
    this.wynik += ilosc;
    this.sumaWyniku += ilosc;
    display.zaktualizujWynik();
  },

  zobaczWynikNaSekunde: function() {
    var wynikNaSekunde = 0;
    for (i = 0; i < budynek.nazwa.length; i++) {
      wynikNaSekunde += Math.ceil((budynek.przychod[i] * budynek.ilosc[i] * budynek.mnoznik[i] * (this.aniolki * 0.02 + 1))/budynek.balansGry[i]);
    }
    return wynikNaSekunde;
  }
};

var budynek = {
  nazwa: [
    "Lodziarnia",
    "Piekarnia",
    "Cukiernia",
    "Kawiarnia",
    "Galeria Handlowa",
    "Przemysł Alkoholowy",
    "Wytwórnia Anime",
    "Drużyna E-sportowa",
    "Plantacje Zioła",
    "Fabryka Broni Palnej"
  ],
  obrazek: [
    "images/lody/lody.png",
    "images/chleb/chleb.png",
    "images/drozdzowka/drozdzowka.png",
    "images/kawa/kawa.png",
    "images/leclerc/leclerc.png",
    "images/piwo/piwo.png",
    "images/anime/anime.png",
    "images/esport/esport.png",
    "images/ziolo/ziolo.png",
    "images/bron/bron.png"
  ],
  ilosc: budynekVar.ilosc,
  przychod: [
    1,
    60,
    540,
    4320,
    51840,
    622080,
    7464960,
    89579520,
    1074954240,
    29668737024
  ],
  koszt: budynekVar.koszt,
  inflacja: [
    1.07,
    1.15,
    1.14,
    1.13,
    1.12,
    1.11,
    1.10,
    1.09,
    1.08,
    1.07
  ],
  balansGry: [
    1,
    3,
    6,
    12,
    24,
    96,
    384,
    1536,
    6144,
    36864
  ],
  mnoznik: budynekVar.mnoznik,

  kup: function(index) {
    if(gra.wynik >= this.koszt[index]) {
      gra.wynik -= this.koszt[index];
      this.ilosc[index]++;
      this.koszt[index] = Math.ceil(this.koszt[index] * this.inflacja[index]);
      display.zaktualizujWynik();
      display.zaktualizujSklep();
    }
  }
};

var upgrade = {
  nazwa: [
    "Ice Cream Truck",
    "Piekarz Marek",
    "Lukier Jasia i Małgosi",
    "Brodaty Barista",
    "Pozbycie się długów Klapka",
    "Degustator Knutelski",
    "Gupia Chinka",
    "Prawdziwy gracz",
    "Pracownik Miesiąca - Wiktor",
    "Ucieczka z Afganistanu",
    "Święty Graal"
  ],
  opis: [
    "Przychód Lodziarni x3",
    "Przychód Piekarni x3",
    "Przychód Cukierni x3",
    "Przychód Kawiarni x3",
    "Przychód Galerii Handlowej x3",
    "Przychód Przemysłu Alkoholowego x3",
    "Przychód Wytwórnii Anime x3",
    "Przychód Drużyny E-sportowej x3",
    "Przychód Plantacji Zioła x3",
    "Przychód Fabryki Broni Palnej x3",
    "Przychód WSZYSTKIEGO x3"
  ],
  obrazek: [
    "images/lodziara.jpg",
    "images/piekarz.jpg",
    "images/lukier.jpg",
    "images/jasior.jpg",
    "images/policja.jpg",
    "images/maciek.jpg",
    "images/chinka.jpg",
    "images/dudus.jpg",
    "images/wiktor.jpg",
    "images/ucieczka.png",
    "images/graal.jpg"
  ],
  obrazekOK: [
    "images/lodziaraOK.jpg",
    "images/piekarzOK.jpg",
    "images/lukierOK.jpg",
    "images/jasiorOK.jpg",
    "images/policjaOK.jpg",
    "images/maciekOK.jpg",
    "images/chinkaOK.jpg",
    "images/dudusOK.jpg",
    "images/wiktorOK.jpg",
    "images/ucieczkaOK.png",
    "images/graalOK.jpg"
  ],
  koszt: [
    250000,
    500000,
    1000000,
    5000000,
    10000000,
    25000000,
    500000000,
    10000000000,
    50000000000,
    250000000000,
    1000000000000
  ],
  indexBudynku: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  kupione: upgradeVar.kupione,

  kupno: function(index) {
    if (!this.kupione[index] && gra.wynik >= this.koszt[index]) {
      gra.wynik -= this.koszt[index];
      if (index == 11) {
        for(i = 0; i <= 11; i++) {
          budynek.przychod[this.indexBudynku[i]] *= this.bonus[index];
        }

      } else budynek.przychod[this.indexBudynku[index]] *= 3;
      this.kupione[index] = true;

      display.zaktualizujUlepszenia();
      display.zaktualizujWynik();
    }
  }
};

var osiagniecia = {
    lodziarnia: {
    nazwa: [
      "Mleko zamiast wody",
      "Rożki bez GMO",
      "Prawdziwe produkty (nie Danonki)",
      "Dodatkowe smaki",
      "Serduszko powyżej 5zł",
      "Wegańskie lody",
      "Lody Zdrowa Maja strażnik Mikołaja",
      "Mrozi",
      "Basia zaprasza klientów",
      "Nowa lodówka POGCHAMP!!1!",
      "Religia Lodów Żarneckiego",
      "Władca Lodów - Klapek"
      ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x4",
      "Profit x4",
      "Profit x4",
      "Profit x4",
      "Profit x4",
      "Profit x5"
      ],
      mnoznik: [2,2,2,2,2,2,4,4,4,4,4,5],
    obrazek: [
      "images/lody/lody25.png",
      "images/lody/lody50.png",
      "images/lody/lody100.png",
      "images/lody/lody200.png",
      "images/lody/lody300.png",
      "images/lody/lody400.png",
      "images/lody/lody500.png",
      "images/lody/lody600.png",
      "images/lody/lody700.png",
      "images/lody/lody800.png",
      "images/lody/lody900.png",
      "images/lody/lody1000.png"
      ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [0],
    zyskane: osiagnieciaVar.lodziarnia.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  piekarnia: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit Piekarni x2",
      "Profit Piekarni x2",
      "Profit Piekarni x2",
      "Profit Lodów x2",
      "Profit Cukierni x2",
      "Profit Kawiarni x2",
      "Profit Piekarni x2",
      "Profit Galerii Handlowej x2",
      "Profit Lodów x3",
      "Profit Cukierni x3",
      "Profit Piekarni x2",
      "Profit Kawiarni x3",
      "Profit Galerii Handlowej x3",
      "Profit Lodów x4",
      "Profit Piekarni x2",
      "Profit Cukierni x4",
      "Profit Kawiarni x4",
      "Profit Galerii Handlowej x4",
      "Profit Przemysłu Alkoholowego x11",
      "Profit Lodów x5",
      "Profit Cukierni x5",
      "Profit Kawiarni x5",
      "Profit Wytwórnii Anime x11",
      "Profit Galerii Handlowej x5",
      "Profit Lodów x6",
      "Profit Cukierni x6",
      "Profit Drużyny Esportowej x11",
      "Profit Kawiarni x6",
      "Profit Galerii Handlowej x6",
      "Profit Lodów x3",
      "Profit Plantacji Zioła x11",
      "Profit Cukierni x7",
      "Profit Kawiarni x7",
      "Profit Galerii Handlowej x7",
      "Profit Fabryki Broni Palnej x11",
      "Profit Przemysłu Alkoholowego x7",
      "Profit Wytwórnii Anime x7",
      "Profit Drużyny Esportowej x7",
      "Profit Piekarni ×7777777"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,3,3,2,3,3,4,2,4,4,4,11,5,5,5,11,5,6,6,11,6,6,3,11,7,7,7,11,7,7,7,7777777],
    obrazek: [
      "images/chleb/chleb25.png",
      "images/chleb/chleb50.png",
      "images/chleb/chleb100.png",
      "images/chleb/chleb125.png",
      "images/chleb/chleb150.png",
      "images/chleb/chleb175.png",
      "images/chleb/chleb200.png",
      "images/chleb/chleb225.png",
      "images/chleb/chleb250.png",
      "images/chleb/chleb275.png",
      "images/chleb/chleb300.png",
      "images/chleb/chleb325.png",
      "images/chleb/chleb350.png",
      "images/chleb/chleb375.png",
      "images/chleb/chleb400.png",
      "images/chleb/chleb425.png",
      "images/chleb/chleb450.png",
      "images/chleb/chleb475.png",
      "images/chleb/chleb500.png",
      "images/chleb/chleb525.png",
      "images/chleb/chleb550.png",
      "images/chleb/chleb575.png",
      "images/chleb/chleb600.png",
      "images/chleb/chleb625.png",
      "images/chleb/chleb650.png",
      "images/chleb/chleb675.png",
      "images/chleb/chleb700.png",
      "images/chleb/chleb725.png",
      "images/chleb/chleb750.png",
      "images/chleb/chleb775.png",
      "images/chleb/chleb800.png",
      "images/chleb/chleb825.png",
      "images/chleb/chleb850.png",
      "images/chleb/chleb875.png",
      "images/chleb/chleb900.png",
      "images/chleb/chleb925.png",
      "images/chleb/chleb950.png",
      "images/chleb/chleb975.png",
      "images/chleb/chleb1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      125,
      150,
      175,
      200,
      225,
      250,
      275,
      300,
      325,
      350,
      375,
      400,
      425,
      450,
      475,
      500,
      525,
      550,
      575,
      600,
      625,
      650,
      675,
      700,
      725,
      750,
      775,
      800,
      825,
      850,
      875,
      900,
      925,
      950,
      975,
      1000
      ],
    indexBudynku: [1],
    zyskane: osiagnieciaVar.piekarnia.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  cukiernia: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/drozdzowka/drozdzowka25.png",
      "images/drozdzowka/drozdzowka50.png",
      "images/drozdzowka/drozdzowka100.png",
      "images/drozdzowka/drozdzowka200.png",
      "images/drozdzowka/drozdzowka300.png",
      "images/drozdzowka/drozdzowka400.png",
      "images/drozdzowka/drozdzowka500.png",
      "images/drozdzowka/drozdzowka600.png",
      "images/drozdzowka/drozdzowka700.png",
      "images/drozdzowka/drozdzowka800.png",
      "images/drozdzowka/drozdzowka900.png",
      "images/drozdzowka/drozdzowka1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [2],
    zyskane: osiagnieciaVar.cukiernia.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  kawiarnia: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/kawa/kawa25.png",
      "images/kawa/kawa50.png",
      "images/kawa/kawa100.png",
      "images/kawa/kawa200.png",
      "images/kawa/kawa300.png",
      "images/kawa/kawa400.png",
      "images/kawa/kawa500.png",
      "images/kawa/kawa600.png",
      "images/kawa/kawa700.png",
      "images/kawa/kawa800.png",
      "images/kawa/kawa900.png",
      "images/kawa/kawa1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [3],
    zyskane: osiagnieciaVar.kawiarnia.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  galeria_handlowa: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/leclerc/leclerc25.png",
      "images/leclerc/leclerc50.png",
      "images/leclerc/leclerc100.png",
      "images/leclerc/leclerc200.png",
      "images/leclerc/leclerc300.png",
      "images/leclerc/leclerc400.png",
      "images/leclerc/leclerc500.png",
      "images/leclerc/leclerc600.png",
      "images/leclerc/leclerc700.png",
      "images/leclerc/leclerc800.png",
      "images/leclerc/leclerc900.png",
      "images/leclerc/leclerc1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [4],
    zyskane: osiagnieciaVar.galeria_handlowa.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  przemysl_alkoholowy: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/piwo/piwo25.png",
      "images/piwo/piwo50.png",
      "images/piwo/piwo100.png",
      "images/piwo/piwo200.png",
      "images/piwo/piwo300.png",
      "images/piwo/piwo400.png",
      "images/piwo/piwo500.png",
      "images/piwo/piwo600.png",
      "images/piwo/piwo700.png",
      "images/piwo/piwo800.png",
      "images/piwo/piwo900.png",
      "images/piwo/piwo1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [5],
    zyskane: osiagnieciaVar.przemysl_alkoholowy.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  wytwornia_anime: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/anime/anime25.png",
      "images/anime/anime50.png",
      "images/anime/anime100.png",
      "images/anime/anime200.png",
      "images/anime/anime300.png",
      "images/anime/anime400.png",
      "images/anime/anime500.png",
      "images/anime/anime600.png",
      "images/anime/anime700.png",
      "images/anime/anime800.png",
      "images/anime/anime900.png",
      "images/anime/anime1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [6],
    zyskane: osiagnieciaVar.wytwornia_anime.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  druzyna_esportowa: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/esport/esport25.png",
      "images/esport/esport50.png",
      "images/esport/esport100.png",
      "images/esport/esport200.png",
      "images/esport/esport300.png",
      "images/esport/esport400.png",
      "images/esport/esport500.png",
      "images/esport/esport600.png",
      "images/esport/esport700.png",
      "images/esport/esport800.png",
      "images/esport/esport900.png",
      "images/esport/esport1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [7],
    zyskane: osiagnieciaVar.druzyna_esportowa.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  plantacja_ziola: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/ziolo/ziolo25.png",
      "images/ziolo/ziolo50.png",
      "images/ziolo/ziolo100.png",
      "images/ziolo/ziolo200.png",
      "images/ziolo/ziolo300.png",
      "images/ziolo/ziolo400.png",
      "images/ziolo/ziolo500.png",
      "images/ziolo/ziolo600.png",
      "images/ziolo/ziolo700.png",
      "images/ziolo/ziolo800.png",
      "images/ziolo/ziolo900.png",
      "images/ziolo/ziolo1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [8],
    zyskane: osiagnieciaVar.plantacja_ziola.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  },

  fabryka_broni_palnej: {
    nazwa: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    opis: [
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x2",
      "Profit x3"
    ],
    mnoznik: [2,2,2,2,2,2,2,2,2,2,2,3],
    obrazek: [
      "images/bron/bron25.png",
      "images/bron/bron50.png",
      "images/bron/bron100.png",
      "images/bron/bron200.png",
      "images/bron/bron300.png",
      "images/bron/bron400.png",
      "images/bron/bron500.png",
      "images/bron/bron600.png",
      "images/bron/bron700.png",
      "images/bron/bron800.png",
      "images/bron/bron900.png",
      "images/bron/bron1000.png"
    ],
    wymagania: [
      25,
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000
      ],
    indexBudynku: [9],
    zyskane: osiagnieciaVar.fabryka_broni_palnej.zyskane,
    dajOsiagniecie: function(index) {
      if(this.zyskane[index] == false){
        this.zyskane[index] = true;
        budynek.mnoznik[this.indexBudynku] *= this.mnoznik[index];
      }
    }
  }
}

var display = {
  zaktualizujWynik: function() {
    document.getElementById("wynik").innerHTML = fix(gra.wynik, 2);
    document.getElementById("wynikNaSekunde").innerHTML = fix(gra.zobaczWynikNaSekunde(), 2);
    document.title = "$" + fix(gra.wynik, 2) + " - Symulator ?arneckiego";
  },

  zaktualizujSklep: function() {
    document.getElementById("sekcjaSklepu").innerHTML = "";
    for (i = 0; i < budynek.nazwa.length; i++) {
      document.getElementById("sekcjaSklepu").innerHTML += '<table class="przyciskSklepu" onclick="budynek.kup('+i+')"><tr><td id="obrazek"><img src="'+budynek.obrazek[i]+'"></td><td id="nazwaAndKoszt"><p>'+budynek.nazwa[i]+'</p><p>$<span>'+fix(budynek.koszt[i], 2)+'</span></p></td><td id="ilosc"><span>'+budynek.ilosc[i]+'</span></td></tr></table>';
    }
  },

  zaktualizujUlepszenia: function() {
    document.getElementById("sekcjaUpgrade").innerHTML = "";
    for(i = 0; i < upgrade.nazwa.length; i++) {
      if(!upgrade.kupione[i]) {
        if(gra.wynik >= upgrade.koszt[i]) {
          document.getElementById("sekcjaUpgrade").innerHTML += '<img src="'+upgrade.obrazekOK[i]+'" title="'+upgrade.nazwa[i]+' &#10; '+upgrade.opis[i]+' &#10; ($'+fix(upgrade.koszt[i], 2)+')" onclick="upgrade.kupno('+i+')">';
        }
      } else {
          document.getElementById("sekcjaUpgrade").innerHTML += '<img src="'+upgrade.obrazek[i]+'" title="(ZDOBYTE!!1!) &#10; '+upgrade.nazwa[i]+' &#10; '+upgrade.opis[i]+'">';
      }
    }
  },

  zaktualizujOsiagniecia: function() {
    document.getElementById("sekcjaOsiagniec").innerHTML = "";

    //lody
    for (i = 0; i < osiagniecia.lodziarnia.nazwa.length; i++) {
      if(osiagniecia.lodziarnia.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.lodziarnia.obrazek[i]+'" title="'+osiagniecia.lodziarnia.nazwa[i]+' &#10; '+osiagniecia.lodziarnia.opis[i]+'">';
      }
    }

    //piekarnia
    for (i = 0; i < osiagniecia.piekarnia.nazwa.length; i++) {
      if(osiagniecia.piekarnia.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.piekarnia.obrazek[i]+'" title="'+osiagniecia.piekarnia.nazwa[i]+' &#10; '+osiagniecia.piekarnia.opis[i]+'">';
      }
    }

    //cukiernia
    for (i = 0; i < osiagniecia.cukiernia.nazwa.length; i++) {
      if(osiagniecia.cukiernia.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.cukiernia.obrazek[i]+'" title="'+osiagniecia.cukiernia.nazwa[i]+' &#10; '+osiagniecia.cukiernia.opis[i]+'">';
      }
    }

    //kawiarnia
    for (i = 0; i < osiagniecia.kawiarnia.nazwa.length; i++) {
      if(osiagniecia.kawiarnia.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.kawiarnia.obrazek[i]+'" title="'+osiagniecia.kawiarnia.nazwa[i]+' &#10; '+osiagniecia.kawiarnia.opis[i]+'">';
      }
    }

    //galeria handlowa
    for (i = 0; i < osiagniecia.galeria_handlowa.nazwa.length; i++) {
      if(osiagniecia.galeria_handlowa.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.galeria_handlowa.obrazek[i]+'" title="'+osiagniecia.galeria_handlowa.nazwa[i]+' &#10; '+osiagniecia.galeria_handlowa.opis[i]+'">';
      }
    }

    //alkohol
    for (i = 0; i < osiagniecia.przemysl_alkoholowy.nazwa.length; i++) {
      if(osiagniecia.przemysl_alkoholowy.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.przemysl_alkoholowy.obrazek[i]+'" title="'+osiagniecia.przemysl_alkoholowy.nazwa[i]+' &#10; '+osiagniecia.przemysl_alkoholowy.opis[i]+'">';
      }
    }

    //anime
    for (i = 0; i < osiagniecia.wytwornia_anime.nazwa.length; i++) {
      if(osiagniecia.wytwornia_anime.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.wytwornia_anime.obrazek[i]+'" title="'+osiagniecia.wytwornia_anime.nazwa[i]+' &#10; '+osiagniecia.wytwornia_anime.opis[i]+'">';
      }
    }

    //esport
    for (i = 0; i < osiagniecia.druzyna_esportowa.nazwa.length; i++) {
      if(osiagniecia.druzyna_esportowa.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.druzyna_esportowa.obrazek[i]+'" title="'+osiagniecia.druzyna_esportowa.nazwa[i]+' &#10; '+osiagniecia.druzyna_esportowa.opis[i]+'">';
      }
    }

    //zioło
    for (i = 0; i < osiagniecia.plantacja_ziola.nazwa.length; i++) {
      if(osiagniecia.plantacja_ziola.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.plantacja_ziola.obrazek[i]+'" title="'+osiagniecia.plantacja_ziola.nazwa[i]+' &#10; '+osiagniecia.plantacja_ziola.opis[i]+'">';
      }
    }

    //broń
    for (i = 0; i < osiagniecia.fabryka_broni_palnej.nazwa.length; i++) {
      if(osiagniecia.fabryka_broni_palnej.zyskane[i]) {
        document.getElementById("sekcjaOsiagniec").innerHTML += '<img src="'+osiagniecia.fabryka_broni_palnej.obrazek[i]+'" title="'+osiagniecia.fabryka_broni_palnej.nazwa[i]+' &#10; '+osiagniecia.fabryka_broni_palnej.opis[i]+'">';
      }
    }
  }
}

setInterval (function(anonymous) {
    
  //lody
  for (i = 0; i < osiagniecia.lodziarnia.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.lodziarnia.indexBudynku] >= osiagniecia.lodziarnia.wymagania[i])osiagniecia.lodziarnia.dajOsiagniecie(i);
  }

  //piekarnia
  for (i = 0; i < osiagniecia.piekarnia.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.piekarnia.indexBudynku] >= osiagniecia.piekarnia.wymagania[i]) osiagniecia.piekarnia.dajOsiagniecie(i);
  }

  //cukiernia
  for (i = 0; i < osiagniecia.cukiernia.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.cukiernia.indexBudynku] >= osiagniecia.cukiernia.wymagania[i]) osiagniecia.cukiernia.dajOsiagniecie(i);
  }

  //kawiarnia
  for (i = 0; i < osiagniecia.kawiarnia.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.kawiarnia.indexBudynku] >= osiagniecia.kawiarnia.wymagania[i]) osiagniecia.kawiarnia.dajOsiagniecie(i);
  }

  //galeria_handlowa
  for (i = 0; i < osiagniecia.galeria_handlowa.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.galeria_handlowa.indexBudynku] >= osiagniecia.galeria_handlowa.wymagania[i]) osiagniecia.galeria_handlowa.dajOsiagniecie(i);
  }

  //przemysl_alkoholowy
  for (i = 0; i < osiagniecia.przemysl_alkoholowy.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.przemysl_alkoholowy.indexBudynku] >= osiagniecia.przemysl_alkoholowy.wymagania[i]) osiagniecia.przemysl_alkoholowy.dajOsiagniecie(i);
  }

  //anime
  for (i = 0; i < osiagniecia.wytwornia_anime.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.wytwornia_anime.indexBudynku] >= osiagniecia.wytwornia_anime.wymagania[i]) osiagniecia.wytwornia_anime.dajOsiagniecie(i);
  }

  //esport
  for (i = 0; i < osiagniecia.druzyna_esportowa.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.druzyna_esportowa.indexBudynku] >= osiagniecia.druzyna_esportowa.wymagania[i]) osiagniecia.druzyna_esportowa.dajOsiagniecie(i);
  }

  //zioło
  for (i = 0; i < osiagniecia.plantacja_ziola.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.plantacja_ziola.indexBudynku] >= osiagniecia.plantacja_ziola.wymagania[i]) osiagniecia.plantacja_ziola.dajOsiagniecie(i);
  }

  //broń
  for (i = 0; i < osiagniecia.fabryka_broni_palnej.nazwa.length; i++) {
    if(budynek.ilosc[osiagniecia.fabryka_broni_palnej.indexBudynku] >= osiagniecia.fabryka_broni_palnej.wymagania[i]) osiagniecia.fabryka_broni_palnej.dajOsiagniecie(i);
  }

  gra.wynik += gra.zobaczWynikNaSekunde();
  gra.sumaWyniku += gra.zobaczWynikNaSekunde();
  display.zaktualizujWynik();
  display.zaktualizujUlepszenia();
  display.zaktualizujOsiagniecia();
}, 1000);

setInterval (function(anonymous) {
  setValue();
}, 300000);

function dajAniolki() {
  var aniolki_przyklad = gra.sumaWyniku / (400000000000 / 9) ^ 0.5 - gra.start_sumaWyniku / (400000000000 / 9) ^ 0.5;

  if (confirm('Czy jesteś pewien, że chcesz zresetować grę?')) {
    gra.aniolki = aniolki_przyklad;
    gra.start_sumaWyniku = gra.sumaWyniku;
    gra.wynik = 0;
    budynek.ilosc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    budynek.mnoznik = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    budynek.koszt = [
      4,
      60,
      720,
      8640,
      103680,
      1244160,
      14929920,
      179159040,
      2149908480,
      25798901760
    ];
    upgrade.kupione = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    osiagniecia.lodziarnia.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
    osiagniecia.piekarnia.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.cukiernia.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.kawiarnia.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.galeria_handlowa.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.przemysl_alkoholowy.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.wytwornia_anime.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.druzyna_esportowa.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.plantacja_ziola.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      osiagniecia.fabryka_broni_palnej.zyskane = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
      ];
      display.zaktualizujSklep();
      display.zaktualizujWynik();
      display.zaktualizujUlepszenia();
      display.zaktualizujOsiagniecia();
      modal.style.display = "none";
    } else {
      console.log("To spierdalaj")
  }
  
  
}

function setValue() {
  document.getElementById("form_1").value = gra.aniolki;
  document.getElementById("form_2").value = gra.start_sumaWyniku;
  document.getElementById("form_3").value = gra.sumaWyniku;
  document.getElementById("form_4").value = gra.wynik;
  document.getElementById("form_5").value = budynek.ilosc;
  document.getElementById("form_6").value = budynek.mnoznik;
  document.getElementById("form_7").value = budynek.koszt;
  document.getElementById("form_8").value = upgrade.kupione;
  document.getElementById("form_9").value = osiagniecia.lodziarnia.zyskane;
  document.getElementById("form_10").value = osiagniecia.piekarnia.zyskane;
  document.getElementById("form_11").value = osiagniecia.cukiernia.zyskane;
  document.getElementById("form_12").value = osiagniecia.kawiarnia.zyskane;
  document.getElementById("form_13").value = osiagniecia.galeria_handlowa.zyskane;
  document.getElementById("form_14").value = osiagniecia.przemysl_alkoholowy.zyskane;
  document.getElementById("form_15").value = osiagniecia.wytwornia_anime.zyskane;
  document.getElementById("form_16").value = osiagniecia.druzyna_esportowa.zyskane;
  document.getElementById("form_17").value = osiagniecia.plantacja_ziola.zyskane;
  document.getElementById("form_18").value = osiagniecia.fabryka_broni_palnej.zyskane;

  document.forms["formZapis"].submit();
}

window.onload = function() {
  display.zaktualizujSklep();
  display.zaktualizujWynik();
  display.zaktualizujUlepszenia();
  display.zaktualizujOsiagniecia();
};

function rozwijanie() {
  var osiagniecia = document.getElementById("sekcjaOsiagniec").style.display;

  if(osiagniecia == "none") {
    document.getElementById("sekcjaOsiagniec").style.display = "block";
    document.getElementById("sekcjaOsiagniec").style.animation = "fade-in 1s";
    document.getElementById("ikonka").innerHTML = "▼";
  } else {
    document.getElementById("sekcjaOsiagniec").style.animation = "fade-out 1s";
    document.getElementById("ikonka").innerHTML = "▲";
  }
}

document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
      e.target.classList.add('did-fade-in');
  }
});

document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
      e.target.classList.remove('did-fade-in');
      document.getElementById("sekcjaOsiagniec").style.display = "none";
   }
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";

  var przykladLuz = gra.sumaWyniku / (400000000000 / 9) ^ 0.5 - gra.start_sumaWyniku / (400000000000 / 9) ^ 0.5;

  document.getElementById("sumaInwest").innerHTML = fix(gra.aniolki, 0);
  document.getElementById("restartInwest").innerHTML = fix(przykladLuz, 0);
  document.getElementById("bonusInwest").innerHTML = "2%";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//(http://stackoverflow.com/a/10899795)
function numberWithCommas(n) {
  var parts=n.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function fix(x, n) {
if (x >= 1e9) {
  var z = Math.floor(logFloor(x)/3);
  var prefixes = ["Miliard", "Bilion", "Trylion", "Tryliard", "Kwadrylion", "Kwadryliard", "Kwintylion", "Kwintyliard", "Sekstylion", "Sekstyliard", "Septylion", "Septyliard", "Oktylion", "Oktyliard"];
  var s = fix(x/Math.pow(10,3*z),n);
  return s+" "+prefixes[z-3];	
}
return numberWithCommas(x.toFixed(n));
}

function logFloor(x) {
	var count = 0;
	while (x >= 10) {
		count++;
		x /= 10;
	}
	return count;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}