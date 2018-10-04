type Stooge = 'Larry' | 'Moe' | 'Curly';

function showMessage(person: Stooge, message: string ) {
    console.log(`Hey ${person}, ${message}`)
}

showMessage('Moe', 'Hit someone with a pie.');

showMessage('Curly', 'Watch out for that pie!');

showMessage('Jake', 'These examples are amazing!!!!!');
