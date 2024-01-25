// Snack 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  {
    name: "Pinarello",
    weight: 8.5,
  },
  {
    name: "Colnago",
    weight: 6.3,
  },
  {
    name: "Bianchi",
    weight: 6.9,
  },
  {
    name: "Wilier",
    weight: 7.0,
  },
  {
    name: "Cipollini",
    weight: 8.0,
  },
];

let bikesWeight = bikes[0];

// Ciclo per nome e bici più leggera
for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].weight < bikesWeight.weight) {
    bikesWeight = bikes[i];
  }
}

console.log(bikesWeight);

let { name, weight } = bikesWeight;

// STAMPA IN PAGINA
document.querySelector(
  ".bikescard"
).innerHTML = `<p>La bici più leggera è ${name}, con un peso di ${weight}</p>`;

// SNACK 4
// Usa l'array allegato alla traccia per completare i seguenti punti:
// Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici
// Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.

const footballTeams = [
  {
    team: "Toro",
    point: 0,
    fault: 0,
  },
  {
    team: "Milan",
    point: 0,
    fault: 0,
  },
  {
    team: "Inter",
    point: 0,
    fault: 0,
  },
  {
    team: "Juventus",
    point: 0,
    fault: 0,
  },
];

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}
footballTeams.forEach((element) => {
  element.point = randomNum();

  element.fault = randomNum();
});
console.log(footballTeams);

let result = [];

footballTeams.forEach((element) => {
  let { team, fault } = element;
  result.push({ team, fault });
});

console.log(result);
