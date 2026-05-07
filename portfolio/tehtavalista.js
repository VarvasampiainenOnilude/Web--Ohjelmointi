let lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (let arvo of lista) {
        let li = document.createElement("li");
        li.innerHTML = arvo;
        ul.appendChild(li);
    }
}

function lisaa() {
    let input = document.getElementById("input");
    let maaraInput = document.getElementById("maara");

    let arvo = input.value.trim();
    let maara = Number(maaraInput.value);

    if (arvo !== "" && maara > 0) {
        for (let i = 0; i < maara; i++) {
            lista.push(arvo);
        }
        paivitaLista();
        input.value = "";
        maaraInput.value = 1;
    }
}

paivitaLista();
