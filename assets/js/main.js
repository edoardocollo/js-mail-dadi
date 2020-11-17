// Chiedi all’utente la sua email,

var mailUtente = prompt("inserisci e-mail                   (suggerimento: la gmail dell'uomo libero di half-life)");
console.log(mailUtente);

// validazione

var listaUtentiAutorizzati = ['gigiilbello@gmail.com', 'gordon.freeman@gmail.com', 'valve@gmail.com'];

for (var i = 0; i < listaUtentiAutorizzati.length; i++) {
  var validazione;
  if(listaUtentiAutorizzati[i] == mailUtente ){
    validazione = true;
  } else {
    validazione = false;
  }
}
// stampa un messaggio appropriato sull’esito del controllo.

if (validazione == true){
  alert('password corretta');
}else{
  alert('password non valida');
}


// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer



// button
var lancioDado = document.getElementById('lancio_dado');
lancioDado.addEventListener('click',
  function(){
    var valoreGiocatore = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    console.log(valoreGiocatore);
    var valorePc = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    console.log(valorePc);

    var lancioGiocatore = document.getElementById('lancio_giocatore');
    var lancioPc = document.getElementById('lancio_pc');
    var risultato = document.getElementById('risultato');
    lancioGiocatore.innerHTML = valoreGiocatore;
    lancioPc.innerHTML = valorePc;
    if (valoreGiocatore > valorePc) {
      console.log('hai vinto');
      risultato.innerHTML = 'hai vinto';
    } else {
      console.log('hai perso');
      risultato.innerHTML = 'hai perso';

    }



  }
);


// Stabilire il vincitore, in base a chi fa il punteggio più alto.
