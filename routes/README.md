Creare una nuova istanza di Exercise model
una volta importato il model, all'interno di una route get (cosa logico-sintatticamente corretta sarebbe /add-exercise)
1. inizializziamo costante exercise con valore costruttore Exercise (nome model) new Exercise() e come parametro diamo un oggetto che valorizza tutte le proprietà che abbiamo definito all'interno del Model.

2. una volta che abbiamo la nuova istanza possiamo utilizzare un metodo per salvarla nel db
il metodo .save
ogni nuova istanza del metodo ci permette di utilizzarci sopra moltissimi metodi
il metodo save ci permette di salvare l'istanza appena creata all'interno del database, tuttavia è un task asimncrono
quindi dopo il .save possiamo usare un .then
che ci permette di definire una promise, ovvero un qualcosa cche accadrà dopo che il .then sarà finito.
il metodo .then prende come parametro una callback function, la quale a sua volta prende come parametro la variabile "result" e nel body, nel caso del then del metodo save ci mettiamo metodo send di response

per integrità ci mettiamo anche un .catch che console.logga l'errore