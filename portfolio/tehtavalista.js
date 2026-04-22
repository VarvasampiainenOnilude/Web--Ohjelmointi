let lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = lista[i];
        ul.appendChild(li);
    }
}

function lisaa() {
    let input = document.getElementById("uusi");
    let arvo = input.value;

    if (arvo.trim() !== "") {
        lista.push(arvo);
        paivitaLista();
        input.value = "";
    }
}

paivitaLista();
