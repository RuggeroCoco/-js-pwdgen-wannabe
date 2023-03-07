// Generatore di password insicurissimo
// Numero generato a fine password
const passwordEndNumber = 21;
// Domandare all'utente il suo nome
const userName = prompt("Ciao! Inserisci il tuo nome");
console.log(userName);
// Domandare all'utente il suo cognome
const userSurname = prompt("Qual'è il tuo cognome?");
console.log(userSurname);
// Domandare all'utente il suo colore preferito
const userColor = prompt("Qual'è il tuo colore preferito?");
console.log(userColor);
// Compongo la password
const userPassword = userName + userSurname + userColor + passwordEndNumber;
console.log(userPassword);

// Preparo il messaggio con il risultato
const message = `La tua password insicurissima è ${userPassword}`;
console.log(message);

// Stampo il messaggio
document.getElementById("user-password").innerHTML = message;
