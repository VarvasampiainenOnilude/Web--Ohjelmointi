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
    rivit.innerHTML = "";

    for (let henkilo of henkilot) {

        let rivi = document.createElement("tr");

        // Nimi
        let tdNimi = document.createElement("td");
        tdNimi.innerHTML = henkilo.name;

        // Ikä + 🍺 jos 18 tai yli
        let tdIka = document.createElement("td");
        tdIka.innerHTML = henkilo.age >= 18
            ? henkilo.age + " 🍺"
            : henkilo.age;

        // Työ + 🎓 jos opiskelija
        let tdTyo = document.createElement("td");
        tdTyo.innerHTML = henkilo.job.toLowerCase() === "opiskelija"
            ? henkilo.job + " 🎓"
            : henkilo.job;

        // Ajokortti
        let tdAjokortti = document.createElement("td");
        tdAjokortti.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

        rivi.appendChild(tdNimi);
        rivi.appendChild(tdIka);
        rivi.appendChild(tdTyo);
        rivi.appendChild(tdAjokortti);

        rivit.appendChild(rivi);
    }
}

// Kutsutaan funktiota heti sivun latauksessa
luoRivit();


// Funktio uuden henkilön lisäämiseen
function lisaaHenkilo() {
    let nimi = document.getElementById("nimi").value.trim();
    let ika = Number(document.getElementById("ika").value);
    let tyo = document.getElementById("tyo").value.trim();
    let ajokortti = document.getElementById("ajokortti").checked;

    // Ikävalidointi
    if (ika < 0) {
        alert("iän pitää olla positiivinen luku");
        return;
    }

    // Luodaan uusi henkilöobjekti
    let uusi = {
        name: nimi,
        age: ika,
        job: tyo,
        driversLicense: ajokortti
    };

    // Lisätään taulukkoon
    henkilot.push(uusi);

    // Päivitetään näkymä
    luoRivit();

    // Tyhjennetään lomake
    document.getElementById("nimi").value = "";
    document.getElementById("ika").value = "";
    document.getElementById("tyo").value = "";
    document.getElementById("ajokortti").checked = false;
}
