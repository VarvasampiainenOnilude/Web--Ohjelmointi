function poimiKirjain() {

  let teksti =
    document.getElementById("teksti1").value;

  let numero =
    Number(document.getElementById("numero1").value);

  document.getElementById("vastaus1").innerHTML =
    teksti[numero];

}



function loydaIndeksi() {

  let teksti =
    document.getElementById("teksti2").value;

  let hakusana =
    document.getElementById("hakusana").value;

  document.getElementById("vastaus2").innerHTML =
    teksti.indexOf(hakusana);

}



function leikkaaTeksti() {

  let teksti =
    document.getElementById("teksti3").value;

  let alku =
    Number(document.getElementById("alku").value);

  let loppu =
    Number(document.getElementById("loppu").value);

  document.getElementById("vastaus3").innerHTML =
    teksti.slice(alku, loppu);

}



function etsiJaKorvaa() {

  let teksti =
    document.getElementById("teksti4").value;

  let etsi =
    document.getElementById("etsi").value;

  let korvaa =
    document.getElementById("korvaa").value;

  document.getElementById("vastaus4").innerHTML =
    teksti.replaceAll(etsi, korvaa);

}



function poikkiJaPinoon() {

  let teksti =
    document.getElementById("teksti5").value;

  let jakaja =
    document.getElementById("jakaja").value;

  let osat =
    teksti.split(jakaja);

  document.getElementById("vastaus5").innerHTML =
    "";



  osat.forEach(function(osa) {

    document.getElementById("vastaus5").innerHTML +=
      "<li>" + osa + "</li>";

  });

}