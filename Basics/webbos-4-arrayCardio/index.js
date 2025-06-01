

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// 1. Filter the list of inventors for those who were born in the 1500's
first = inventors.filter((list) => (list.year >= 1500 && list.year < 1600))
console.table(first);

// 2. Give us an array of the inventor first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Sort the inventors by birthdate, oldest to youngest
let third = inventors.sort((a, b) => a.year - b.year)
console.log(third);

const ordered = inventors.sort((a, b) => a.year > b.year);
console.table(ordered);

// 4. How many years did all the inventors live?
// let fourth = inventors.forEach((list) => {
//     console.table( list.passed - list.year)
// })

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);
// reduce() is used to loop through each inventor object in the inventors array.

// For each inventor:

// inventor.passed - inventor.year gives the number of years that inventor lived.

// total keeps accumulating the years from each inventor.

// 0 is the initial value of total.

// 5. Sort the inventors by years lived

// let fifth = inventors.sort((a,b) => (a.passed - a.year) - (b.passed - b.year))
// console.table(fifth)

// const oldest = inventors.sort(function(a, b) {
//     const lastInventor = a.passed - a.year;
//     const nextInventor = b.passed - b.year;
//     return lastInventor > nextInventor ? -1 : 1;
//   });
//   console.table(oldest);


//6. Sort the people alphabetically by last name
let six;
six = people.sort((a, b) => {
    let lastname = a.split(",")[1].trim();   // First name
    let blastname = b.split(",")[1].trim();  // First name

    if (lastname > blastname) return 1;
    if (lastname < blastname) return -1;
    return 0;
});
console.log(six);

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = {} 

data.forEach((data,idx) => {
    if (transportation[data]) {
        transportation[data]++
    }else{
        transportation[data] = 1
    }
})
console.log(transportation);


  

