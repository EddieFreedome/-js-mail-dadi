//creo lista account registrati
//creo un prompt per raccogliere il nome utente currentUser; utente =false
//array utenti registrati userList vs currentsUser --> confronto
//     ciclo for, con i < userList.length
//      , se già registrato print "sei già registrato"
//                      se non registrato, userList.push

const userList = ["gigi", "peppa", "rosamaria", "graziella"];
console.log(userList);
const currentUser = prompt("Inserisci il tuo nome");   //servono due const utenti: uno che prenda il valore di ciascun elemento dell'array, l'altro inserito dall'utente.
let existprobe = false;

for (let i = 1; i < userList.length ; i++) {
    const listedUser = userList[i];

    if (currentUser === listedUser) {
        existprobe === true;
        
    }
}


if (!existprobe) {  //currentUser===false
    userList.push(currentUser.toLowerCase());
    console.log(userList)
    alert("Nuovo utente, registrato!");
} else {
    alert("Utente già registrato");
}
