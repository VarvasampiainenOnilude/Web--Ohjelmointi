function summa(x, y) {
    alert(x + y);
}

function vahennys(x, y) {
    alert(x - y);
}

function kerto(x, y) {
    alert(x * y);
}

function jako(x, y) {
    alert(x / y);
}

function laskin_summa() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    summa(eka, toka);
}

function laskin_vahennys() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    vahennys(eka, toka);
}

function laskin_kerto() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    kerto(eka, toka);
}

function laskin_jako() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    jako(eka, toka);
}

function naytaPaivamaara() {

  let nyt = new Date();

  let paiva = nyt.getDate();
  let kuukausiNumero = nyt.getMonth();
  let vuosi = nyt.getFullYear();

  let tunnit = nyt.getHours();
  let minuutit = nyt.getMinutes();
  let sekunnit = nyt.getSeconds();

  let viikonpaivat = [
    "sunnuntai",
    "maanantai",
    "tiistai",
    "keskiviikko",
    "torstai",
    "perjantai",
    "lauantai"
  ];

  let kuukaudet = [
    "tammikuu",
    "helmikuu",
    "maaliskuu",
    "huhtikuu",
    "toukokuu",
    "kesäkuu",
    "heinäkuu",
    "elokuu",
    "syyskuu",
    "lokakuu",
    "marraskuu",
    "joulukuu"
  ];

  let viikonpaiva = viikonpaivat[nyt.getDay()];
  let kuukausi = kuukaudet[kuukausiNumero];

  document.getElementById("paivamaara").innerHTML =
    paiva + "." + (kuukausiNumero + 1) + "." + vuosi;

  document.getElementById("aika").innerHTML =
    tunnit + "." + minuutit + "." + sekunnit;

  document.getElementById("paivaJaAika").innerHTML =
    paiva + "." + (kuukausiNumero + 1) + "." + vuosi +
    " klo " +
    tunnit + "." + minuutit + "." + sekunnit;

  document.getElementById("viikonpaiva").innerHTML =
    viikonpaiva;

  document.getElementById("kuukausi").innerHTML =
    kuukausi;
}

let Veijo = new Set([
  "luku",
  "poisto"
]);

let Elvira = new Set([
  "luku",
  "kirjoitus",
  "muokkaus"
]);

let Mehdi = new Set([
  "luku",
  "muokkaus",
  "poisto"
]);

let Tuuli = new Set([
  "kirjoitus",
  "poisto"
]);

function naytaOikeudet(kayttajaSetti, sectionId) {

  let ul = document.querySelector(
    "#" + sectionId + " ul"
  );

  kayttajaSetti.forEach(function(oikeus) {

    let li = document.createElement("li");

    li.textContent = oikeus;

    ul.appendChild(li);

  });
}

naytaOikeudet(Veijo, "Veijo");
naytaOikeudet(Elvira, "Elvira");
naytaOikeudet(Mehdi, "Mehdi");
naytaOikeudet(Tuuli, "Tuuli");



let veijoTuuliSetti = new Set([
  ...Veijo,
  ...Tuuli
]);

veijoTuuliSetti.forEach(function(oikeus) {

  let li = document.createElement("li");

  li.textContent = oikeus;

  document
    .getElementById("veijotuuli")
    .appendChild(li);

});



let yhteiset = new Set();

Mehdi.forEach(function(oikeus) {

  if(Elvira.has(oikeus)) {
    yhteiset.add(oikeus);
  }

});

yhteiset.forEach(function(oikeus) {

  let li = document.createElement("li");

  li.textContent = oikeus;

  document
    .getElementById("mehdielvira")
    .appendChild(li);

});



let eriOikeudet = new Set();

Elvira.forEach(function(oikeus) {

  if(!Tuuli.has(oikeus)) {
    eriOikeudet.add(oikeus);
  }

});

Tuuli.forEach(function(oikeus) {

  if(!Elvira.has(oikeus)) {
    eriOikeudet.add(oikeus);
  }

});

eriOikeudet.forEach(function(oikeus) {

  let li = document.createElement("li");

  li.textContent = oikeus;

  document
    .getElementById("elviratuuli")
    .appendChild(li);

});

function absLuku() {

  let eka =
    Number(document.getElementById("numero1").value);

  alert(Math.abs(eka));

}



function sqrtLuku() {

  let eka =
    Number(document.getElementById("numero1").value);

  alert(Math.sqrt(eka));

}



function powLuku() {

  let eka =
    Number(document.getElementById("numero1").value);

  let toka =
    Number(document.getElementById("numero2").value);

  alert(Math.pow(eka, toka));

}



function maxLuku() {

  let eka =
    Number(document.getElementById("numero1").value);

  let toka =
    Number(document.getElementById("numero2").value);

  alert(Math.max(eka, toka));

}



function minLuku() {

  let eka =
    Number(document.getElementById("numero1").value);

  let toka =
    Number(document.getElementById("numero2").value);

  alert(Math.min(eka, toka));

}



function roundLuku() {

  let eka =
    Number(document.getElementById("numero1").value);

  alert(Math.round(eka));

}