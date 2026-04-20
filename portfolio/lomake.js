function send(e) {
    e.preventDefault(); // estää sivun uudelleenlatauksen

    let birthday = document.getElementById("birthday").value;
    let email = document.getElementById("email").value;
    let type = document.getElementById("type").value;
    let usage = document.getElementById("usage").checked;
    let body = document.getElementById("body").value;

    console.log(birthday);
    console.log(email);
    console.log(type);
    console.log(usage);
    console.log(body);

    document.getElementById("moi").close();
}
