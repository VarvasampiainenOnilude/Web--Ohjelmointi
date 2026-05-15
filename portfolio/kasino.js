function heitto() {

  let numero =
    Math.floor(Math.random() * 6) + 1;

  document.getElementById("noppa").innerHTML =
    numero;

}



function lotto() {

  let numerot = [];



  while(numerot.length < 7) {

    let numero =
      Math.floor(Math.random() * 40) + 1;

    if(!numerot.includes(numero)) {

      numerot.push(numero);

    }

  }



  document.getElementById("lotto").innerHTML =
    numerot.join(", ");



  let pelaaja = [

    Number(document.getElementById("n1").value),

    Number(document.getElementById("n2").value),

    Number(document.getElementById("n3").value),

    Number(document.getElementById("n4").value),

    Number(document.getElementById("n5").value),

    Number(document.getElementById("n6").value),

    Number(document.getElementById("n7").value)

  ];



  let oikein = 0;



  pelaaja.forEach(function(numero) {

    if(numerot.includes(numero)) {

      oikein++;

    }

  });



  document.getElementById("oikein").innerHTML =
    "Oikein: " + oikein;

}