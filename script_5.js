const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Vérifie si les livres ont été au moins empruntés une fois ")
let atLeastOneTime = books.every(item => item.rented > 1) ? "Ils ont bien tous été emprunté une fois" : "Non un ou plusieurs livres n'a pas fait l'objet d'un emprunt"
console.log(atLeastOneTime)

console.log("Retourne le livre le plus emprunté ")
let mostRended = books.reduce((a, b) => a.rented > b.rented ? a : b)
console.log(mostRended)

console.log("Retourne le livre le moins emprunté ")
let leastRended = books.reduce((a, b) => a.rented < b.rented ? a : b)
console.log(leastRended)

console.log("Retourne le livre de ID demandé ")
let findByID = books.filter(item => item.id === 873495)
console.log(findByID)

console.log("Retourne les livres qui ne correspondent pas à ID demandé ")
let arrayWithoutID = books.filter(item => item.id !== 133712)
console.log(arrayWithoutID)

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
let alphaOrderWithoutID = arrayWithoutID.sort((a, b) => a.title < b.title ? -1 : 1)
console.log(alphaOrderWithoutID)