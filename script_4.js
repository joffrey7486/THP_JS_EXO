const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

console.log("Entrepreneur dont la naissance est dans les années 70")
let bornIn70s = entrepreneurs.filter(
    item => item.year > 1970 && item.year < 1980
)
console.log(bornIn70s)

console.log("Nom et prénom de chaques entrepreneurs")
let fullName = entrepreneurs.map(item => {
    let nameArray = {}
    nameArray = [item.first, item.last]
    return nameArray
})
console.log(fullName)

console.log("Nom et prénom et âge de chaques entrepreneurs")
let thisAge = entrepreneurs.map(item => {
    let allNamesAndAges = {}
    allNamesAndAges = [item.first, item.last, (2021 - item.year)]
    return allNamesAndAges
})
console.log(thisAge)

console.log("Tri alphabétique par nom de famille")
let byFamilyNames = entrepreneurs.sort((a, b) => a.last < b.last ? -1 : 1)
console.log(byFamilyNames)