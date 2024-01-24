//# Primo Esercizio [Tavolo con i vip]

const tableVip = "Tavolo Vip";

const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

//* Array tramite il metodo ".map"
const vipsList = vips.map((name, i) => ({ tableVip, name, place: i + 1 }));

console.log(vipsList);
