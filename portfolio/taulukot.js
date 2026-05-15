var numerot = [
  8, 3, 55, 420, 1,
  -5, 69, -999, 0, 321
];

var sanat = [
  "skibidi",
  "rizz",
  "gyat",
  "sigma",
  "sus",
  "cap",
  "yeet",
  "lit",
  "simp",
  "cringe"
];



function poimiElementti() {

  let numero =
    Number(document.getElementById("numero1").value);

  document.getElementById("vastaus1").innerHTML =
    sanat[numero];

}



function loydaIndeksi() {

  let sana =
    document.getElementById("sana").value;

  document.getElementById("vastaus2").innerHTML =
    sanat.indexOf(sana);

}



function leikkaaTaulukko() {

  let alku =
    Number(document.getElementById("alku").value);

  let loppu =
    Number(document.getElementById("loppu").value);

  let osat =
    sanat.slice(alku, loppu);

  document.getElementById("vastaus3").innerHTML =
    "";



  osat.forEach(function(sana) {

    document.getElementById("vastaus3").innerHTML +=
      "<li>" + sana + "</li>";

  });

}



function tulostaTekstit() {

  document.getElementById("vastaus4").innerHTML =
    "";



  sanat.forEach(function(sana) {

    document.getElementById("vastaus4").innerHTML +=
      "<li>" + sana + "</li>";

  });

}



function jarjestaTekstit() {

  sanat.sort();

}



function kaannaTekstit() {

  sanat.reverse();

}



function tulostaNumerot() {

  document.getElementById("vastaus4").innerHTML =
    "";



  numerot.forEach(function(numero) {

    document.getElementById("vastaus4").innerHTML +=
      "<li>" + numero + "</li>";

  });

}



function jarjestaNumerot() {

  numerot.sort(function(a, b) {

    return a - b;

  });

}



function kaannaNumerot() {

  numerot.reverse();

}



function tulostaSuodatus() {

  document.getElementById("vastaus5").innerHTML =
    "";



  numerot.forEach(function(numero) {

    document.getElementById("vastaus5").innerHTML +=
      "<li>" + numero + "</li>";

  });

}



function valitsePienemmat() {

  let luku =
    Number(document.getElementById("suodatus").value);

  numerot = numerot.filter(function(numero) {

    return numero < luku;

  });

}



function valitseSuuremmat() {

  let luku =
    Number(document.getElementById("suodatus").value);

  numerot = numerot.filter(function(numero) {

    return numero > luku;

  });

}