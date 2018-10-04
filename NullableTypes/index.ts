interface Jedi {
    firstName: string;
    lastName: string;
    master: Jedi;
    hands: number
}

//N'Kata Del Gormo

var nKata: Jedi = {
    firstName: "N'Kata",
    lastName: 'Del Gormo',
    master: null,
    hands: 4
}

var yoda: Jedi = {
    firstName: 'Yoda',
    lastName: null,
    master: nKata,
    hands: 2
}

var obiWan: Jedi = {
    firstName: 'Obi Wan',
    lastName: 'Kenobi',
    master: yoda,
    hands: null
}

var luke: Jedi = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    master: obiWan,
    hands: 1
}


console.log(luke);