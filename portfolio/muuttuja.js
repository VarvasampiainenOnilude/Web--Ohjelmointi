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