//creo lista account registrati
//creo un prompt per raccogliere il nome utente currentUser; utente =false
//array utenti registrati userList vs currentsUser --> confronto
//     ciclo for, con i < userList.length
//      , se già registrato print "sei già registrato"
//                      se non registrato, userList.push

//potrei validare la dicitura "@boolean.it" per assicurarmi sia una mail... come?

const userList = ["gigi@boolean.it", "peppa@boolean.it", "rosamaria@boolean.it", "graziella@boolean.it"];
console.log(userList);
const currentUser = prompt("Inserisci la tua mail che termina con @boolean.it");   //servono due const utenti: uno che prenda il valore di ciascun elemento dell'array, l'altro inserito dall'utente.
let existProbe = false;

for (let i = 1; i < userList.length ; i++) {
    let listedUser = userList[i];
        console.log(listedUser)
    if (currentUser === listedUser) {
        existProbe = true;
        console.log("sono nel true")
    }
}
if (!existProbe) {  //existProbe===false
    userList.push(currentUser.toLowerCase());
    console.log(userList)
    alert("Nuovo utente, registrato!");
} else {
    alert("Utente già registrato");
}
