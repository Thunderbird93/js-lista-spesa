/*
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).

Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while
*/


/*
const listaSpesa = ['alcolici', 'carne','frutta', 'pasta','verdure'];
listaSpesa.forEach(function(x){
    console.log(x);
})
*/


/*con for
const listaSpesa = ['alcolici', 'carne','frutta', 'pasta','verdure'];
for (i=0; i<listaSpesa.length; i++)
document.writeln(listaSpesa[i]);
*/

//con while
const listaSpesa = ['alcolici', 'carne','frutta', 'pasta','verdure'];

let c=0;
while (c<listaSpesa.length){
    document.writeln(listaSpesa[c]);
    c++;
    //console.log(listaSpesa);
}
