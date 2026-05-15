class Person {

  constructor(name, age, job, driversLicense) {

    this.name = name;

    this.age = age;

    this.job = job;

    this.driversLicense = driversLicense;

  }



  isUnderage() {

    return this.age < 18;

  }



  isStudent() {

    return this.job == "opiskelija" ||
           this.job == "student";

  }

}



let persons = [

  new Person(
    "Matti Meikäläinen",
    17,
    "opiskelija",
    false
  ),

  new Person(
    "Liisa Virtanen",
    25,
    "opettaja",
    true
  ),

  new Person(
    "Ahmed Ali",
    19,
    "student",
    false
  ),

  new Person(
    "Sofia Korhonen",
    32,
    "lääkäri",
    true
  ),

  new Person(
    "Veera Nieminen",
    16,
    "opiskelija",
    false
  )

];



persons.forEach(function(person) {

  let ika = person.age;

  if(!person.isUnderage()) {

    ika += " 🍺";

  }



  let tyo = person.job;

  if(person.isStudent()) {

    tyo += " 🎓";

  }



  document.getElementById("taulukko").innerHTML +=

    "<tr>" +

      "<td>" + person.name + "</td>" +

      "<td>" + ika + "</td>" +

      "<td>" + tyo + "</td>" +

      "<td>" + person.driversLicense + "</td>" +

    "</tr>";

});