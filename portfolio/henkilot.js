// Taulukko, jossa jokainen henkilö on objekti
let henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täläläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }
];

// Poimitaan tbody-elementti
const rivit = document.getElementById("rivit");

// Funktio, joka luo rivit taulukkoon
function luoRivit() {
    // Tyhjennetään vanhat rivit
    rivit.innerHTML = "";

    // Käydään läpi jokainen henkilö
    for (let henkilo of henkilot) {

        // Luodaan uusi tr-elementti
        let rivi = document.createElement("tr");

        // Luodaan jokaiselle tiedolle oma td
        let tdNimi = document.createElement("td");
        tdNimi.innerHTML = henkilo.name;

        let tdIka = document.createElement("td");
        tdIka.innerHTML = henkilo.age;

        let tdTyo = document.createElement("td");
        tdTyo.innerHTML = henkilo.job;

        let tdAjokortti = document.createElement("td");
        tdAjokortti.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

        // Lisätään td:t riviin
        rivi.appendChild(tdNimi);
        rivi.appendChild(tdIka);
        rivi.appendChild(tdTyo);
        rivi.appendChild(tdAjokortti);

        // Lisätään rivi tbodyyn
        rivit.appendChild(rivi);
    }
}

// Kutsutaan funktiota heti sivun latauksessa
luoRivit();
