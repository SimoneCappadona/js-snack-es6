# Esercizio 
```
Snack 1:
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
const vips = [
  'Dwayne Johnson',
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];
La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell'ospite,
posto occupato.
Generiamo e stampiamo in console l'array di oggetti per i segnaposto.
Snack 2:
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.
Per preparare l'aula di un nuovo corso abbiamo bisogno dei seguenti dati:
Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);
Un array di oggetti "studente" che hanno un totale di voti superiore a 70
Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |
```

## Svolgimento Snack * 1
```
Importo un array con funzione map
richiamo il nome del tavolo
imposto l'assegnazione del posto in modo crescente
```

## Svolgimento Snack * 2
```
Credo un array con tutti gli id il nome degli studenti e il grado
imposto un array con il nome dello studente in maiuscolo
per ogni studente con grado superiore a 70 imposto un secondo array con metodo filter
per ogni studente con grado superiore a 70 e con id superiore a 120 imposto un terzo array con metodo filter

```